import api from './api.js';

export const restaurantService = {
  // Get all restaurants with optional filters
  getRestaurants: async (filters = {}) => {
    const queryParams = new URLSearchParams();
    
    if (filters.cuisine) queryParams.append('cuisine', filters.cuisine);
    if (filters.location) queryParams.append('location', filters.location);
    if (filters.minRating) queryParams.append('minRating', filters.minRating);

    const queryString = queryParams.toString();
    const endpoint = `/restaurants${queryString ? `?${queryString}` : ''}`;
    
    return await api.get(endpoint);
  },

  // Get single restaurant by ID
  getRestaurant: async (id) => {
    return await api.get(`/restaurants/${id}`);
  },

  // Get restaurant menu items
  getRestaurantMenu: async (restaurantId, filters = {}) => {
    const queryParams = new URLSearchParams();
    
    if (filters.category) queryParams.append('category', filters.category);
    if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
    if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
    if (filters.search) queryParams.append('search', filters.search);
    if (filters.sortBy) queryParams.append('sortBy', filters.sortBy);
    if (filters.sortOrder) queryParams.append('sortOrder', filters.sortOrder);

    const queryString = queryParams.toString();
    const endpoint = `/restaurants/${restaurantId}/menu${queryString ? `?${queryString}` : ''}`;
    
    return await api.get(endpoint);
  }
};

export default restaurantService;

