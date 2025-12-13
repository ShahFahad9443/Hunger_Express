import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";

const Home = () => {
  // Popular restaurants data (first 3 from restaurants page)
  const popularRestaurants = [
    {
      id: 1,
      name: "Italian Bistro",
      cuisine: "Italian",
      description: "Authentic Italian cuisine with handcrafted pasta and wood-fired pizzas.",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Asian Fusion",
      cuisine: "Asian",
      description: "Perfect blend of Asian flavors featuring sushi, ramen, and stir-fries.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Burger House",
      cuisine: "American",
      description: "Juicy, flame-grilled burgers with premium beef and signature sauces.",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop"
    }
  ];

  // Calculate average rating (same logic as Restaurant page)
  const getAverageRating = (restaurantId, baseRating) => {
    const ratings = JSON.parse(localStorage.getItem("restaurantRatings") || "{}");
    const restaurantRatings = ratings[restaurantId] || [];
    
    if (restaurantRatings.length === 0) {
      return baseRating;
    }
    
    const sum = restaurantRatings.reduce((acc, r) => acc + r.rating, 0);
    const average = (sum + baseRating * 10) / (restaurantRatings.length + 10);
    return average;
  };

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#db1020] to-[#c00e1d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Delicious Food, Delivered Fast
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
              Order from your favorite restaurants and get fresh, hot meals delivered 
              right to your doorstep in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/restaurants"
                className="bg-white text-[#db1020] px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#ffd700] hover:text-[#1F1F1F] transition duration-300 shadow-medium min-h-[44px] flex items-center justify-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Browse Restaurants
              </Link>
              <Link
                to="/offers"
                className="bg-[#ffd700] text-[#1F1F1F] px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#ffed4e] transition duration-300 shadow-medium border-2 border-white min-h-[44px] flex items-center justify-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View Offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f9f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1F1F1F] mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Choose Hunger Express?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[16px] shadow-soft p-8 text-center hover:shadow-medium transition duration-300 border-2 border-transparent hover:border-[#27742d]">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Fast Delivery</h3>
              <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get your food delivered in 30-45 minutes. We ensure your meals arrive 
                hot and fresh, every time.
              </p>
              <div className="mt-4 inline-block bg-[#27742d] text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                ✓ Guaranteed Fresh
              </div>
            </div>

            <div className="bg-white rounded-[16px] shadow-soft p-8 text-center hover:shadow-medium transition duration-300">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Wide Selection</h3>
              <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Choose from hundreds of restaurants offering cuisines from around 
                the world, all in one place.
              </p>
            </div>

            <div className="bg-white rounded-[16px] shadow-soft p-8 text-center hover:shadow-medium transition duration-300">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Easy Payment</h3>
              <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Multiple payment options including cards, digital wallets, and cash 
                on delivery for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Restaurants Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>Popular Restaurants</h2>
            <Link
              to="/restaurants"
              className="text-[#db1020] font-semibold hover:text-[#ffd700] transition"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularRestaurants.map((restaurant) => {
              const averageRating = getAverageRating(restaurant.id, restaurant.rating);
              return (
                <Link
                  key={restaurant.id}
                  to={`/restaurants/${restaurant.id}`}
                  className="bg-white rounded-[16px] shadow-soft overflow-hidden hover:shadow-medium transition duration-300 flex flex-col cursor-pointer"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop";
                      }}
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#ffd700] text-[#1F1F1F] px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm bg-opacity-95 shadow-soft" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {restaurant.cuisine}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 hover:text-[#db1020] transition" style={{ fontFamily: 'Poppins, sans-serif' }}>{restaurant.name}</h3>
                    <p className="text-[#4A4A4A] mb-4 flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {restaurant.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <StarRating 
                        rating={averageRating} 
                        size="sm" 
                        interactive={false}
                        showValue={true}
                      />
                      <span className="bg-[#27742d] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-soft" style={{ fontFamily: 'Inter, sans-serif' }}>30-45 min</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-16 bg-gradient-to-r from-[#ffd700] to-[#ffed4e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-[#1F1F1F]">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>🎉 Special Weekend Offer!</h2>
            <p className="text-xl mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get 30% OFF on your first order. Use code <span className="font-bold text-2xl">FIRST30</span> at checkout
            </p>
            <Link
              to="/offers"
              className="inline-block bg-[#db1020] text-white px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px] flex items-center justify-center mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View All Offers
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#f9f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1F1F1F] mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#db1020] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                1
              </div>
              <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Choose Restaurant</h3>
              <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Browse through our wide selection of restaurants and cuisines
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#db1020] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                2
              </div>
              <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Select Food</h3>
              <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Pick your favorite dishes from the menu and add to cart
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#db1020] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                3
              </div>
              <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Place Order</h3>
              <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Complete your order with secure payment and delivery details
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#27742d] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                4
              </div>
              <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Enjoy Food</h3>
              <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Receive your delicious meal at your doorstep, hot and fresh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#db1020] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>500+</div>
              <div className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>Restaurants</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>50K+</div>
              <div className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>100K+</div>
              <div className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>Orders Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>4.8</div>
              <div className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Order?
          </h2>
          <p className="text-xl text-[#4A4A4A] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Join thousands of satisfied customers and get your favorite food delivered today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/restaurants"
              className="bg-[#db1020] text-white px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px] flex items-center justify-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Start Ordering
            </Link>
            <Link
              to="/signup"
              className="bg-white text-[#db1020] px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#ffd700] hover:text-[#1F1F1F] transition duration-300 shadow-soft border-2 border-[#db1020] min-h-[44px] flex items-center justify-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
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
