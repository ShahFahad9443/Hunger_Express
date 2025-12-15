import mysql from 'mysql2/promise';

let pool = null;

const connectDB = async () => {
  try {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || 'hunger_user',
      password: process.env.MYSQL_PASSWORD || 'hunger_password',
      database: process.env.MYSQL_DATABASE || 'hunger_express',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    });

    // Test connection
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();

    console.log(`✅ MySQL Connected: ${process.env.MYSQL_HOST || 'localhost'}:${process.env.MYSQL_PORT || 3306}`);
    console.log(`📊 Database: ${process.env.MYSQL_DATABASE || 'hunger_express'}`);
  } catch (error) {
    console.error(`❌ Database connection error: ${error.message}`);
    process.exit(1);
  }
};

// Get database pool
export const getDB = () => {
  if (!pool) {
    throw new Error('Database not initialized. Call connectDB() first.');
  }
  return pool;
};

// Graceful shutdown
process.on('SIGINT', async () => {
  if (pool) {
    await pool.end();
    console.log('👋 MySQL connection pool closed due to app termination');
  }
  process.exit(0);
});

export default connectDB;

