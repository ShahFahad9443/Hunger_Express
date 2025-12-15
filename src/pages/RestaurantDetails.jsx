import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import StarRating from "../components/StarRating";
import restaurantService from "../services/restaurantService.js";
import ratingService from "../services/ratingService.js";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [showMenuItemRatingModal, setShowMenuItemRatingModal] = useState(null);
  const [menuItemRatingSubmitted, setMenuItemRatingSubmitted] = useState(false);
  const [menuSearchQuery, setMenuSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const restaurantId = parseInt(id, 10);

  // Load restaurant and menu data
  useEffect(() => {
    loadRestaurantData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadRestaurantData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log(`Loading restaurant data for ID: ${restaurantId}`);
      
      const [restaurantRes, menuRes] = await Promise.all([
        restaurantService.getRestaurant(restaurantId),
        restaurantService.getRestaurantMenu(restaurantId)
      ]);

      console.log('Restaurant response:', restaurantRes);
      console.log('Menu response:', menuRes);

      if (restaurantRes && restaurantRes.success) {
        setRestaurant(restaurantRes.data);
      } else {
        setError(restaurantRes?.error || "Restaurant not found");
        return;
      }

      if (menuRes && menuRes.success && Array.isArray(menuRes.data)) {
        setMenuItems(menuRes.data);
        console.log(`Loaded ${menuRes.data.length} menu items`);
      } else {
        console.warn('No menu items found or invalid response:', menuRes);
        setMenuItems([]);
      }
    } catch (err) {
      console.error('Error loading restaurant data:', err);
      setError(err.message || "Failed to load restaurant data");
    } finally {
      setLoading(false);
    }
  };

  // Infer category from item name/description
  const getItemCategory = (item) => {
    const name = item.name.toLowerCase();
    const desc = item.description.toLowerCase();
    
    if (name.includes('pizza') || name.includes('pasta') || name.includes('risotto') || desc.includes('italian')) {
      return 'Main Course';
    } else if (name.includes('salad') || desc.includes('lettuce') || desc.includes('greens')) {
      return 'Salad';
    } else if (name.includes('soup') || desc.includes('soup') || desc.includes('broth')) {
      return 'Soup';
    } else if (name.includes('burger') || name.includes('sandwich') || desc.includes('burger')) {
      return 'Main Course';
    } else if (name.includes('taco') || name.includes('burrito') || name.includes('enchilada')) {
      return 'Main Course';
    } else if (name.includes('roll') || name.includes('sushi') || name.includes('sashimi')) {
      return 'Main Course';
    } else if (name.includes('ramen') || name.includes('noodle') || desc.includes('noodle')) {
      return 'Main Course';
    } else if (name.includes('fries') || name.includes('chips') || name.includes('side')) {
      return 'Side';
    } else if (name.includes('dessert') || name.includes('tiramisu') || name.includes('churro') || name.includes('cake') || desc.includes('dessert')) {
      return 'Dessert';
    } else if (name.includes('drink') || name.includes('beverage') || desc.includes('drink')) {
      return 'Beverage';
    } else {
      return 'Main Course';
    }
  };

  // Get unique categories
  const categories = ["All", ...new Set(menuItems.map(item => item.category || getItemCategory(item)))];
  
  // Filter and sort menu items
  let filteredMenu = menuItems.filter(item => {
    // Search filter
    let matchesSearch = true;
    if (menuSearchQuery.trim()) {
      const lowerQuery = menuSearchQuery.toLowerCase();
      matchesSearch = 
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery);
    }
    
    // Price range filter
    let matchesPrice = true;
    if (priceRange !== "All") {
      if (priceRange === "Budget") {
        matchesPrice = item.price < 10;
      } else if (priceRange === "Moderate") {
        matchesPrice = item.price >= 10 && item.price < 20;
      } else if (priceRange === "Expensive") {
        matchesPrice = item.price >= 20;
      }
    }
    
    // Category filter
    const matchesCategory = categoryFilter === "All" || getItemCategory(item) === categoryFilter;
    
    return matchesSearch && matchesPrice && matchesCategory;
  });

  // Sort menu items
  if (sortBy !== "default") {
    filteredMenu = [...filteredMenu].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }

  const handleRating = async (rating) => {
    try {
      await ratingService.rateRestaurant(restaurantId, rating, user?.id);
      setRatingSubmitted(true);
      await loadRestaurantData(); // Reload to get updated rating
      
      setTimeout(() => {
        setShowRatingModal(false);
        setRatingSubmitted(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to submit rating:", error);
      setRatingSubmitted(false);
    }
  };

  const handleMenuItemRating = async (itemId, rating) => {
    try {
      await ratingService.rateMenuItem(itemId, rating, user?.id);
      setMenuItemRatingSubmitted(true);
      await loadRestaurantData(); // Reload to get updated rating
      
      setTimeout(() => {
        setShowMenuItemRatingModal(null);
        setMenuItemRatingSubmitted(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to submit rating:", error);
      setMenuItemRatingSubmitted(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6 flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner size="lg" text="Loading restaurant..." />
      </div>
    );
  }

  if (error || !restaurant) {
    return (
      <div className="container mx-auto px-4 py-6">
        <ErrorMessage 
          message={error || "Restaurant not found"} 
          onRetry={loadRestaurantData}
        />
        <div className="text-center mt-6">
          <Link
            to="/restaurants"
            className="inline-block bg-[#db1020] text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Back to Restaurants
          </Link>
        </div>
      </div>
    );
  }

  const averageRating = parseFloat(restaurant.rating || 0);

  return (
    <div>
      {/* Hero Section with Restaurant Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <img
          src={restaurant.image_url || restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#ffd700] text-[#1F1F1F] px-3 py-1 rounded-full text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                {restaurant.cuisine}
              </span>
              <span className="bg-[#27742d] text-white px-3 py-1 rounded-full text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                30-45 min
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{restaurant.name}</h1>
            <div className="flex items-center gap-4 flex-wrap">
              <StarRating 
                rating={averageRating} 
                size="md" 
                interactive={false}
                showValue={true}
              />
              <button
                onClick={() => setShowRatingModal(true)}
                className="text-white hover:text-[#ffd700] text-sm font-semibold flex items-center gap-1 underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="material-symbols-outlined text-sm">rate_review</span>
                Rate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#4A4A4A] mb-8 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>{restaurant.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#f9f5f5] rounded-[16px] p-4 shadow-soft">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#db1020] text-2xl">location_on</span>
                  <p className="text-sm text-[#6B6B6B] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Location</p>
                </div>
                <p className="font-semibold text-[#1F1F1F] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{restaurant.location}</p>
              </div>
              
              <div className="bg-[#f9f5f5] rounded-[16px] p-4 shadow-soft">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#db1020] text-2xl">schedule</span>
                  <p className="text-sm text-[#6B6B6B] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Hours</p>
                </div>
                <p className="font-semibold text-[#1F1F1F] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{restaurant.hours}</p>
              </div>
              
              <div className="bg-[#f9f5f5] rounded-[16px] p-4 shadow-soft">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#db1020] text-2xl">attach_money</span>
                  <p className="text-sm text-[#6B6B6B] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Avg. Price</p>
                </div>
                <p className="font-semibold text-[#1F1F1F] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>${parseFloat(restaurant.price_range || restaurant.price || 0).toFixed(2)}</p>
              </div>
              
              <div className="bg-[#f9f5f5] rounded-[16px] p-4 shadow-soft">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#27742d] text-2xl">delivery_dining</span>
                  <p className="text-sm text-[#6B6B6B] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Delivery Time</p>
                </div>
                <p className="font-semibold text-[#1F1F1F] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>30-45 min</p>
              </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#ffd700] bg-opacity-10 rounded-[16px] p-4 border border-[#ffd700] border-opacity-30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#ffd700]">star</span>
                  <p className="text-sm text-[#6B6B6B] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Rating</p>
                </div>
                <div className="flex items-center gap-2">
                  <StarRating 
                    rating={averageRating} 
                    size="sm" 
                    interactive={false}
                    showValue={true}
                  />
                </div>
              </div>
              
              <div className="bg-[#27742d] bg-opacity-10 rounded-[16px] p-4 border border-[#27742d] border-opacity-30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#27742d]">restaurant</span>
                  <p className="text-sm text-[#6B6B6B] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Cuisine Type</p>
                </div>
                <p className="font-semibold text-[#1F1F1F] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{restaurant.cuisine}</p>
              </div>
              
              <div className="bg-[#db1020] bg-opacity-10 rounded-[16px] p-4 border border-[#db1020] border-opacity-30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#db1020]">shopping_bag</span>
                  <p className="text-sm text-[#6B6B6B] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Menu Items</p>
                </div>
                <p className="font-semibold text-[#1F1F1F] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{menuItems.length} items</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-[#f9f5f5] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Menu</h2>
            
            {/* Menu Search */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <input
                  type="text"
                  value={menuSearchQuery}
                  onChange={(e) => setMenuSearchQuery(e.target.value)}
                  placeholder="Search menu items..."
                  className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px] shadow-soft"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
                {menuSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setMenuSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#db1020]"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                )}
              </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white rounded-[16px] p-6 shadow-soft mb-6">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <label htmlFor="category-filter" className="text-[#1F1F1F] font-semibold whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Category:
                  </label>
                  <select
                    id="category-filter"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] text-[#1F1F1F] bg-white min-h-[44px] shadow-soft"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="flex items-center gap-2">
                  <label htmlFor="price-filter" className="text-[#1F1F1F] font-semibold whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Price:
                  </label>
                  <select
                    id="price-filter"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] text-[#1F1F1F] bg-white min-h-[44px] shadow-soft"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="All">All Prices</option>
                    <option value="Budget">Budget (&lt; $10)</option>
                    <option value="Moderate">Moderate ($10 - $20)</option>
                    <option value="Expensive">Expensive (&gt; $20)</option>
                  </select>
                </div>

                {/* Sort By Filter */}
                <div className="flex items-center gap-2">
                  <label htmlFor="sort-filter" className="text-[#1F1F1F] font-semibold whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Sort By:
                  </label>
                  <select
                    id="sort-filter"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] text-[#1F1F1F] bg-white min-h-[44px] shadow-soft"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                  </select>
                </div>

                {/* Clear Filters Button */}
                {(categoryFilter !== "All" || priceRange !== "All" || sortBy !== "default" || menuSearchQuery) && (
                  <button
                    onClick={() => {
                      setCategoryFilter("All");
                      setPriceRange("All");
                      setSortBy("default");
                      setMenuSearchQuery("");
                    }}
                    className="px-4 py-2 bg-[#db1020] text-white rounded-[16px] hover:bg-[#c00e1d] transition shadow-medium min-h-[44px] font-semibold flex items-center gap-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="material-symbols-outlined text-sm">filter_alt_off</span>
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {/* Results Count */}
            {filteredMenu.length > 0 && (
              <p className="text-[#4A4A4A] mb-6 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                Showing {filteredMenu.length} item{filteredMenu.length !== 1 ? 's' : ''}
                {(categoryFilter !== "All" || priceRange !== "All" || menuSearchQuery) && (
                  <span className="block mt-1 text-sm">
                    {categoryFilter !== "All" && `• ${categoryFilter}`}
                    {priceRange !== "All" && ` • ${priceRange}`}
                    {menuSearchQuery && ` • "${menuSearchQuery}"`}
                  </span>
                )}
              </p>
            )}
            
            {filteredMenu.length === 0 ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">restaurant_menu</span>
                <p className="text-[#4A4A4A] text-lg mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {menuSearchQuery || categoryFilter !== "All" || priceRange !== "All" 
                    ? "No menu items found matching your filters." 
                    : "Menu coming soon!"}
                </p>
                {(menuSearchQuery || categoryFilter !== "All" || priceRange !== "All") && (
                  <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Try adjusting your search criteria or clear all filters.
                  </p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMenu.map((item) => {
                  const itemCategory = getItemCategory(item);
                  return (
                    <div key={item.id} className="bg-white rounded-[16px] shadow-soft overflow-hidden hover:shadow-large transition-all duration-300 flex flex-col group">
                      <div className="relative h-40 w-full overflow-hidden transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-transform duration-300">
                        <img
                          src={item.image_url || item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-3 right-3 transform group-hover:scale-110 transition-transform duration-300">
                          <span className="bg-[#ffd700] text-[#1F1F1F] px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-opacity-95 shadow-soft" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {item.category || itemCategory}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.name}</h3>
                        <p className="text-[#4A4A4A] mb-3 flex-grow text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{item.description || ''}</p>
                        
                        {/* Rating Section */}
                        <div className="flex items-center gap-3 mb-4">
                          <StarRating 
                            rating={parseFloat(item.rating || 4.5)} 
                            size="sm" 
                            interactive={false}
                            showValue={true}
                          />
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setShowMenuItemRatingModal(item.id);
                            }}
                            className="text-[#db1020] hover:text-[#ffd700] text-xs font-semibold flex items-center gap-1 transition-colors duration-300"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <span className="material-symbols-outlined text-sm">rate_review</span>
                            Rate
                          </button>
                        </div>

                        <div className="flex justify-between items-center mt-auto">
                          <div className="flex flex-col">
                            <span className="text-2xl font-bold text-[#db1020] group-hover:text-[#c00e1d] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              ${parseFloat(item.price).toFixed(2)}
                            </span>
                            <span className="text-xs text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {itemCategory}
                            </span>
                          </div>
                          <button
                            onClick={() => addToCart({
                              id: item.id,
                              name: item.name,
                              description: item.description,
                              price: parseFloat(item.price),
                              image: item.image_url || item.image,
                              restaurantId: restaurantId
                            })}
                            className="bg-[#db1020] text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105 min-h-[44px] flex items-center gap-2 transform"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <span className="material-symbols-outlined">add_shopping_cart</span>
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Rating Modal */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-md w-full mx-4 shadow-large">
            {ratingSubmitted ? (
              <div className="text-center">
                <div className="mb-4">
                  <span className="material-symbols-outlined text-[#27742d] text-6xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Thank You!</h3>
                <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>Your rating has been submitted successfully.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Rate {restaurant.name}
                </h3>
                <div className="flex justify-center mb-6">
                  <StarRating
                    rating={0}
                    onRatingChange={(rating) => handleRating(rating)}
                    interactive={true}
                    size="xl"
                    showValue={true}
                  />
                </div>
                <p className="text-[#4A4A4A] text-center mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Click on the stars to rate this restaurant
                </p>
                <button
                  onClick={() => {
                    setShowRatingModal(false);
                    setRatingSubmitted(false);
                  }}
                  className="w-full bg-gray-200 text-[#1F1F1F] py-3 rounded-[16px] font-semibold hover:bg-gray-300 transition min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Menu Item Rating Modal */}
      {showMenuItemRatingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-md w-full mx-4 shadow-large">
            {menuItemRatingSubmitted ? (
              <div className="text-center">
                <div className="mb-4">
                  <span className="material-symbols-outlined text-[#27742d] text-6xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Thank You!</h3>
                <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>Your rating has been submitted successfully.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Rate {filteredMenu.find(item => item.id === showMenuItemRatingModal)?.name}
                </h3>
                <div className="flex justify-center mb-6">
                  <StarRating
                    rating={0}
                    onRatingChange={(rating) => handleMenuItemRating(showMenuItemRatingModal, rating)}
                    interactive={true}
                    size="xl"
                    showValue={true}
                  />
                </div>
                <p className="text-[#4A4A4A] text-center mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Click on the stars to rate this menu item
                </p>
                <button
                  onClick={() => {
                    setShowMenuItemRatingModal(null);
                    setMenuItemRatingSubmitted(false);
                  }}
                  className="w-full bg-gray-200 text-[#1F1F1F] py-3 rounded-[16px] font-semibold hover:bg-gray-300 transition min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
