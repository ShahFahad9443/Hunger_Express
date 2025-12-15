import { getDB } from '../config/database.js';

class Order {
  static async create(orderData) {
    const db = getDB();
    const connection = await db.getConnection();
    
    try {
      await connection.beginTransaction();

      const {
        user_id, items, subtotal, discount, delivery_fee, tax, total,
        promo_code_id, payment_method, delivery_info
      } = orderData;

      // Generate order number
      const orderNumber = `ORD-${Date.now()}`;

      // Insert order
      const [orderResult] = await connection.execute(
        `INSERT INTO orders (
          order_number, user_id, subtotal, discount, delivery_fee, tax, total,
          promo_code_id, payment_method, delivery_name, delivery_email, delivery_phone,
          delivery_address, delivery_city, delivery_state, delivery_zip_code
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          orderNumber, user_id, subtotal, discount, delivery_fee, tax, total,
          promo_code_id, payment_method, delivery_info.name, delivery_info.email,
          delivery_info.phone, delivery_info.address, delivery_info.city,
          delivery_info.state, delivery_info.zipCode
        ]
      );

      const orderId = orderResult.insertId;

      // Insert order items
      for (const item of items) {
        await connection.execute(
          `INSERT INTO order_items (order_id, menu_item_id, quantity, price_at_time, item_name)
           VALUES (?, ?, ?, ?, ?)`,
          [orderId, item.menu_item_id, item.quantity, item.price, item.name]
        );
      }

      // Update promo code usage if applicable
      if (promo_code_id) {
        await connection.execute(
          'UPDATE promo_codes SET current_uses = current_uses + 1 WHERE id = ?',
          [promo_code_id]
        );
      }

      await connection.commit();
      return this.findById(orderId);
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  static async findById(id) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT o.*, 
              u.username, u.email as user_email,
              pc.code as promo_code
       FROM orders o
       LEFT JOIN users u ON o.user_id = u.id
       LEFT JOIN promo_codes pc ON o.promo_code_id = pc.id
       WHERE o.id = ?`,
      [id]
    );
    return rows[0] || null;
  }

  static async findByOrderNumber(orderNumber) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT o.*, 
              u.username, u.email as user_email,
              pc.code as promo_code
       FROM orders o
       LEFT JOIN users u ON o.user_id = u.id
       LEFT JOIN promo_codes pc ON o.promo_code_id = pc.id
       WHERE o.order_number = ?`,
      [orderNumber]
    );
    return rows[0] || null;
  }

  static async findByUserId(userId, limit = 50) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT o.*, pc.code as promo_code
       FROM orders o
       LEFT JOIN promo_codes pc ON o.promo_code_id = pc.id
       WHERE o.user_id = ?
       ORDER BY o.created_at DESC
       LIMIT ?`,
      [userId, limit]
    );
    return rows;
  }

  static async getOrderItems(orderId) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT oi.*, mi.image_url, mi.description
       FROM order_items oi
       LEFT JOIN menu_items mi ON oi.menu_item_id = mi.id
       WHERE oi.order_id = ?`,
      [orderId]
    );
    return rows;
  }

  static async updateStatus(id, status) {
    const db = getDB();
    await db.execute(
      'UPDATE orders SET status = ? WHERE id = ?',
      [status, id]
    );
    return this.findById(id);
  }

  static async findAll(filters = {}) {
    const db = getDB();
    let query = 'SELECT o.*, u.username, pc.code as promo_code FROM orders o LEFT JOIN users u ON o.user_id = u.id LEFT JOIN promo_codes pc ON o.promo_code_id = pc.id WHERE 1=1';
    const params = [];

    if (filters.status) {
      query += ' AND o.status = ?';
      params.push(filters.status);
    }

    if (filters.userId) {
      query += ' AND o.user_id = ?';
      params.push(filters.userId);
    }

    query += ' ORDER BY o.created_at DESC';

    if (filters.limit) {
      query += ' LIMIT ?';
      params.push(filters.limit);
    }

    const [rows] = await db.execute(query, params);
    return rows;
  }
}

export default Order;

