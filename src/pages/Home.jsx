import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import StarRating from "../components/StarRating";
import restaurantService from "../services/restaurantService.js";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const location = useLocation();
  const [popularRestaurants, setPopularRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPopularRestaurants();
  }, [location.pathname, location.state]);

  const loadPopularRestaurants = async () => {
    try {
      setLoading(true);
      console.log('Loading popular restaurants from API...');
      const response = await restaurantService.getRestaurants({ minRating: 4.5 });
      console.log('Popular restaurants API Response:', response);
      
      if (response && response.success && response.data && Array.isArray(response.data)) {
        // Get top 3 by rating
        const sorted = response.data.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
        setPopularRestaurants(sorted.slice(0, 3));
        console.log(`Loaded ${sorted.slice(0, 3).length} popular restaurants`);
      } else {
        console.warn('No popular restaurants found or invalid response:', response);
        setPopularRestaurants([]);
      }
    } catch (error) {
      console.error("Failed to load restaurants:", error);
      // Fallback to empty array
      setPopularRestaurants([]);
    } finally {
      setLoading(false);
    }
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
            <div className="bg-white rounded-[16px] shadow-soft p-8 text-center hover:shadow-large transition-all duration-300 border-2 border-transparent hover:border-[#27742d] transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer">
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#27742d] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Fast Delivery</h3>
              <p className="text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get your food delivered in 30-45 minutes. We ensure your meals arrive 
                hot and fresh, every time.
              </p>
              <div className="mt-4 inline-block bg-[#27742d] text-white px-4 py-2 rounded-full text-sm font-semibold transform group-hover:scale-110 transition-transform duration-300 shadow-soft group-hover:shadow-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                ✓ Guaranteed Fresh
              </div>
            </div>

            <div className="bg-white rounded-[16px] shadow-soft p-8 text-center hover:shadow-large transition-all duration-300 border-2 border-transparent hover:border-[#db1020] transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer">
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">🍽️</div>
              <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Wide Selection</h3>
              <p className="text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Choose from hundreds of restaurants offering cuisines from around 
                the world, all in one place.
              </p>
              <div className="mt-4 inline-block bg-[#db1020] text-white px-4 py-2 rounded-full text-sm font-semibold transform group-hover:scale-110 transition-transform duration-300 shadow-soft group-hover:shadow-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                ✓ 100+ Restaurants
              </div>
            </div>

            <div className="bg-white rounded-[16px] shadow-soft p-8 text-center hover:shadow-large transition-all duration-300 border-2 border-transparent hover:border-[#ffd700] transform hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer">
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">💳</div>
              <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#ffd700] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>Easy Payment</h3>
              <p className="text-[#4A4A4A] group-hover:text-[#1F1F1F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Pay securely with your preferred method. We accept cards, cash on 
                delivery, and digital wallets.
              </p>
              <div className="mt-4 inline-block bg-[#ffd700] text-[#1F1F1F] px-4 py-2 rounded-full text-sm font-semibold transform group-hover:scale-110 transition-transform duration-300 shadow-soft group-hover:shadow-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                ✓ Secure Payment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1F1F1F] mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Popular Restaurants
          </h2>
          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" text="Loading restaurants..." />
            </div>
          ) : popularRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularRestaurants.map((restaurant) => {
                const rating = parseFloat(restaurant.rating || 0);
                return (
                  <Link
                    key={restaurant.id}
                    to={`/restaurants/${restaurant.id}`}
                    className="bg-white rounded-[16px] shadow-soft overflow-hidden hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={restaurant.image_url || restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {restaurant.name}
                      </h3>
                      <p className="text-[#4A4A4A] mb-4 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {restaurant.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <StarRating 
                          rating={rating} 
                          size="sm" 
                          interactive={false}
                          showValue={true}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                No restaurants available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-16 bg-gradient-to-r from-[#ffd700] to-[#ffed4e]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>🎉 Special Weekend Offer!</h2>
            <p className="text-xl mb-6 text-[#1F1F1F]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get 20% off on all orders this weekend. Use code <strong>WEEKEND20</strong> at checkout!
            </p>
            <Link
              to="/offers"
              className="inline-block bg-[#db1020] text-white px-8 py-4 rounded-[16px] font-semibold text-lg hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View All Offers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
