/**
 * API Module
 * Handles data fetching with async/await and error handling
 */

const API_BASE_URL = "https://jsonplaceholder.typicode.com";
const API_DELAY_MS = 800;

/**
 * Simulates network delay for realistic UX
 * @param {number} ms - Delay in milliseconds
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(message, status = 500, data = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

/**
 * Fetches posts from the API
 * @param {Object} options - Fetch options
 * @param {number} options.limit - Number of posts to fetch
 * @returns {Promise<Array>} Array of posts
 * @throws {ApiError} When the request fails
 */
export async function fetchPosts({ limit = 12 } = {}) {
  try {
    await delay(API_DELAY_MS);

    const response = await fetch(`${API_BASE_URL}/posts?_limit=${limit}`);

    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch posts: ${response.statusText}`,
        response.status
      );
    }

    const posts = await response.json();

    const enrichedPosts = posts.map((post) => ({
      ...post,
      image: `https://picsum.photos/seed/${post.id}/400/225`,
      category: getRandomCategory(),
      readTime: Math.floor(Math.random() * 10) + 3,
      likes: Math.floor(Math.random() * 500) + 10,
    }));

    return enrichedPosts;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      "Network error. Please check your connection and try again.",
      0,
      error
    );
  }
}

/**
 * Fetches a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} Post object
 * @throws {ApiError} When the request fails
 */
export async function fetchPostById(id) {
  try {
    await delay(API_DELAY_MS / 2);

    const response = await fetch(`${API_BASE_URL}/posts/${id}`);

    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch post ${id}: ${response.statusText}`,
        response.status
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError("Failed to fetch post details.", 0, error);
  }
}

/**
 * Returns a random category
 * @returns {string} Category name
 */
function getRandomCategory() {
  const categories = [
    "Technology",
    "Design",
    "Business",
    "Marketing",
    "Development",
    "Tutorial",
  ];
  return categories[Math.floor(Math.random() * categories.length)];
}

/**
 * Simulates a search operation
 * @param {Array} items - Items to search
 * @param {string} query - Search query
 * @returns {Array} Filtered items
 */
export function searchItems(items, query) {
  if (!query || !query.trim()) {
    return items;
  }

  const normalizedQuery = query.toLowerCase().trim();

  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.body.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery)
  );
}
