/**
 * Scroll spy module
 * Highlights active navigation link based on scroll position
 */

import { getAllElements } from "./utils.js";

export function initScrollSpy() {
  const sections = getAllElements("section[id]", "sections");
  const navLinks = getAllElements(".nav-links a", "navigation links");

  if (sections.length === 0 || navLinks.length === 0) return;

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  sections.forEach((section) => spyObserver.observe(section));
}
