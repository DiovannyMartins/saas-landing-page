/**
 * DOM manipulation module
 * Handles rendering of dynamic content
 */

import { getElement } from "./utils.js";

/**
 * Renders testimonials in the DOM
 * @param {Array} testimonials - Array of testimonial objects
 */
export function renderTestimonials(testimonials) {
  const container = getElement(".testimonials__grid", "Testimonials container");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  testimonials.forEach((testimonial) => {
    const article = document.createElement("article");
    article.className = "testimonial-card";

    article.innerHTML = `
      <blockquote>
        <p class="quote">"${escapeHtml(testimonial.quote)}"</p>
      </blockquote>
      <div class="author">
        <div class="avatar ${testimonial.color}" role="img" aria-label="Foto de ${escapeHtml(testimonial.name)}"></div>
        <div class="author-info">
          <h3>${escapeHtml(testimonial.name)}</h3>
          <span>${escapeHtml(testimonial.role)}</span>
        </div>
      </div>
    `;

    fragment.appendChild(article);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
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
