import bcrypt from 'bcryptjs';
import { getDB } from '../config/database.js';

// Script to create/update admin user with password "admin"
export const createAdmin = async () => {
  try {
    const db = getDB();
    
    // Hash password "admin"
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash('admin', salt);
    
    // Check if admin exists
    const [existing] = await db.execute(
      'SELECT id FROM users WHERE username = ?',
      ['admin']
    );
    
    if (existing.length > 0) {
      // Update existing admin
      await db.execute(
        'UPDATE users SET password_hash = ?, role = ?, is_active = TRUE WHERE username = ?',
        [password_hash, 'admin', 'admin']
      );
      console.log('✅ Admin user password updated');
    } else {
      // Create new admin
      await db.execute(
        `INSERT INTO users (username, email, password_hash, full_name, role, is_active) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        ['admin', 'admin@hungerexpress.com', password_hash, 'Admin User', 'admin', true]
      );
      console.log('✅ Admin user created');
    }
  } catch (error) {
    console.error('❌ Error creating admin:', error);
    throw error;
  }
};

