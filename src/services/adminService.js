import api from './api.js';

const adminService = {
  // Restaurant Management
  getAllRestaurants: async () => {
    return await api.get('/restaurants?includeInactive=true');
  },
  createRestaurant: async (restaurantData) => {
    return await api.post('/restaurants', restaurantData);
  },
  updateRestaurant: async (id, restaurantData) => {
    return await api.put(`/restaurants/${id}`, restaurantData);
  },
  deleteRestaurant: async (id) => {
    return await api.delete(`/restaurants/${id}`);
  },

  // Menu Items Management
  getAllMenuItems: async () => {
    return await api.get('/admin/menu-items');
  },
  createMenuItem: async (menuItemData) => {
    return await api.post('/admin/menu-items', menuItemData);
  },
  updateMenuItem: async (id, menuItemData) => {
    return await api.put(`/admin/menu-items/${id}`, menuItemData);
  },
  deleteMenuItem: async (id) => {
    return await api.delete(`/admin/menu-items/${id}`);
  },

  // Orders Management
  getAllOrders: async (filters = {}) => {
    const queryParams = new URLSearchParams();
    if (filters.status) queryParams.append('status', filters.status);
    if (filters.userId) queryParams.append('userId', filters.userId);
    if (filters.limit) queryParams.append('limit', filters.limit);
    const query = queryParams.toString();
    return await api.get(`/admin/orders${query ? `?${query}` : ''}`);
  },
  updateOrderStatus: async (id, status) => {
    return await api.put(`/admin/orders/${id}/status`, { status });
  },

  // Users Management
  getAllUsers: async () => {
    return await api.get('/admin/users');
  },
  updateUser: async (id, userData) => {
    return await api.put(`/admin/users/${id}`, userData);
  },
  deleteUser: async (id) => {
    return await api.delete(`/admin/users/${id}`);
  },

  // Promo Codes Management
  getAllPromoCodes: async () => {
    return await api.get('/admin/promo-codes');
  },
  createPromoCode: async (promoCodeData) => {
    return await api.post('/admin/promo-codes', promoCodeData);
  },
  updatePromoCode: async (id, promoCodeData) => {
    return await api.put(`/admin/promo-codes/${id}`, promoCodeData);
  },
  deletePromoCode: async (id) => {
    return await api.delete(`/admin/promo-codes/${id}`);
  },

  // Ratings Management
  getAllRatings: async () => {
    return await api.get('/admin/ratings');
  },
  deleteRestaurantRating: async (id) => {
    return await api.delete(`/admin/ratings/restaurant/${id}`);
  },
  deleteMenuItemRating: async (id) => {
    return await api.delete(`/admin/ratings/menu-item/${id}`);
  },
};

export default adminService;

