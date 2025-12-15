import api from './api.js';

export const menuService = {
  // Get single menu item by ID
  getMenuItem: async (id) => {
    return await api.get(`/menu/${id}`);
  }
};

export default menuService;

