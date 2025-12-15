import { getDB } from '../config/database.js';

class User {
  static async create(userData) {
    const db = getDB();
    const { username, email, password_hash, full_name, phone, role = 'customer' } = userData;
    
    const [result] = await db.execute(
      `INSERT INTO users (username, email, password_hash, full_name, phone, role) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [username, email, password_hash, full_name, phone, role]
    );
    
    return this.findById(result.insertId);
  }

  static async findById(id) {
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT id, username, email, full_name, phone, role, is_active, created_at, updated_at FROM users WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  }

  static async findByEmail(email) {
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0] || null;
  }

  static async findByUsername(username) {
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return rows[0] || null;
  }

  static async findByEmailOrUsername(identifier) {
    const db = getDB();
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE email = ? OR username = ?',
      [identifier, identifier]
    );
    return rows[0] || null;
  }

  static async update(id, userData) {
    const db = getDB();
    const fields = [];
    const values = [];

    Object.keys(userData).forEach(key => {
      if (userData[key] !== undefined) {
        fields.push(`${key} = ?`);
        values.push(userData[key]);
      }
    });

    if (fields.length === 0) return this.findById(id);

    values.push(id);
    await db.execute(
      `UPDATE users SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    return this.findById(id);
  }

  static async delete(id) {
    const db = getDB();
    await db.execute('UPDATE users SET is_active = FALSE WHERE id = ?', [id]);
    return true;
  }
}

export default User;

