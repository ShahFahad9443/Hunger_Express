import { getDB } from '../config/database.js';
import Restaurant from './Restaurant.js';
import MenuItem from './MenuItem.js';

class Rating {
  static async createRestaurantRating(restaurantId, userId, rating) {
    const db = getDB();
    
    // Check if user already rated this restaurant
    const [existing] = await db.execute(
      'SELECT id FROM restaurant_ratings WHERE restaurant_id = ? AND user_id = ?',
      [restaurantId, userId]
    );

    if (existing.length > 0) {
      // Update existing rating
      await db.execute(
        'UPDATE restaurant_ratings SET rating = ? WHERE restaurant_id = ? AND user_id = ?',
        [rating, restaurantId, userId]
      );
    } else {
      // Create new rating
      await db.execute(
        'INSERT INTO restaurant_ratings (restaurant_id, user_id, rating) VALUES (?, ?, ?)',
        [restaurantId, userId, rating]
      );
    }

    // Update restaurant average rating
    await Restaurant.updateRating(restaurantId);

    return { restaurant_id: restaurantId, user_id: userId, rating };
  }

  static async createMenuItemRating(menuItemId, userId, rating) {
    const db = getDB();
    
    // Check if user already rated this menu item
    const [existing] = await db.execute(
      'SELECT id FROM menu_item_ratings WHERE menu_item_id = ? AND user_id = ?',
      [menuItemId, userId]
    );

    if (existing.length > 0) {
      // Update existing rating
      await db.execute(
        'UPDATE menu_item_ratings SET rating = ? WHERE menu_item_id = ? AND user_id = ?',
        [rating, menuItemId, userId]
      );
    } else {
      // Create new rating
      await db.execute(
        'INSERT INTO menu_item_ratings (menu_item_id, user_id, rating) VALUES (?, ?, ?)',
        [menuItemId, userId, rating]
      );
    }

    // Update menu item average rating
    await MenuItem.updateRating(menuItemId);

    return { menu_item_id: menuItemId, user_id: userId, rating };
  }

  static async getRestaurantRatings(restaurantId) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT rr.*, u.username 
       FROM restaurant_ratings rr
       LEFT JOIN users u ON rr.user_id = u.id
       WHERE rr.restaurant_id = ?
       ORDER BY rr.created_at DESC`,
      [restaurantId]
    );
    return rows;
  }

  static async getMenuItemRatings(menuItemId) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT mir.*, u.username 
       FROM menu_item_ratings mir
       LEFT JOIN users u ON mir.user_id = u.id
       WHERE mir.menu_item_id = ?
       ORDER BY mir.created_at DESC`,
      [menuItemId]
    );
    return rows;
  }
}

export default Rating;

