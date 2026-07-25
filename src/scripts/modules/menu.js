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

  function closeMenu() {
    navMenuWrapper.classList.remove("nav-menu-wrapper--active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }

  function openMenu() {
    navMenuWrapper.classList.add("nav-menu-wrapper--active");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu");
  }

  function toggleMenu() {
    const isOpen = navMenuWrapper.classList.contains("nav-menu-wrapper--active");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const isMenuOpen = navMenuWrapper.classList.contains("nav-menu-wrapper--active");
    const isClickInsideMenu = navMenuWrapper.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (isMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const isMenuOpen = navMenuWrapper.classList.contains("nav-menu-wrapper--active");
      if (isMenuOpen) {
        closeMenu();
        menuToggle.focus();
      }
    }
  });
}
