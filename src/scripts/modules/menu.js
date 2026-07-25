/**
 * Mobile menu module
 * Handles mobile menu toggle and accessibility
 */

import { getElement } from "./utils.js";

export function initMenu() {
  const menuToggle = getElement("menuToggle", "Menu toggle button");
  const navMenuWrapper = getElement(".nav-menu-wrapper", "Navigation menu");

  if (!menuToggle || !navMenuWrapper) return;

  const navLinks = navMenuWrapper.querySelectorAll("a");

  menuToggle.addEventListener("click", () => {
    const isExpanded = navMenuWrapper.classList.toggle("nav-menu-wrapper--active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Fechar menu" : "Abrir menu"
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenuWrapper.classList.remove("nav-menu-wrapper--active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}
