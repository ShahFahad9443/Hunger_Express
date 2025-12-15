import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

dotenv.config();

const setupAdmin = async () => {
  let connection;
  
  try {
    // Create connection
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || 'hunger_user',
      password: process.env.MYSQL_PASSWORD || 'hunger_password',
      database: process.env.MYSQL_DATABASE || 'hunger_express'
    });

    // Hash password "admin"
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash('admin', salt);
    
    // Check if admin exists
    const [existing] = await connection.execute(
      'SELECT id FROM users WHERE username = ?',
      ['admin']
    );
    
    if (existing.length > 0) {
      // Update existing admin
      await connection.execute(
        'UPDATE users SET password_hash = ?, role = ?, is_active = TRUE WHERE username = ?',
        [password_hash, 'admin', 'admin']
      );
      console.log('✅ Admin user password updated');
    } else {
      // Create new admin
      await connection.execute(
        `INSERT INTO users (username, email, password_hash, full_name, role, is_active) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        ['admin', 'admin@hungerexpress.com', password_hash, 'Admin User', 'admin', true]
      );
      console.log('✅ Admin user created');
    }
    
    console.log('✅ Admin credentials: username=admin, password=admin');
  } catch (error) {
    console.error('❌ Error setting up admin:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

setupAdmin();

