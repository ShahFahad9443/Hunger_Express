// Shared restaurant and menu data
export const restaurants = [
  {
    id: 1,
    name: "Italian Bistro",
    cuisine: "Italian",
    description: "Experience authentic Italian cuisine with our handcrafted pasta, wood-fired pizzas, and traditional Italian dishes made with the finest ingredients.",
    location: "Downtown",
    rating: 4.8,
    hours: "11:00 AM - 11:00 PM",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Asian Fusion",
    cuisine: "Asian",
    description: "A perfect blend of Asian flavors featuring sushi, ramen, stir-fries, and dim sum. Fresh ingredients and traditional cooking methods.",
    location: "Midtown",
    rating: 4.9,
    hours: "12:00 PM - 10:00 PM",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Burger House",
    cuisine: "American",
    description: "Juicy, flame-grilled burgers made with premium beef, fresh vegetables, and our signature sauces. Perfect for a quick and satisfying meal.",
    location: "Multiple Locations",
    rating: 4.7,
    hours: "10:00 AM - 12:00 AM",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Mexican Cantina",
    cuisine: "Mexican",
    description: "Spicy and flavorful Mexican dishes including tacos, burritos, enchiladas, and fresh guacamole. Authentic recipes passed down through generations.",
    location: "East Side",
    rating: 4.6,
    hours: "11:00 AM - 11:00 PM",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1565299585323-38174c3c6a0a?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Seafood Grill",
    cuisine: "Seafood",
    description: "Fresh seafood daily from local fishermen. Enjoy grilled fish, lobster, shrimp, and crab dishes prepared to perfection.",
    location: "Harbor District",
    rating: 4.9,
    hours: "5:00 PM - 11:00 PM",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    name: "Vegetarian Delight",
    cuisine: "Vegetarian",
    description: "Plant-based cuisine that's both healthy and delicious. Creative vegetarian and vegan options that will satisfy any palate.",
    location: "Green Street",
    rating: 4.8,
    hours: "10:00 AM - 9:00 PM",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    name: "Sushi Master",
    cuisine: "Asian",
    description: "Premium sushi and sashimi made with the freshest fish. Traditional Japanese techniques meet modern presentation.",
    location: "Waterfront",
    rating: 4.9,
    hours: "5:00 PM - 11:00 PM",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop"
  },
  {
    id: 8,
    name: "BBQ Smokehouse",
    cuisine: "American",
    description: "Slow-smoked meats, tender ribs, and classic BBQ sides. Our pitmasters use time-honored techniques for authentic flavor.",
    location: "South Side",
    rating: 4.8,
    hours: "11:00 AM - 10:00 PM",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop"
  },
  {
    id: 9,
    name: "Mediterranean Garden",
    cuisine: "Mediterranean",
    description: "Fresh Mediterranean cuisine featuring hummus, falafel, kebabs, and Greek salads. Healthy and flavorful dishes from the Mediterranean coast.",
    location: "Central Plaza",
    rating: 4.7,
    hours: "11:00 AM - 10:00 PM",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop"
  },
  {
    id: 10,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    description: "Authentic street-style tacos with fresh ingredients and homemade salsas. Quick service and bold flavors that bring Mexico to your plate.",
    location: "Food Court",
    rating: 4.6,
    hours: "10:00 AM - 11:00 PM",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop"
  },
  {
    id: 11,
    name: "Pizza Palace",
    cuisine: "Italian",
    description: "New York-style and Neapolitan pizzas with fresh toppings. Hand-tossed dough and wood-fired ovens for the perfect crust.",
    location: "North End",
    rating: 4.7,
    hours: "11:00 AM - 12:00 AM",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop"
  },
  {
    id: 12,
    name: "Curry House",
    cuisine: "Indian",
    description: "Authentic Indian curries, biryanis, and tandoori dishes. Rich spices and aromatic flavors that warm the soul.",
    location: "Little India",
    rating: 4.8,
    hours: "12:00 PM - 10:00 PM",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop"
  },
  {
    id: 13,
    name: "Thai Spice",
    cuisine: "Thai",
    description: "Traditional Thai cuisine with perfect balance of sweet, sour, salty, and spicy. Pad Thai, green curry, and tom yum soup.",
    location: "Asia Town",
    rating: 4.7,
    hours: "11:00 AM - 10:00 PM",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop"
  },
  {
    id: 14,
    name: "Steakhouse Prime",
    cuisine: "American",
    description: "Premium cuts of steak, perfectly grilled to your preference. Classic sides and an extensive wine selection.",
    location: "Uptown",
    rating: 4.9,
    hours: "5:00 PM - 11:00 PM",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop"
  },
  {
    id: 15,
    name: "Ramen Noodle Bar",
    cuisine: "Asian",
    description: "Authentic Japanese ramen with rich, flavorful broths and perfectly cooked noodles. A comforting bowl of perfection.",
    location: "Japan District",
    rating: 4.8,
    hours: "11:00 AM - 10:00 PM",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop"
  }
];

export const menuItems = {
  1: [
    { id: 101, name: "Margherita Pizza", description: "Fresh mozzarella, tomato sauce, basil", price: 16.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
    { id: 102, name: "Fettuccine Alfredo", description: "Creamy alfredo sauce with parmesan", price: 18.99, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
    { id: 103, name: "Chicken Parmigiana", description: "Breaded chicken with marinara and mozzarella", price: 22.99, image: "https://images.unsplash.com/photo-1606312619070-d48b4cbc3e3a?w=400&h=300&fit=crop" },
    { id: 104, name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons", price: 12.99, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop" },
    { id: 105, name: "Tiramisu", description: "Classic Italian dessert", price: 8.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop" }
  ],
  2: [
    { id: 201, name: "Dragon Roll", description: "Eel, cucumber, avocado, eel sauce", price: 14.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
    { id: 202, name: "Tonkotsu Ramen", description: "Pork bone broth, chashu, egg, nori", price: 15.99, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
    { id: 203, name: "Pad Thai", description: "Stir-fried noodles with shrimp and vegetables", price: 13.99, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop" },
    { id: 204, name: "Chicken Teriyaki", description: "Grilled chicken with teriyaki glaze", price: 16.99, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" },
    { id: 205, name: "Miso Soup", description: "Traditional Japanese soup", price: 4.99, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop" }
  ],
  3: [
    { id: 301, name: "Classic Burger", description: "Beef patty, lettuce, tomato, onion, pickles", price: 11.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
    { id: 302, name: "Bacon Cheeseburger", description: "Beef patty, bacon, cheese, special sauce", price: 13.99, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop" },
    { id: 303, name: "BBQ Burger", description: "Beef patty, BBQ sauce, onion rings", price: 12.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433f?w=400&h=300&fit=crop" },
    { id: 304, name: "Chicken Burger", description: "Grilled chicken, lettuce, mayo", price: 10.99, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop" },
    { id: 305, name: "French Fries", description: "Crispy golden fries", price: 4.99, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop" }
  ],
  4: [
    { id: 401, name: "Beef Tacos", description: "Three soft tacos with beef, lettuce, cheese", price: 12.99, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop" },
    { id: 402, name: "Chicken Burrito", description: "Large burrito with rice, beans, chicken", price: 13.99, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop" },
    { id: 403, name: "Chicken Enchiladas", description: "Three enchiladas with red sauce", price: 14.99, image: "https://images.unsplash.com/photo-1574343481803-6c5c8e5c5b5e?w=400&h=300&fit=crop" },
    { id: 404, name: "Guacamole & Chips", description: "Fresh guacamole with tortilla chips", price: 8.99, image: "https://images.unsplash.com/photo-1588167378332-0b3b0b5b5b5b?w=400&h=300&fit=crop" },
    { id: 405, name: "Churros", description: "Fried dough with cinnamon sugar", price: 6.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop" }
  ],
  5: [
    { id: 501, name: "Grilled Salmon", description: "Atlantic salmon with lemon butter", price: 24.99, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
    { id: 502, name: "Lobster Tail", description: "Butter poached lobster tail", price: 32.99, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
    { id: 503, name: "Shrimp Scampi", description: "Garlic butter shrimp over pasta", price: 21.99, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
    { id: 504, name: "Fish & Chips", description: "Beer battered cod with fries", price: 18.99, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
    { id: 505, name: "Crab Cakes", description: "Two jumbo crab cakes with aioli", price: 19.99, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" }
  ],
  6: [
    { id: 601, name: "Veggie Burger", description: "Plant-based patty with vegetables", price: 12.99, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
    { id: 602, name: "Quinoa Bowl", description: "Quinoa, roasted vegetables, tahini", price: 13.99, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
    { id: 603, name: "Cauliflower Wings", description: "Buffalo cauliflower with ranch", price: 10.99, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
    { id: 604, name: "Veggie Wrap", description: "Fresh vegetables in a whole wheat wrap", price: 9.99, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
    { id: 605, name: "Green Smoothie Bowl", description: "Acai bowl with fresh fruits", price: 8.99, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" }
  ],
  7: [
    { id: 701, name: "Salmon Sashimi", description: "Fresh Atlantic salmon, 8 pieces", price: 18.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
    { id: 702, name: "Tuna Roll", description: "Fresh tuna, cucumber, avocado", price: 12.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
    { id: 703, name: "Rainbow Roll", description: "Assorted fish with avocado", price: 15.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
    { id: 704, name: "Miso Soup", description: "Traditional Japanese soup", price: 4.99, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop" },
    { id: 705, name: "Edamame", description: "Steamed soybeans with salt", price: 5.99, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop" }
  ],
  8: [
    { id: 801, name: "BBQ Ribs", description: "Full rack of slow-smoked ribs", price: 24.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 802, name: "Brisket Platter", description: "Smoked brisket with sides", price: 22.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 803, name: "Pulled Pork Sandwich", description: "Slow-smoked pork on brioche bun", price: 15.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 804, name: "BBQ Chicken", description: "Half chicken with BBQ sauce", price: 16.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 805, name: "Mac & Cheese", description: "Creamy macaroni and cheese", price: 8.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" }
  ],
  9: [
    { id: 901, name: "Chicken Kebab", description: "Grilled chicken skewers with rice", price: 16.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" },
    { id: 902, name: "Hummus & Pita", description: "Fresh hummus with warm pita bread", price: 9.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" },
    { id: 903, name: "Falafel Plate", description: "Crispy falafel with tahini sauce", price: 12.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" },
    { id: 904, name: "Greek Salad", description: "Fresh vegetables with feta and olives", price: 11.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" },
    { id: 905, name: "Baklava", description: "Sweet pastry with honey and nuts", price: 7.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" }
  ],
  10: [
    { id: 1001, name: "Street Tacos (3)", description: "Three tacos with your choice of meat", price: 10.99, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop" },
    { id: 1002, name: "Quesadilla", description: "Cheese quesadilla with salsa", price: 8.99, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop" },
    { id: 1003, name: "Nachos Supreme", description: "Loaded nachos with all toppings", price: 11.99, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop" },
    { id: 1004, name: "Elote", description: "Mexican street corn", price: 6.99, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop" },
    { id: 1005, name: "Horchata", description: "Traditional rice drink", price: 4.99, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop" }
  ],
  11: [
    { id: 1101, name: "Pepperoni Pizza", description: "Classic pepperoni with mozzarella", price: 18.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
    { id: 1102, name: "Margherita Pizza", description: "Fresh mozzarella, tomato, basil", price: 16.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
    { id: 1103, name: "Meat Lovers Pizza", description: "Pepperoni, sausage, bacon, ham", price: 21.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
    { id: 1104, name: "Veggie Pizza", description: "Mixed vegetables and cheese", price: 17.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
    { id: 1105, name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 6.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" }
  ],
  12: [
    { id: 1201, name: "Butter Chicken", description: "Creamy tomato curry with chicken", price: 16.99, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop" },
    { id: 1202, name: "Chicken Biryani", description: "Fragrant rice with spiced chicken", price: 17.99, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop" },
    { id: 1203, name: "Lamb Curry", description: "Tender lamb in rich curry sauce", price: 19.99, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop" },
    { id: 1204, name: "Tandoori Chicken", description: "Marinated chicken from the tandoor", price: 15.99, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop" },
    { id: 1205, name: "Naan Bread", description: "Fresh baked naan", price: 3.99, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop" }
  ],
  13: [
    { id: 1301, name: "Pad Thai", description: "Stir-fried noodles with shrimp", price: 14.99, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop" },
    { id: 1302, name: "Green Curry", description: "Coconut curry with vegetables", price: 15.99, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop" },
    { id: 1303, name: "Tom Yum Soup", description: "Spicy and sour soup with shrimp", price: 12.99, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop" },
    { id: 1304, name: "Thai Basil Chicken", description: "Stir-fried chicken with basil", price: 13.99, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop" },
    { id: 1305, name: "Mango Sticky Rice", description: "Sweet dessert with coconut milk", price: 7.99, image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop" }
  ],
  14: [
    { id: 1401, name: "Ribeye Steak", description: "12oz ribeye, cooked to perfection", price: 34.99, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
    { id: 1402, name: "Filet Mignon", description: "8oz tenderloin with sides", price: 36.99, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
    { id: 1403, name: "New York Strip", description: "14oz strip steak", price: 32.99, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
    { id: 1404, name: "Surf & Turf", description: "Steak and lobster tail", price: 42.99, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
    { id: 1405, name: "Loaded Baked Potato", description: "Baked potato with all the fixings", price: 8.99, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" }
  ],
  15: [
    { id: 1501, name: "Tonkotsu Ramen", description: "Rich pork bone broth, chashu, egg", price: 15.99, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
    { id: 1502, name: "Shoyu Ramen", description: "Soy sauce based broth with chicken", price: 14.99, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
    { id: 1503, name: "Miso Ramen", description: "Miso-based broth with vegetables", price: 13.99, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
    { id: 1504, name: "Spicy Ramen", description: "Spicy tonkotsu with extra heat", price: 16.99, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
    { id: 1505, name: "Gyoza (6 pieces)", description: "Pan-fried pork dumplings", price: 8.99, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" }
  ]
};

// Get all menu items with restaurant info
export const getAllMenuItems = () => {
  const allItems = [];
  Object.keys(menuItems).forEach(restaurantId => {
    const restaurant = restaurants.find(r => r.id === parseInt(restaurantId));
    menuItems[restaurantId].forEach(item => {
      allItems.push({
        ...item,
        restaurantId: parseInt(restaurantId),
        restaurantName: restaurant?.name || '',
        restaurantCuisine: restaurant?.cuisine || ''
      });
    });
  });
  return allItems;
};

