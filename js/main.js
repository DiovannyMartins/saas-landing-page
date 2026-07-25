/**
 * Main Application Module
 * Entry point that initializes and orchestrates all modules
 */

import { fetchPosts, searchItems } from "./api.js";
import { renderCards, showLoading, showError, updateStats, setupFilterDelegation } from "./dom.js";
import { getElement, debounce, prefersDarkMode, saveToStorage, loadFromStorage } from "./utils.js";

/**
 * Application state
 */
const state = {
  posts: [],
  filteredPosts: [],
  currentFilter: "all",
  searchQuery: "",
};

/**
 * DOM element references
 */
const elements = {};

/**
 * Initializes the application
 */
async function init() {
  cacheElements();
  initTheme();
  await loadPosts();
  setupEventListeners();
}

/**
 * Caches DOM element references for performance
 */
function cacheElements() {
  elements.resultsContainer = getElement("#results", "Results container");
  elements.searchInput = getElement("#search-input", "Search input");
  elements.filterContainer = getElement("#filter-buttons", "Filter container");
  elements.statsElement = getElement("#stats", "Stats element");
  elements.themeToggle = getElement("#theme-toggle", "Theme toggle");
}

/**
 * Initializes theme based on user preference
 */
function initTheme() {
  const savedTheme = loadFromStorage("theme");
  const preferredTheme = savedTheme || (prefersDarkMode() ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", preferredTheme);
  updateThemeIcon(preferredTheme);
}

/**
 * Toggles between light and dark themes
 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  saveToStorage("theme", newTheme);
  updateThemeIcon(newTheme);
}

/**
 * Updates the theme toggle icon
 * @param {string} theme - Current theme
 */
function updateThemeIcon(theme) {
  if (!elements.themeToggle) return;

  const sunIcon = elements.themeToggle.querySelector(".theme-toggle__icon--light");
  const moonIcon = elements.themeToggle.querySelector(".theme-toggle__icon--dark");

  if (sunIcon && moonIcon) {
    sunIcon.style.display = theme === "dark" ? "block" : "none";
    moonIcon.style.display = theme === "light" ? "block" : "none";
  }
}

/**
 * Loads posts from the API
 */
async function loadPosts() {
  if (!elements.resultsContainer) return;

  showLoading(elements.resultsContainer);

  try {
    state.posts = await fetchPosts({ limit: 12 });
    state.filteredPosts = [...state.posts];

    applyFilters();
  } catch (error) {
    console.error("Failed to load posts:", error);
    showError(elements.resultsContainer, error.message, loadPosts);
  }
}

/**
 * Sets up all event listeners
 */
function setupEventListeners() {
  if (elements.searchInput) {
    const debouncedSearch = debounce(handleSearch, 300);
    elements.searchInput.addEventListener("input", debouncedSearch);
  }

  if (elements.filterContainer) {
    setupFilterDelegation(elements.filterContainer, handleFilter);
  }

  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", toggleTheme);
  }
}

/**
 * Handles search input
 * @param {Event} event - Input event
 */
function handleSearch(event) {
  state.searchQuery = event.target.value;
  applyFilters();
}

/**
 * Handles filter button click
 * @param {string} category - Selected category
 */
function handleFilter(category) {
  state.currentFilter = category;
  applyFilters();
}

/**
 * Applies all active filters (search + category)
 * Uses modern array methods: filter
 */
function applyFilters() {
  let filtered = [...state.posts];

  if (state.currentFilter !== "all") {
    filtered = filtered.filter((post) => post.category === state.currentFilter);
  }

  if (state.searchQuery) {
    filtered = searchItems(filtered, state.searchQuery);
  }

  state.filteredPosts = filtered;

  renderResults();
}

/**
 * Renders the filtered results
 */
function renderResults() {
  if (!elements.resultsContainer) return;

  renderCards(elements.resultsContainer, state.filteredPosts);

  if (elements.statsElement) {
    updateStats(elements.statsElement, state.posts.length, state.filteredPosts.length);
  }
}

document.addEventListener("DOMContentLoaded", init);
