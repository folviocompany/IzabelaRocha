export function initEffects() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const progress = document.getElementById("scroll-progress");
  const parallax = [
    ...document.querySelectorAll<HTMLElement>("[data-parallax]"),
  ];
  let scrollFrame = 0;
  const updateScroll = () => {
    scrollFrame = 0;
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const positions = reduced.matches
      ? []
      : parallax.map((element) => ({
          element,
          rect: element.getBoundingClientRect(),
        }));
    if (progress)
      progress.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;
    for (const { element, rect } of positions) {
      if (rect.bottom < 0 || rect.top > innerHeight) continue;
      const factor = Number(element.dataset.parallax || 0.1);
      element.style.transform = `translate3d(0, ${(rect.top + rect.height / 2 - innerHeight / 2) * -factor}px, 0)`;
    }
  };
  const scheduleScroll = () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  };
  window.addEventListener("scroll", scheduleScroll, { passive: true });
  window.addEventListener("resize", scheduleScroll, { passive: true });
  updateScroll();

  const hero = document.getElementById("inicio");
  const layers = [
    ...(hero?.querySelectorAll<HTMLElement>("[data-depth]") || []),
  ];
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  let heroVisible = false;
  let heroX = 0,
    heroY = 0,
    currentX = 0,
    currentY = 0;
  let mouseX = 0,
    mouseY = 0,
    ringX = 0,
    ringY = 0;
  let cursorVisible = false,
    frame = 0;
  const enabled = () => pointer.matches && !reduced.matches && !document.hidden;
  const update = () => {
    frame = 0;
    if (!enabled()) return;
    let moving = false;
    if (heroVisible) {
      currentX += (heroX - currentX) * 0.12;
      currentY += (heroY - currentY) * 0.12;
      moving = Math.abs(heroX - currentX) + Math.abs(heroY - currentY) > 0.001;
      for (const layer of layers) {
        const depth = Number(layer.dataset.depth || 10);
        layer.style.transform = `translate3d(${currentX * depth}px, ${currentY * depth * 0.6}px, 0)`;
      }
    }
    if (cursorVisible && dot && ring) {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      moving ||= Math.abs(mouseX - ringX) + Math.abs(mouseY - ringY) > 0.1;
    }
    if (moving) schedule();
  };
  const schedule = () => {
    if (!frame && enabled()) frame = requestAnimationFrame(update);
  };
  const hideCursor = () => {
    cursorVisible = false;
    document.documentElement.classList.remove("cc");
  };
  hero?.addEventListener(
    "pointermove",
    (event) => {
      if (!enabled()) return;
      heroX = event.clientX / innerWidth - 0.5;
      heroY = event.clientY / innerHeight - 0.5;
      schedule();
    },
    { passive: true },
  );
  hero?.addEventListener("pointerleave", () => {
    heroX = heroY = 0;
    schedule();
  });
  if (hero && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      hero.classList.toggle("effects-paused", !heroVisible);
      if (!heroVisible) {
        heroX = heroY = currentX = currentY = 0;
        layers.forEach((layer) => layer.style.removeProperty("transform"));
      } else schedule();
    }).observe(hero);
  }
  window.addEventListener(
    "pointermove",
    (event) => {
      if (!enabled() || event.pointerType === "touch" || !dot || !ring) return;
      const target = event.target;
      if (!(target instanceof Element) || target.closest("iframe")) {
        hideCursor();
        return;
      }
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!cursorVisible) {
        ringX = mouseX;
        ringY = mouseY;
      }
      cursorVisible = true;
      document.documentElement.classList.add("cc");
      ring.classList.toggle(
        "cc-active",
        !!target.closest("a, button, input, summary"),
      );
      schedule();
    },
    { passive: true },
  );
  document.documentElement.addEventListener("pointerleave", hideCursor);
  window.addEventListener("blur", hideCursor);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") hideCursor();
  });

  const buttons = [...document.querySelectorAll<HTMLElement>(".btn")];
  buttons.forEach((button) => {
    button.addEventListener(
      "pointermove",
      (event) => {
        if (!enabled() || event.pointerType === "touch") return;
        const rect = button.getBoundingClientRect();
        button.style.translate = `${(event.clientX - rect.left - rect.width / 2) * 0.18}px ${(event.clientY - rect.top - rect.height / 2) * 0.3}px`;
      },
      { passive: true },
    );
    button.addEventListener("pointerleave", () =>
      button.style.removeProperty("translate"),
    );
    button.addEventListener("blur", () =>
      button.style.removeProperty("translate"),
    );
  });
  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    hideCursor();
    layers.forEach((layer) => layer.style.removeProperty("transform"));
    parallax.forEach((layer) => layer.style.removeProperty("transform"));
    buttons.forEach((button) => button.style.removeProperty("translate"));
    currentX = currentY = heroX = heroY = 0;
    scheduleScroll();
  };
  reduced.addEventListener("change", reset);
  pointer.addEventListener("change", reset);
  document.addEventListener("visibilitychange", reset);
}
