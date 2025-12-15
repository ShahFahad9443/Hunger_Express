import api from './api.js';

export const ratingService = {
  // Rate a restaurant
  rateRestaurant: async (restaurantId, rating, userId = null) => {
    return await api.post(`/ratings/restaurant/${restaurantId}`, {
      rating,
      user_id: userId
    });
  },

  // Rate a menu item
  rateMenuItem: async (menuItemId, rating, userId = null) => {
    return await api.post(`/ratings/menu-item/${menuItemId}`, {
      rating,
      user_id: userId
    });
  }
};

export default ratingService;

