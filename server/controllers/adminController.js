import MenuItem from '../models/MenuItem.js';
import Order from '../models/Order.js';
import User from '../models/User.js';
import PromoCode from '../models/PromoCode.js';
import Restaurant from '../models/Restaurant.js';

// ==================== MENU ITEMS ====================
export const getAllMenuItems = async (req, res, next) => {
  try {
    const { getDB } = await import('../config/database.js');
    const db = getDB();
    
    const [rows] = await db.execute(
      'SELECT mi.*, r.name as restaurant_name FROM menu_items mi LEFT JOIN restaurants r ON mi.restaurant_id = r.id ORDER BY mi.id DESC'
    );
    
    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    next(error);
  }
};

export const createMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.create(req.body);
    res.status(201).json({
      success: true,
      data: menuItem
    });
  } catch (error) {
    next(error);
  }
};

export const updateMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.update(req.params.id, req.body);
    if (!menuItem) {
      return res.status(404).json({
        success: false,
        error: 'Menu item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: menuItem
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({
        success: false,
        error: 'Menu item not found'
      });
    }
    await MenuItem.delete(req.params.id);
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// ==================== ORDERS ====================
export const getAllOrders = async (req, res, next) => {
  try {
    const filters = {
      status: req.query.status,
      userId: req.query.userId,
      limit: req.query.limit ? parseInt(req.query.limit) : undefined
    };
    const orders = await Order.findAll(filters);
    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'cancelled'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid order status'
      });
    }

    const order = await Order.updateStatus(req.params.id, status);
    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found'
      });
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    next(error);
  }
};

// ==================== USERS ====================
export const getAllUsers = async (req, res, next) => {
  try {
    const { getDB } = await import('../config/database.js');
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT id, username, email, full_name, phone, role, is_active, created_at, updated_at FROM users ORDER BY created_at DESC'
    );
    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.update(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    await User.delete(req.params.id);
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// ==================== PROMO CODES ====================
export const getAllPromoCodes = async (req, res, next) => {
  try {
    const { getDB } = await import('../config/database.js');
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT * FROM promo_codes ORDER BY created_at DESC'
    );
    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    next(error);
  }
};

export const createPromoCode = async (req, res, next) => {
  try {
    const promoCode = await PromoCode.create(req.body);
    res.status(201).json({
      success: true,
      data: promoCode
    });
  } catch (error) {
    next(error);
  }
};

export const updatePromoCode = async (req, res, next) => {
  try {
    const { getDB } = await import('../config/database.js');
    const db = getDB();
    const fields = [];
    const values = [];

    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined) {
        fields.push(`${key} = ?`);
        values.push(req.body[key]);
      }
    });

    if (fields.length === 0) {
      const promoCode = await PromoCode.findById(req.params.id);
      return res.status(200).json({
        success: true,
        data: promoCode
      });
    }

    values.push(req.params.id);
    await db.execute(
      `UPDATE promo_codes SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    const promoCode = await PromoCode.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: promoCode
    });
  } catch (error) {
    next(error);
  }
};

export const deletePromoCode = async (req, res, next) => {
  try {
    const { getDB } = await import('../config/database.js');
    const db = getDB();
    await db.execute('UPDATE promo_codes SET is_active = FALSE WHERE id = ?', [req.params.id]);
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// ==================== RATINGS ====================
export const getAllRatings = async (req, res, next) => {
  try {
    const { getDB } = await import('../config/database.js');
    const db = getDB();
    
    // Get restaurant ratings
    const [restaurantRatings] = await db.execute(
      `SELECT rr.*, u.username, r.name as restaurant_name 
       FROM restaurant_ratings rr
       LEFT JOIN users u ON rr.user_id = u.id
       LEFT JOIN restaurants r ON rr.restaurant_id = r.id
       ORDER BY rr.created_at DESC`
    );

    // Get menu item ratings
    const [menuItemRatings] = await db.execute(
      `SELECT mir.*, u.username, mi.name as menu_item_name 
       FROM menu_item_ratings mir
       LEFT JOIN users u ON mir.user_id = u.id
       LEFT JOIN menu_items mi ON mir.menu_item_id = mi.id
       ORDER BY mir.created_at DESC`
    );

    res.status(200).json({
      success: true,
      data: {
        restaurant_ratings: restaurantRatings,
        menu_item_ratings: menuItemRatings
      }
    });
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurantRating = async (req, res, next) => {
  try {
    const { getDB } = await import('../config/database.js');
    const db = getDB();
    
    // Get restaurant_id before deleting
    const [ratingRows] = await db.execute(
      'SELECT restaurant_id FROM restaurant_ratings WHERE id = ?',
      [req.params.id]
    );
    
    await db.execute('DELETE FROM restaurant_ratings WHERE id = ?', [req.params.id]);
    
    // Update restaurant rating if rating existed
    if (ratingRows.length > 0) {
      await Restaurant.updateRating(ratingRows[0].restaurant_id);
    }
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMenuItemRating = async (req, res, next) => {
  try {
    const { getDB } = await import('../config/database.js');
    const db = getDB();
    
    // Get menu_item_id before deleting
    const [ratingRows] = await db.execute(
      'SELECT menu_item_id FROM menu_item_ratings WHERE id = ?',
      [req.params.id]
    );
    
    await db.execute('DELETE FROM menu_item_ratings WHERE id = ?', [req.params.id]);
    
    // Update menu item rating if rating existed
    if (ratingRows.length > 0) {
      await MenuItem.updateRating(ratingRows[0].menu_item_id);
    }
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

