/**
 * API module
 * Simulates API consumption with async/await and error handling
 * Demonstrates professional patterns for data fetching
 */

const API_DELAY_MS = 600;

export class ApiError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Simulates fetching testimonials from an API
 * @returns {Promise<Array>} Array of testimonials
 * @throws {ApiError} When the request fails
 */
export async function fetchTestimonials() {
  try {
    await delay(API_DELAY_MS);

    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3");

    if (!response.ok) {
      throw new ApiError(`Failed to fetch: ${response.statusText}`, response.status);
    }

    const users = await response.json();

    const roles = ["CTO @ TechFlow", "Head of Product @ StartUpX", "Design Lead @ Creativ"];
    const quotes = [
      "A melhor ferramenta que já usamos. A velocidade e a interface limpa economizaram centenas de horas da nossa equipe de engenharia.",
      "Migramos de 3 plataformas diferentes para o NexaSaaS. A centralização dos nossos dados mudou o jogo para nossa empresa.",
      "O suporte é fenomenal e a plataforma nunca cai. O design me lembra a qualidade da Vercel e do Stripe.",
    ];
    const colors = ["bg-blue", "bg-purple", "bg-green"];

    return users.map((user, index) => ({
      name: user.name,
      role: roles[index] || "Customer",
      quote: quotes[index] || "Great product!",
      color: colors[index] || "bg-blue",
    }));
  } catch (error) {
    if (error instanceof ApiError) throw error;

    console.error("Network Error:", error);
    throw new ApiError("Falha na conexão. Tente novamente mais tarde.", 0);
  }
}

/**
 * Filters items using modern array methods
 * @param {Array} items - Items to filter
 * @param {string} query - Search query
 * @returns {Array} Filtered items
 */
export function filterItems(items, query) {
  if (!query || !query.trim()) {
    return items;
  }

  const normalizedQuery = query.toLowerCase().trim();

  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.role.toLowerCase().includes(normalizedQuery) ||
      item.quote.toLowerCase().includes(normalizedQuery)
  );
}

/**
 * Transforms data using map
 * @param {Array} items - Items to transform
 * @returns {Array} Transformed items
 */
export function transformTestimonials(items) {
  return items.map((item) => ({
    ...item,
    initials: item.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase(),
    fullName: `${item.name} - ${item.role}`,
  }));
}
