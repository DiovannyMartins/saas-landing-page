/**
 * Main application entry point
 * Initializes all modules when DOM is ready
 */

import { initMenu } from "./modules/menu.js";
import { initScrollEffects } from "./modules/scroll.js";
import { initCounters } from "./modules/counter.js";
import { initBillingToggle } from "./modules/billing.js";
import { initScrollSpy } from "./modules/scrollspy.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initScrollEffects();
  initCounters();
  initBillingToggle();
  initScrollSpy();
});
