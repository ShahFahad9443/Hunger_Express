import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Delicious Food, Delivered Fast
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Order from your favorite restaurants and get fresh, hot meals delivered 
              right to your doorstep in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/restaurants"
                className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-50 transition duration-300 shadow-lg"
              >
                Browse Restaurants
              </Link>
              <Link
                to="/offers"
                className="bg-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-800 transition duration-300 shadow-lg border-2 border-white"
              >
                View Offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Hunger Express?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your food delivered in 30-45 minutes. We ensure your meals arrive 
                hot and fresh, every time.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Wide Selection</h3>
              <p className="text-gray-600">
                Choose from hundreds of restaurants offering cuisines from around 
                the world, all in one place.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Easy Payment</h3>
              <p className="text-gray-600">
                Multiple payment options including cards, digital wallets, and cash 
                on delivery for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Restaurants Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Popular Restaurants</h2>
            <Link
              to="/restaurants"
              className="text-pink-600 font-semibold hover:text-pink-700 transition"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Italian Bistro</h3>
                <p className="text-gray-600 mb-4">
                  Authentic Italian cuisine with handcrafted pasta and wood-fired pizzas.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-500">⭐ 4.8</span>
                  <span className="text-gray-500 text-sm">30-45 min</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Asian Fusion</h3>
                <p className="text-gray-600 mb-4">
                  Perfect blend of Asian flavors featuring sushi, ramen, and stir-fries.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-500">⭐ 4.9</span>
                  <span className="text-gray-500 text-sm">25-40 min</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Burger House</h3>
                <p className="text-gray-600 mb-4">
                  Juicy, flame-grilled burgers with premium beef and signature sauces.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-500">⭐ 4.7</span>
                  <span className="text-gray-500 text-sm">20-35 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">🎉 Special Weekend Offer!</h2>
            <p className="text-xl mb-6">
              Get 30% OFF on your first order. Use code <span className="font-bold text-2xl">FIRST30</span> at checkout
            </p>
            <Link
              to="/offers"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition duration-300 shadow-lg"
            >
              View All Offers
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose Restaurant</h3>
              <p className="text-gray-600">
                Browse through our wide selection of restaurants and cuisines
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Select Food</h3>
              <p className="text-gray-600">
                Pick your favorite dishes from the menu and add to cart
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Place Order</h3>
              <p className="text-gray-600">
                Complete your order with secure payment and delivery details
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Enjoy Food</h3>
              <p className="text-gray-600">
                Receive your delicious meal at your doorstep, hot and fresh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-pink-200">Restaurants</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-pink-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
              <div className="text-pink-200">Orders Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8</div>
              <div className="text-pink-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers and get your favorite food delivered today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/restaurants"
              className="bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-700 transition duration-300 shadow-lg"
            >
              Start Ordering
            </Link>
            <Link
              to="/signup"
              className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-50 transition duration-300 shadow-lg border-2 border-pink-600"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
