/**
 * Scroll effects module
 * Handles header scroll effect and scroll reveal animations
 */

import { getElement, getAllElements, throttle } from "./utils.js";

const SCROLL_MINIMO = 20;

export function initScrollEffects() {
  const navbar = getElement(".navbar", "Navbar");

  if (navbar) {
    const handleScroll = throttle(() => {
      navbar.classList.toggle("navbar--scrolled", window.scrollY > SCROLL_MINIMO);
    }, 100);

    window.addEventListener("scroll", handleScroll);
  }

  initScrollReveal();
}

function initScrollReveal() {
  const revealElements = getAllElements(".reveal", "reveal elements");

  if (revealElements.length === 0) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}
