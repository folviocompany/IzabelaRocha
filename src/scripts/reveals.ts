export function initReveals() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
  // ------ Divide títulos [data-split] em palavras para reveal em cascata ------
  const splitHeading = (el: HTMLElement) => {
    let index = 0;
    const walk = (node: Node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const fragment = document.createDocumentFragment();
          (child.textContent || "").split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              fragment.appendChild(document.createTextNode(" "));
              return;
            }
            const wrapper = document.createElement("span");
            wrapper.className = "sw";
            const inner = document.createElement("span");
            inner.textContent = part;
            inner.style.setProperty("--d", `${index++ * 0.05}s`);
            wrapper.appendChild(inner);
            fragment.appendChild(wrapper);
          });
          node.replaceChild(fragment, child);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    };
    walk(el);
  };
  if (!reducedMotion.matches) {
    document
      .querySelectorAll<HTMLElement>("[data-split]")
      .forEach(splitHeading);
  }

  // ------ Animações de entrada ao rolar ------
  const revealEls = document.querySelectorAll(
    "[data-reveal], [data-split], [data-curtain]",
  );
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  revealEls.forEach((el) => io.observe(el));

  document.documentElement.classList.add("motion-ready");
  // ------ Contadores animados ([data-counter]) ------
  const formatNumber = (value: number, decimals: number) =>
    value.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  const animateCounter = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.target || "0");
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    if (reducedMotion.matches) {
      el.textContent = formatNumber(target, decimals);
      return;
    }
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatNumber(target * eased, decimals);
      if (reducedMotion.matches) {
        el.textContent = formatNumber(target, decimals);
        return;
      }
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counterIo = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          counterIo.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 },
  );
  const observeCounters = () =>
    document
      .querySelectorAll<HTMLElement>("[data-counter]")
      .forEach((el) => counterIo.observe(el));
  if (document.documentElement.classList.contains("intro-active")) {
    document.addEventListener("intro-ready", observeCounters, { once: true });
  } else {
    observeCounters();
  }
  reducedMotion.addEventListener("change", () => {
    if (!reducedMotion.matches) return;
    document.documentElement.classList.remove("motion-ready");
    io.disconnect();
    counterIo.disconnect();
  });
}
