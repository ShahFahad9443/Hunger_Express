import { getDB } from '../config/database.js';

class MenuItem {
  static async findByRestaurantId(restaurantId, filters = {}) {
    const db = getDB();
    let query = 'SELECT * FROM menu_items WHERE restaurant_id = ? AND is_available = TRUE';
    const params = [restaurantId];

    if (filters.category) {
      query += ' AND category = ?';
      params.push(filters.category);
    }

    if (filters.minPrice !== undefined) {
      query += ' AND price >= ?';
      params.push(filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
      query += ' AND price <= ?';
      params.push(filters.maxPrice);
    }

    if (filters.search) {
      query += ' AND (name LIKE ? OR description LIKE ?)';
      const searchTerm = `%${filters.search}%`;
      params.push(searchTerm, searchTerm);
    }

    // Sorting
    const sortBy = filters.sortBy || 'name';
    const sortOrder = filters.sortOrder || 'ASC';
    query += ` ORDER BY ${sortBy} ${sortOrder}`;

    const [rows] = await db.execute(query, params);
    return rows;
  }

  static async findById(id) {
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT * FROM menu_items WHERE id = ? AND is_available = TRUE',
      [id]
    );
    return rows[0] || null;
  }

  static async create(menuItemData) {
    const db = getDB();
    const {
      restaurant_id, name, description, price, image_url,
      category, rating = 0.00
    } = menuItemData;

    const [result] = await db.execute(
      `INSERT INTO menu_items (restaurant_id, name, description, price, image_url, category, rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [restaurant_id, name, description, price, image_url, category, rating]
    );

    return this.findById(result.insertId);
  }

  static async update(id, menuItemData) {
    const db = getDB();
    const fields = [];
    const values = [];

    Object.keys(menuItemData).forEach(key => {
      if (menuItemData[key] !== undefined) {
        fields.push(`${key} = ?`);
        values.push(menuItemData[key]);
      }
    });

    if (fields.length === 0) return this.findById(id);

    values.push(id);
    await db.execute(
      `UPDATE menu_items SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    return this.findById(id);
  }

  static async updateRating(id) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT AVG(rating) as avg_rating 
       FROM menu_item_ratings 
       WHERE menu_item_id = ?`,
      [id]
    );

    const avgRating = rows[0]?.avg_rating || 0.00;
    await db.execute(
      'UPDATE menu_items SET rating = ? WHERE id = ?',
      [avgRating, id]
    );

    return avgRating;
  }

  static async delete(id) {
    const db = getDB();
    await db.execute('UPDATE menu_items SET is_available = FALSE WHERE id = ?', [id]);
    return true;
  }
}

export default MenuItem;

