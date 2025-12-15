import { getDB } from '../config/database.js';

class PromoCode {
  static async findByCode(code) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT * FROM promo_codes 
       WHERE code = ? AND is_active = TRUE 
       AND (valid_from IS NULL OR valid_from <= NOW())
       AND (valid_until IS NULL OR valid_until >= NOW())
       AND (max_uses IS NULL OR current_uses < max_uses)`,
      [code.toUpperCase()]
    );
    return rows[0] || null;
  }

  static async findAll() {
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT * FROM promo_codes WHERE is_active = TRUE ORDER BY code ASC'
    );
    return rows;
  }

  static async create(promoData) {
    const db = getDB();
    const {
      code, discount_type, discount_value, min_order_amount = 0.00,
      max_uses, valid_from, valid_until
    } = promoData;

    const [result] = await db.execute(
      `INSERT INTO promo_codes (code, discount_type, discount_value, min_order_amount, max_uses, valid_from, valid_until) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [code.toUpperCase(), discount_type, discount_value, min_order_amount, max_uses, valid_from, valid_until]
    );

    return this.findById(result.insertId);
  }

  static async findById(id) {
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT * FROM promo_codes WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  }

  static async validate(code, orderAmount) {
    const promo = await this.findByCode(code);
    
    if (!promo) {
      return { valid: false, error: 'Invalid or expired promo code' };
    }

    if (orderAmount < promo.min_order_amount) {
      return {
        valid: false,
        error: `Minimum order of $${promo.min_order_amount} required for this code`
      };
    }

    return { valid: true, promo };
  }

  static async calculateDiscount(code, orderAmount) {
    const validation = await this.validate(code, orderAmount);
    
    if (!validation.valid) {
      return { discount: 0, error: validation.error };
    }

    const { promo } = validation;
    let discount = 0;

    if (promo.discount_type === 'percentage') {
      discount = (orderAmount * promo.discount_value) / 100;
    } else {
      discount = promo.discount_value;
    }

    return { discount, promo };
  }
}

export default PromoCode;

