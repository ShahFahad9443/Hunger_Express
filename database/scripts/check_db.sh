#!/bin/bash

# Database Health Check Script
# This script checks if MySQL container is running and accessible

echo "🔍 Checking MySQL Database Status..."
echo ""

# Check if container is running
if docker ps | grep -q hunger_express_mysql; then
    echo "✅ MySQL container is running"
else
    echo "❌ MySQL container is not running"
    echo "   Run: docker-compose up -d"
    exit 1
fi

# Check if we can connect
echo ""
echo "🔌 Testing database connection..."

docker exec hunger_express_mysql mysql -u hunger_user -phunger_password -e "SELECT 1" hunger_express 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Database connection successful"
    echo ""
    echo "📊 Database Information:"
    docker exec hunger_express_mysql mysql -u hunger_user -phunger_password -e "SELECT COUNT(*) as table_count FROM information_schema.tables WHERE table_schema = 'hunger_express'" hunger_express 2>/dev/null
    echo ""
    echo "📋 Tables in database:"
    docker exec hunger_express_mysql mysql -u hunger_user -phunger_password -e "SHOW TABLES" hunger_express 2>/dev/null
else
    echo "❌ Cannot connect to database"
    echo "   Check logs: docker logs hunger_express_mysql"
    exit 1
fi

