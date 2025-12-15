import api from './api.js';

export const promoService = {
  // Get all active promo codes
  getPromoCodes: async () => {
    return await api.get('/promo-codes');
  },

  // Validate promo code
  validatePromoCode: async (code, orderAmount = 0) => {
    return await api.post('/promo-codes/validate', { code, orderAmount });
  }
};

export default promoService;

