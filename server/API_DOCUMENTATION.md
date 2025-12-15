# Hunger Express API Documentation

Base URL: `http://localhost:5000/api`

## Health Check

### GET /api/health
Check if the server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2025-12-15T11:16:25.690Z"
}
```

---

## Restaurants

### GET /api/restaurants
Get all restaurants with optional filters.

**Query Parameters:**
- `cuisine` (optional) - Filter by cuisine type
- `location` (optional) - Filter by location
- `minRating` (optional) - Minimum rating (number)

**Example:**
```
GET /api/restaurants?cuisine=Italian&minRating=4.5
```

**Response:**
```json
{
  "success": true,
  "count": 15,
  "data": [
    {
      "id": 1,
      "name": "Italian Bistro",
      "cuisine": "Italian",
      "description": "...",
      "location": "Downtown",
      "rating": 4.8,
      "hours": "11:00 AM - 11:00 PM",
      "price_range": 15.99,
      "image_url": "...",
      "is_active": true,
      "created_at": "...",
      "updated_at": "..."
    }
  ]
}
```

### GET /api/restaurants/:id
Get a single restaurant by ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Italian Bistro",
    ...
  }
}
```

### GET /api/restaurants/:id/menu
Get menu items for a specific restaurant.

**Query Parameters:**
- `category` (optional) - Filter by category
- `minPrice` (optional) - Minimum price
- `maxPrice` (optional) - Maximum price
- `search` (optional) - Search in name/description
- `sortBy` (optional) - Sort field (default: "name")
- `sortOrder` (optional) - Sort order: "ASC" or "DESC" (default: "ASC")

**Example:**
```
GET /api/restaurants/1/menu?category=Main Course&sortBy=price&sortOrder=ASC
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 101,
      "restaurant_id": 1,
      "name": "Margherita Pizza",
      "description": "Fresh mozzarella, tomato sauce, basil",
      "price": 16.99,
      "category": "Main Course",
      "rating": 4.5,
      ...
    }
  ]
}
```

---

## Menu Items

### GET /api/menu/:id
Get a single menu item by ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 101,
    "restaurant_id": 1,
    "name": "Margherita Pizza",
    ...
  }
}
```

---

## Orders

### POST /api/orders
Create a new order.

**Request Body:**
```json
{
  "user_id": 1,  // Optional
  "items": [
    {
      "menu_item_id": 101,
      "name": "Margherita Pizza",
      "price": 16.99,
      "quantity": 2
    }
  ],
  "promo_code": "FIRST30",  // Optional
  "payment_method": "card",  // "card" or "cash"
  "delivery_info": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-1234",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "order_number": "ORD-1234567890",
    "user_id": 1,
    "status": "pending",
    "subtotal": 33.98,
    "discount": 10.19,
    "delivery_fee": 2.99,
    "tax": 2.14,
    "total": 28.92,
    "items": [
      {
        "id": 1,
        "order_id": 1,
        "menu_item_id": 101,
        "quantity": 2,
        "price_at_time": 16.99,
        "item_name": "Margherita Pizza"
      }
    ],
    ...
  }
}
```

### GET /api/orders/:orderNumber
Get an order by order number.

**Example:**
```
GET /api/orders/ORD-1234567890
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "order_number": "ORD-1234567890",
    "status": "pending",
    "items": [...],
    ...
  }
}
```

### GET /api/orders/user/:userId
Get all orders for a specific user.

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1,
      "order_number": "ORD-1234567890",
      ...
    }
  ]
}
```

### PUT /api/orders/:id/status
Update order status.

**Request Body:**
```json
{
  "status": "confirmed"  // pending, confirmed, preparing, ready, out_for_delivery, delivered, cancelled
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "confirmed",
    ...
  }
}
```

---

## Promo Codes

### GET /api/promo-codes
Get all active promo codes.

**Response:**
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": 1,
      "code": "FIRST30",
      "discount_type": "percentage",
      "discount_value": 30.00,
      "min_order_amount": 20.00,
      "is_active": true,
      ...
    }
  ]
}
```

### POST /api/promo-codes/validate
Validate a promo code and calculate discount.

**Request Body:**
```json
{
  "code": "FIRST30",
  "orderAmount": 25.00
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "code": "FIRST30",
    "discount": 7.50,
    "discount_type": "percentage",
    "discount_value": 30.00
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Invalid or expired promo code"
}
```

---

## Ratings

### POST /api/ratings/restaurant/:restaurantId
Rate a restaurant.

**Request Body:**
```json
{
  "user_id": 1,
  "rating": 5  // 1-5
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "restaurant_id": 1,
    "user_id": 1,
    "rating": 5
  }
}
```

### POST /api/ratings/menu-item/:menuItemId
Rate a menu item.

**Request Body:**
```json
{
  "user_id": 1,
  "rating": 4  // 1-5
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "menu_item_id": 101,
    "user_id": 1,
    "rating": 4
  }
}
```

---

## Error Responses

All endpoints return errors in the following format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

**Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

---

## Notes

- All timestamps are in ISO 8601 format
- Prices are in decimal format (e.g., 16.99)
- Ratings are on a scale of 1-5
- Order statuses: `pending`, `confirmed`, `preparing`, `ready`, `out_for_delivery`, `delivered`, `cancelled`
- Payment methods: `card`, `cash`

