import { getDB } from '../config/database.js';

class Restaurant {
  static async findAll(filters = {}) {
    const db = getDB();
    let query = 'SELECT * FROM restaurants';
    const params = [];

    // Only filter by is_active if includeInactive is not true
    if (!filters.includeInactive) {
      query += ' WHERE is_active = TRUE';
    } else {
      query += ' WHERE 1=1';
    }

    if (filters.cuisine) {
      query += ' AND cuisine = ?';
      params.push(filters.cuisine);
    }

    if (filters.location) {
      query += ' AND location LIKE ?';
      params.push(`%${filters.location}%`);
    }

    if (filters.minRating) {
      query += ' AND rating >= ?';
      params.push(filters.minRating);
    }

    query += ' ORDER BY rating DESC, name ASC';

    const [rows] = await db.execute(query, params);
    return rows;
  }

  static async findById(id) {
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT * FROM restaurants WHERE id = ? AND is_active = TRUE',
      [id]
    );
    return rows[0] || null;
  }

  static async create(restaurantData) {
    const db = getDB();
    const {
      name, cuisine, description, location, image_url,
      rating = 0.00, hours, price_range
    } = restaurantData;

    const [result] = await db.execute(
      `INSERT INTO restaurants (name, cuisine, description, location, image_url, rating, hours, price_range) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, cuisine, description, location, image_url, rating, hours, price_range]
    );

    return this.findById(result.insertId);
  }

  static async update(id, restaurantData) {
    const db = getDB();
    const fields = [];
    const values = [];

    Object.keys(restaurantData).forEach(key => {
      if (restaurantData[key] !== undefined) {
        fields.push(`${key} = ?`);
        values.push(restaurantData[key]);
      }
    });

    if (fields.length === 0) return this.findById(id);

    values.push(id);
    await db.execute(
      `UPDATE restaurants SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    return this.findById(id);
  }

  static async updateRating(id) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT AVG(rating) as avg_rating 
       FROM restaurant_ratings 
       WHERE restaurant_id = ?`,
      [id]
    );

    const avgRating = rows[0]?.avg_rating || 0.00;
    await db.execute(
      'UPDATE restaurants SET rating = ? WHERE id = ?',
      [avgRating, id]
    );

    return avgRating;
  }

  static async delete(id) {
    const db = getDB();
    await db.execute('UPDATE restaurants SET is_active = FALSE WHERE id = ?', [id]);
    return true;
  }
}

export default Restaurant;

