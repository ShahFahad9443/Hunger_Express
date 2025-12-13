const Restaurant = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Our Restaurants</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Italian Bistro</h2>
          <p className="text-gray-600 mb-4">
            Experience authentic Italian cuisine with our handcrafted pasta, wood-fired pizzas, 
            and traditional Italian dishes made with the finest ingredients.
          </p>
          <p className="text-sm text-gray-500">📍 Downtown | ⭐ 4.8 | 🕐 11:00 AM - 11:00 PM</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Asian Fusion</h2>
          <p className="text-gray-600 mb-4">
            A perfect blend of Asian flavors featuring sushi, ramen, stir-fries, and dim sum. 
            Fresh ingredients and traditional cooking methods.
          </p>
          <p className="text-sm text-gray-500">📍 Midtown | ⭐ 4.9 | 🕐 12:00 PM - 10:00 PM</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Burger House</h2>
          <p className="text-gray-600 mb-4">
            Juicy, flame-grilled burgers made with premium beef, fresh vegetables, and our 
            signature sauces. Perfect for a quick and satisfying meal.
          </p>
          <p className="text-sm text-gray-500">📍 Multiple Locations | ⭐ 4.7 | 🕐 10:00 AM - 12:00 AM</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Mexican Cantina</h2>
          <p className="text-gray-600 mb-4">
            Spicy and flavorful Mexican dishes including tacos, burritos, enchiladas, and 
            fresh guacamole. Authentic recipes passed down through generations.
          </p>
          <p className="text-sm text-gray-500">📍 East Side | ⭐ 4.6 | 🕐 11:00 AM - 11:00 PM</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Seafood Grill</h2>
          <p className="text-gray-600 mb-4">
            Fresh seafood daily from local fishermen. Enjoy grilled fish, lobster, shrimp, 
            and crab dishes prepared to perfection.
          </p>
          <p className="text-sm text-gray-500">📍 Harbor District | ⭐ 4.9 | 🕐 5:00 PM - 11:00 PM</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Vegetarian Delight</h2>
          <p className="text-gray-600 mb-4">
            Plant-based cuisine that&apos;s both healthy and delicious. Creative vegetarian and 
            vegan options that will satisfy any palate.
          </p>
          <p className="text-sm text-gray-500">📍 Green Street | ⭐ 4.8 | 🕐 10:00 AM - 9:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

