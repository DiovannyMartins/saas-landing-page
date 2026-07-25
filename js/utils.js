/**
 * Utils Module
 * Utility functions for the application
 */

/**
 * Debounces a function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Throttles a function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 100) {
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
 * Gets a safe DOM element with validation
 * @param {string} selector - CSS selector or element ID
 * @param {string} context - Context description for warnings
 * @returns {HTMLElement|null} Element or null
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
 * Gets all matching DOM elements
 * @param {string} selector - CSS selector
 * @param {string} context - Context description
 * @returns {NodeList} NodeList
 */
export function getAllElements(selector, context = "elements") {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    console.warn(`Warning: No ${context} found for: ${selector}`);
  }

  return elements;
}

/**
 * Formats a number with locale-specific separators
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

/**
 * Generates a unique ID
 * @param {string} prefix - Optional prefix
 * @returns {string} Unique ID
 */
export function generateId(prefix = "id") {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Checks if the user prefers dark mode
 * @returns {boolean} True if dark mode is preferred
 */
export function prefersDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Saves data to localStorage safely
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 */
export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Failed to save to localStorage:", error);
  }
}

/**
 * Loads data from localStorage safely
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if not found
 * @returns {*} Stored value or default
 */
export function loadFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn("Failed to load from localStorage:", error);
    return defaultValue;
  }
}
