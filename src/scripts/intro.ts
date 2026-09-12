export function initIntro() {
  const root = document.documentElement;
  const intro = document.getElementById("intro");
  if (!intro || !root.classList.contains("intro-active")) {
    intro?.remove();
    return;
  }
  let openingTimer: ReturnType<typeof setTimeout>;
  let fallbackTimer: ReturnType<typeof setTimeout>;
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finish = () => {
    clearTimeout(openingTimer);
    clearTimeout(fallbackTimer);
    root.classList.remove("intro-active", "intro-opening");
    intro.remove();
    document.dispatchEvent(new Event("intro-ready"));
    motion.removeEventListener("change", onMotionChange);
  };
  const onMotionChange = () => {
    if (motion.matches) finish();
  };
  motion.addEventListener("change", onMotionChange);
  intro.querySelector(".intro-panel-left")?.addEventListener(
    "transitionend",
    (event) => {
      if ((event as TransitionEvent).propertyName === "transform") finish();
    },
    { once: true },
  );
  openingTimer = setTimeout(() => {
    root.classList.add("intro-opening");
    intro.classList.add("intro-leave");
    root.classList.remove("intro-active");
    document.dispatchEvent(new Event("intro-ready"));
    try {
      sessionStorage.setItem("introDone", "1");
    } catch {}
  }, 900);
  fallbackTimer = setTimeout(finish, 1900);
}
