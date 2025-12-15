import api from './api.js';

export const orderService = {
  // Create new order
  createOrder: async (orderData) => {
    return await api.post('/orders', orderData);
  },

  // Get order by order number
  getOrder: async (orderNumber) => {
    return await api.get(`/orders/${orderNumber}`);
  },

  // Get user orders
  getUserOrders: async (userId) => {
    return await api.get(`/orders/user/${userId}`);
  },

  // Update order status (admin only)
  updateOrderStatus: async (orderId, status) => {
    return await api.put(`/orders/${orderId}/status`, { status });
  }
};

export default orderService;

