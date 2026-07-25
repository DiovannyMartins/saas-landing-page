/**
 * Theme module
 * Handles dark/light theme toggle with localStorage persistence
 */

import { getElement } from "./utils.js";

const THEME_KEY = "nexasaas-theme";
const DARK = "dark";
const LIGHT = "light";

export function initTheme() {
  const themeToggle = getElement("themeToggle", "Theme toggle button");
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? DARK : LIGHT);

  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === DARK ? LIGHT : DARK;
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? DARK : LIGHT);
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
