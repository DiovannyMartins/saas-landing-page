/**
 * Utility functions for performance and validation
 */

/**
 * Throttle function to limit execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Safely get DOM element with validation
 * @param {string} selector - CSS selector or element ID
 * @param {string} context - Context description for error messages
 * @returns {HTMLElement|null} Element or null if not found
 */
export function getElement(selector, context = "element") {
  const element =
    selector.startsWith("#") || selector.startsWith(".")
      ? document.querySelector(selector)
      : document.getElementById(selector);

  if (!element) {
    console.warn(`Warning: ${context} not found: ${selector}`);
    return null;
  }

  return element;
}

/**
 * Safely get all DOM elements matching selector
 * @param {string} selector - CSS selector
 * @param {string} context - Context description for error messages
 * @returns {NodeList} NodeList (empty if none found)
 */
export function getAllElements(selector, context = "elements") {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    console.warn(`Warning: No ${context} found for: ${selector}`);
  }

  return elements;
}
