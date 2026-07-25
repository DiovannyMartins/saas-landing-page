/**
 * Main application entry point
 * Initializes all modules when DOM is ready
 */

import { initMenu } from "./modules/menu.js";
import { initScrollEffects } from "./modules/scroll.js";
import { initCounters } from "./modules/counter.js";
import { initBillingToggle } from "./modules/billing.js";
import { initScrollSpy } from "./modules/scrollspy.js";
import { initTheme } from "./modules/theme.js";
import { fetchTestimonials, transformTestimonials } from "./modules/api.js";
import { renderTestimonials } from "./modules/dom.js";

document.addEventListener("DOMContentLoaded", async () => {
  initMenu();
  initScrollEffects();
  initCounters();
  initBillingToggle();
  initScrollSpy();
  initTheme();

  await loadTestimonials();
});

/**
 * Loads testimonials from API with error handling
 * Demonstrates async/await with try/catch
 */
async function loadTestimonials() {
  try {
    const data = await fetchTestimonials();
    const transformed = transformTestimonials(data);

    renderTestimonials(transformed);
  } catch (error) {
    console.error("Failed to load testimonials:", error.message);
  }
}
