/**
 * DOM Module
 * Handles DOM manipulation with Event Delegation and modern array methods
 */

/**
 * Creates a card element from post data
 * @param {Object} post - Post data
 * @returns {HTMLElement} Card element
 */
export function createCardElement(post) {
  const article = document.createElement("article");
  article.className = "card";
  article.dataset.id = post.id;
  article.dataset.category = post.category;

  article.innerHTML = `
    <img
      class="card__image"
      src="${post.image}"
      alt="Imagem ilustrativa do artigo: ${escapeHtml(post.title)}"
      loading="lazy"
    />
    <div class="card__body">
      <div class="card__header">
        <h3 class="card__title">${escapeHtml(post.title)}</h3>
        <span class="card__tag">${escapeHtml(post.category)}</span>
      </div>
      <p class="card__description">${escapeHtml(truncateText(post.body, 120))}</p>
      <div class="card__footer">
        <div class="card__meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>${post.readTime} min read</span>
        </div>
        <div class="card__meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>${post.likes}</span>
        </div>
      </div>
    </div>
  `;

  return article;
}

/**
 * Renders a list of cards into a container
 * @param {HTMLElement} container - Container element
 * @param {Array} posts - Array of posts
 */
export function renderCards(container, posts) {
  container.innerHTML = "";

  if (posts.length === 0) {
    container.classList.add("results--empty");
    container.innerHTML = `
      <svg class="results__empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
      <h3 class="results__empty-title">No results found</h3>
      <p class="results__empty-text">Try adjusting your search or filter to find what you're looking for.</p>
    `;
    return;
  }

  container.classList.remove("results--empty");

  const fragment = document.createDocumentFragment();
  posts.forEach((post) => {
    fragment.appendChild(createCardElement(post));
  });
  container.appendChild(fragment);
}

/**
 * Shows loading state
 * @param {HTMLElement} container - Container element
 */
export function showLoading(container) {
  container.innerHTML = `
    <div class="loading">
      <div class="loading__spinner"></div>
      <p class="loading__text">Loading posts...</p>
    </div>
  `;
}

/**
 * Shows error state
 * @param {HTMLElement} container - Container element
 * @param {string} message - Error message
 * @param {Function} onRetry - Retry callback
 */
export function showError(container, message, onRetry) {
  container.innerHTML = `
    <div class="error">
      <svg class="error__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <h3 class="error__title">Something went wrong</h3>
      <p class="error__message">${escapeHtml(message)}</p>
      <button class="btn btn--primary" id="retry-btn">Try Again</button>
    </div>
  `;

  const retryBtn = container.querySelector("#retry-btn");
  if (retryBtn && onRetry) {
    retryBtn.addEventListener("click", onRetry);
  }
}

/**
 * Updates the stats display
 * @param {HTMLElement} element - Stats element
 * @param {number} total - Total items
 * @param {number} filtered - Filtered items
 */
export function updateStats(element, total, filtered) {
  if (filtered === total) {
    element.textContent = `Showing all ${total} posts`;
  } else {
    element.textContent = `Showing ${filtered} of ${total} posts`;
  }
}

/**
 * Sets up Event Delegation for filter buttons
 * @param {HTMLElement} container - Filter container
 * @param {Function} onFilter - Callback when filter changes
 */
export function setupFilterDelegation(container, onFilter) {
  container.addEventListener("click", (event) => {
    const button = event.target.closest(".toolbar__filter-btn");
    if (!button) return;

    container.querySelectorAll(".toolbar__filter-btn").forEach((btn) => {
      btn.classList.remove("toolbar__filter-btn--active");
    });

    button.classList.add("toolbar__filter-btn--active");
    onFilter(button.dataset.filter);
  });
}

/**
 * Escapes HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Truncates text to a maximum length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}
