# Database Setup Guide

This directory contains the database initialization scripts for Hunger Express.

## Structure

- `init/01_schema.sql` - Creates all database tables and indexes
- `init/02_seed_data.sql` - Inserts initial seed data (restaurants, menu items, promo codes)

## Setup Instructions

### 1. Start MySQL with Docker

```bash
docker-compose up -d
```

This will:
- Start MySQL 8.0 container
- Create the database `hunger_express`
- Automatically run initialization scripts
- Create a persistent volume for data

### 2. Verify Database is Running

```bash
docker ps
```

You should see `hunger_express_mysql` container running.

### 3. Connect to MySQL (Optional)

```bash
# Using Docker
docker exec -it hunger_express_mysql mysql -u hunger_user -p hunger_express

# Or using MySQL client (if installed locally)
mysql -h localhost -P 3306 -u hunger_user -p hunger_express
```

Password: `hunger_password` (or check your `.env` file)

### 4. Check Tables

```sql
SHOW TABLES;
```

You should see:
- users
- restaurants
- menu_items
- orders
- order_items
- promo_codes
- restaurant_ratings
- menu_item_ratings
- user_addresses

### 5. Stop Database

```bash
docker-compose down
```

### 6. Stop and Remove Data (Reset)

```bash
docker-compose down -v
```

This will remove the volume and all data. Next time you start, it will recreate everything.

## Environment Variables

Make sure your `.env` file has these variables:

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=hunger_user
MYSQL_PASSWORD=hunger_password
MYSQL_DATABASE=hunger_express
MYSQL_ROOT_PASSWORD=rootpassword
```

## Troubleshooting

### Container won't start
- Check if port 3306 is already in use: `netstat -an | grep 3306`
- Change `MYSQL_PORT` in `.env` if needed

### Can't connect to database
- Verify container is running: `docker ps`
- Check logs: `docker logs hunger_express_mysql`
- Verify credentials in `.env` file

### Reset database
```bash
docker-compose down -v
docker-compose up -d
```

## Next Steps

Once the database is set up, you can:
1. Update `server/config/database.js` to connect to MySQL
2. Install MySQL driver: `npm install mysql2`
3. Create Express API endpoints

