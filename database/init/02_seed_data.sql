-- Seed Data for Hunger Express
-- This file populates initial data for development/testing

-- ============================================
-- INSERT PROMO CODES
-- ============================================
INSERT INTO promo_codes (code, discount_type, discount_value, min_order_amount, is_active) VALUES
('FIRST30', 'percentage', 30.00, 20.00, TRUE),
('WEEKEND20', 'percentage', 20.00, 0.00, TRUE),
('SAVE10', 'percentage', 10.00, 15.00, TRUE),
('FLAT5', 'fixed', 5.00, 10.00, TRUE)
ON DUPLICATE KEY UPDATE code=code;

-- ============================================
-- INSERT RESTAURANTS
-- ============================================
INSERT INTO restaurants (id, name, cuisine, description, location, rating, hours, price_range, image_url) VALUES
(1, 'Italian Bistro', 'Italian', 'Experience authentic Italian cuisine with our handcrafted pasta, wood-fired pizzas, and traditional Italian dishes made with the finest ingredients.', 'Downtown', 4.8, '11:00 AM - 11:00 PM', 15.99, 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop'),
(2, 'Asian Fusion', 'Asian', 'A perfect blend of Asian flavors featuring sushi, ramen, stir-fries, and dim sum. Fresh ingredients and traditional cooking methods.', 'Midtown', 4.9, '12:00 PM - 10:00 PM', 18.99, 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop'),
(3, 'Burger House', 'American', 'Juicy, flame-grilled burgers made with premium beef, fresh vegetables, and our signature sauces. Perfect for a quick and satisfying meal.', 'Multiple Locations', 4.7, '10:00 AM - 12:00 AM', 12.99, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop'),
(4, 'Mexican Cantina', 'Mexican', 'Spicy and flavorful Mexican dishes including tacos, burritos, enchiladas, and fresh guacamole. Authentic recipes passed down through generations.', 'East Side', 4.6, '11:00 AM - 11:00 PM', 14.99, 'https://images.unsplash.com/photo-1565299585323-38174c3c6a0a?w=800&h=600&fit=crop'),
(5, 'Seafood Grill', 'Seafood', 'Fresh seafood daily from local fishermen. Enjoy grilled fish, lobster, shrimp, and crab dishes prepared to perfection.', 'Harbor District', 4.9, '5:00 PM - 11:00 PM', 24.99, 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop'),
(6, 'Vegetarian Delight', 'Vegetarian', 'Plant-based cuisine that''s both healthy and delicious. Creative vegetarian and vegan options that will satisfy any palate.', 'Green Street', 4.8, '10:00 AM - 9:00 PM', 13.99, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop'),
(7, 'Sushi Master', 'Asian', 'Premium sushi and sashimi made with the freshest fish. Traditional Japanese techniques meet modern presentation.', 'Waterfront', 4.9, '5:00 PM - 11:00 PM', 22.99, 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop'),
(8, 'BBQ Smokehouse', 'American', 'Slow-smoked meats, tender ribs, and classic BBQ sides. Our pitmasters use time-honored techniques for authentic flavor.', 'South Side', 4.8, '11:00 AM - 10:00 PM', 19.99, 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop'),
(9, 'Mediterranean Garden', 'Mediterranean', 'Fresh Mediterranean cuisine featuring hummus, falafel, kebabs, and Greek salads. Healthy and flavorful dishes from the Mediterranean coast.', 'Central Plaza', 4.7, '11:00 AM - 10:00 PM', 16.99, 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop'),
(10, 'Taco Fiesta', 'Mexican', 'Authentic street-style tacos with fresh ingredients and homemade salsas. Quick service and bold flavors that bring Mexico to your plate.', 'Food Court', 4.6, '10:00 AM - 11:00 PM', 11.99, 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop'),
(11, 'Pizza Palace', 'Italian', 'New York-style and Neapolitan pizzas with fresh toppings. Hand-tossed dough and wood-fired ovens for the perfect crust.', 'North End', 4.7, '11:00 AM - 12:00 AM', 17.99, 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop'),
(12, 'Curry House', 'Indian', 'Authentic Indian curries, biryanis, and tandoori dishes. Rich spices and aromatic flavors that warm the soul.', 'Little India', 4.8, '12:00 PM - 10:00 PM', 15.99, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop'),
(13, 'Thai Spice', 'Thai', 'Traditional Thai cuisine with perfect balance of sweet, sour, salty, and spicy. Pad Thai, green curry, and tom yum soup.', 'Asia Town', 4.7, '11:00 AM - 10:00 PM', 16.99, 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop'),
(14, 'Steakhouse Prime', 'American', 'Premium cuts of steak, perfectly grilled to your preference. Classic sides and an extensive wine selection.', 'Uptown', 4.9, '5:00 PM - 11:00 PM', 29.99, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop'),
(15, 'Ramen Noodle Bar', 'Asian', 'Authentic Japanese ramen with rich, flavorful broths and perfectly cooked noodles. A comforting bowl of perfection.', 'Japan District', 4.8, '11:00 AM - 10:00 PM', 14.99, 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop')
ON DUPLICATE KEY UPDATE name=name;

-- ============================================
-- INSERT MENU ITEMS (Sample for first few restaurants)
-- ============================================
-- Italian Bistro (restaurant_id = 1)
INSERT INTO menu_items (id, restaurant_id, name, description, price, image_url, category) VALUES
(101, 1, 'Margherita Pizza', 'Fresh mozzarella, tomato sauce, basil', 16.99, 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', 'Main Course'),
(102, 1, 'Fettuccine Alfredo', 'Creamy alfredo sauce with parmesan', 18.99, 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop', 'Main Course'),
(103, 1, 'Chicken Parmigiana', 'Breaded chicken with marinara and mozzarella', 22.99, 'https://images.unsplash.com/photo-1606312619070-d48b4cbc3e3a?w=400&h=300&fit=crop', 'Main Course'),
(104, 1, 'Caesar Salad', 'Romaine lettuce, parmesan, croutons', 12.99, 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop', 'Salad'),
(105, 1, 'Tiramisu', 'Classic Italian dessert', 8.99, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop', 'Dessert')
ON DUPLICATE KEY UPDATE name=name;

-- Asian Fusion (restaurant_id = 2)
INSERT INTO menu_items (id, restaurant_id, name, description, price, image_url, category) VALUES
(201, 2, 'Dragon Roll', 'Eel, cucumber, avocado, eel sauce', 14.99, 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop', 'Main Course'),
(202, 2, 'Tonkotsu Ramen', 'Pork bone broth, chashu, egg, nori', 15.99, 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', 'Main Course'),
(203, 2, 'Pad Thai', 'Stir-fried noodles with shrimp and vegetables', 13.99, 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop', 'Main Course'),
(204, 2, 'Chicken Teriyaki', 'Grilled chicken with teriyaki glaze', 16.99, 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', 'Main Course'),
(205, 2, 'Miso Soup', 'Traditional Japanese soup', 4.99, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', 'Soup')
ON DUPLICATE KEY UPDATE name=name;

-- Burger House (restaurant_id = 3)
INSERT INTO menu_items (id, restaurant_id, name, description, price, image_url, category) VALUES
(301, 3, 'Classic Burger', 'Beef patty, lettuce, tomato, onion, pickles', 11.99, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', 'Main Course'),
(302, 3, 'Bacon Cheeseburger', 'Beef patty, bacon, cheese, special sauce', 13.99, 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop', 'Main Course'),
(303, 3, 'BBQ Burger', 'Beef patty, BBQ sauce, onion rings', 12.99, 'https://images.unsplash.com/photo-1553979459-d2229ba7433f?w=400&h=300&fit=crop', 'Main Course'),
(304, 3, 'Chicken Burger', 'Grilled chicken, lettuce, mayo', 10.99, 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop', 'Main Course'),
(305, 3, 'French Fries', 'Crispy golden fries', 4.99, 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop', 'Side')
ON DUPLICATE KEY UPDATE name=name;

-- ============================================
-- INSERT ADMIN USER (for testing)
-- ============================================
-- Note: In production, password should be hashed using bcrypt
-- Default password: 'admin' (should be changed)
INSERT INTO users (username, email, password_hash, full_name, role) VALUES
('admin', 'admin@hungerexpress.com', '$2b$10$rOzJqZqZqZqZqZqZqZqZqO', 'Admin User', 'admin')
ON DUPLICATE KEY UPDATE username=username;

