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
        <p class="testimonial-card__quote">"${escapeHtml(testimonial.quote)}"</p>
      </blockquote>
      <div class="testimonial-card__author">
        <div class="testimonial-card__avatar ${testimonial.color}" aria-hidden="true"></div>
        <div class="testimonial-card__author-info">
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
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
