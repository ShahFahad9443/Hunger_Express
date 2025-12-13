import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import { restaurants as allRestaurants } from "../utils/restaurantData";

const Restaurant = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [minRating, setMinRating] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;
  const [showRatingModal, setShowRatingModal] = useState(null);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  // Reset to page 1 when filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCuisine, selectedLocation, priceRange, minRating, sortBy, searchQuery]);

  // Calculate average rating for a restaurant
  const getAverageRating = (restaurantId, baseRating) => {
    const ratings = JSON.parse(localStorage.getItem("restaurantRatings") || "{}");
    const restaurantRatings = ratings[restaurantId] || [];
    
    if (restaurantRatings.length === 0) {
      return baseRating;
    }
    
    const sum = restaurantRatings.reduce((acc, r) => acc + r.rating, 0);
    const average = (sum + baseRating * 10) / (restaurantRatings.length + 10); // Weighted average
    return average;
  };

  const handleRating = (restaurantId, rating) => {
    const ratings = JSON.parse(localStorage.getItem("restaurantRatings") || "{}");
    const restaurantRatings = ratings[restaurantId] || [];
    
    // Add new rating
    const newRating = {
      rating,
      timestamp: new Date().toISOString(),
    };
    
    restaurantRatings.push(newRating);
    ratings[restaurantId] = restaurantRatings;
    
    localStorage.setItem("restaurantRatings", JSON.stringify(ratings));
    setRatingSubmitted(true);
    
    // Close modal after 1.5 seconds
    setTimeout(() => {
      setShowRatingModal(null);
      setRatingSubmitted(false);
    }, 1500);
  };

  const restaurants = allRestaurants;

  const cuisines = ["All", ...new Set(restaurants.map(r => r.cuisine))];
  const locations = ["All", ...new Set(restaurants.map(r => r.location))];

  // Filter restaurants by all criteria
  let filteredRestaurants = restaurants.filter(r => {
    const matchesCuisine = selectedCuisine === "All" || r.cuisine === selectedCuisine;
    const matchesLocation = selectedLocation === "All" || r.location === selectedLocation;
    
    // Price range filter
    let matchesPrice = true;
    if (priceRange !== "All") {
      if (priceRange === "Budget") {
        matchesPrice = r.price < 15;
      } else if (priceRange === "Moderate") {
        matchesPrice = r.price >= 15 && r.price < 25;
      } else if (priceRange === "Expensive") {
        matchesPrice = r.price >= 25;
      }
    }
    
    // Minimum rating filter
    const averageRating = getAverageRating(r.id, r.rating);
    const matchesRating = minRating === "All" || averageRating >= parseFloat(minRating);
    
    // Search query filter
    let matchesSearch = true;
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      matchesSearch = 
        r.name.toLowerCase().includes(lowerQuery) ||
        r.cuisine.toLowerCase().includes(lowerQuery) ||
        r.description.toLowerCase().includes(lowerQuery) ||
        r.location.toLowerCase().includes(lowerQuery);
    }
    
    return matchesCuisine && matchesLocation && matchesPrice && matchesRating && matchesSearch;
  });

  // Sort restaurants
  if (sortBy !== "default") {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => {
      const ratingA = getAverageRating(a.id, a.rating);
      const ratingB = getAverageRating(b.id, b.rating);
      
      switch (sortBy) {
        case "rating-high":
          return ratingB - ratingA;
        case "rating-low":
          return ratingA - ratingB;
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

  // Pagination calculations
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis
      if (currentPage <= 3) {
        // Show first 3 pages, ellipsis, and last page
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show first page, ellipsis, and last 3 pages
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show first page, ellipsis, current-1, current, current+1, ellipsis, last page
        pages.push(1);
        pages.push('ellipsis');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#db1020] mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Restaurants</h1>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurants..."
              className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px] shadow-soft"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#db1020]"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-[#f9f5f5] rounded-[16px] p-6 shadow-soft mb-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Cuisine Filter */}
            <div className="flex items-center gap-2">
              <label htmlFor="cuisine-filter" className="text-[#1F1F1F] font-semibold whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                Cuisine:
              </label>
              <select
                id="cuisine-filter"
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] text-[#1F1F1F] bg-white min-h-[44px] shadow-soft"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-2">
              <label htmlFor="location-filter" className="text-[#1F1F1F] font-semibold whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                Location:
              </label>
              <select
                id="location-filter"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] text-[#1F1F1F] bg-white min-h-[44px] shadow-soft"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
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
                <option value="Budget">Budget (&lt; $15)</option>
                <option value="Moderate">Moderate ($15 - $25)</option>
                <option value="Expensive">Expensive (&gt; $25)</option>
              </select>
            </div>

            {/* Minimum Rating Filter */}
            <div className="flex items-center gap-2">
              <label htmlFor="rating-filter" className="text-[#1F1F1F] font-semibold whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                Min Rating:
              </label>
              <select
                id="rating-filter"
                value={minRating}
                onChange={(e) => setMinRating(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] text-[#1F1F1F] bg-white min-h-[44px] shadow-soft"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <option value="All">All Ratings</option>
                <option value="4.5">4.5+ ⭐</option>
                <option value="4.0">4.0+ ⭐</option>
                <option value="3.5">3.5+ ⭐</option>
                <option value="3.0">3.0+ ⭐</option>
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
                <option value="rating-high">Rating: High to Low</option>
                <option value="rating-low">Rating: Low to High</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* Clear Filters Button */}
            {(selectedCuisine !== "All" || selectedLocation !== "All" || priceRange !== "All" || minRating !== "All" || sortBy !== "default" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCuisine("All");
                  setSelectedLocation("All");
                  setPriceRange("All");
                  setMinRating("All");
                  setSortBy("default");
                  setSearchQuery("");
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
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">restaurant</span>
          <p className="text-[#4A4A4A] text-lg mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>No restaurants found matching your filters.</p>
          <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Try adjusting your search criteria or clear all filters.</p>
        </div>
      ) : (
        <>
          <p className="text-[#4A4A4A] mb-6 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredRestaurants.length)} of {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
            {(selectedCuisine !== "All" || selectedLocation !== "All" || priceRange !== "All" || minRating !== "All" || searchQuery) && (
              <span className="block mt-1 text-sm">
                {selectedCuisine !== "All" && `• ${selectedCuisine}`}
                {selectedLocation !== "All" && ` • ${selectedLocation}`}
                {priceRange !== "All" && ` • ${priceRange}`}
                {minRating !== "All" && ` • ${minRating}+ ⭐`}
                {searchQuery && ` • "${searchQuery}"`}
              </span>
            )}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-stretch">
            {currentRestaurants.map((restaurant) => {
              const averageRating = getAverageRating(restaurant.id, restaurant.rating);
              return (
                <div key={restaurant.id} className="bg-white rounded-[16px] shadow-soft overflow-hidden hover:shadow-large transition-all duration-300 flex flex-col h-full cursor-pointer group">
                  <Link to={`/restaurants/${restaurant.id}`} className="block flex flex-col h-full">
                    <div className="relative h-48 w-full overflow-hidden flex-shrink-0 transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3 transform group-hover:scale-110 transition-transform duration-300">
                        <span className="bg-[#ffd700] text-[#1F1F1F] px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm bg-opacity-95 shadow-soft" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {restaurant.cuisine}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-2xl font-semibold text-[#1F1F1F] mb-3 group-hover:text-[#db1020] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>{restaurant.name}</h2>
                      <p className="text-[#4A4A4A] mb-4 flex-grow line-clamp-3" style={{ fontFamily: 'Inter, sans-serif' }}>{restaurant.description}</p>
                    
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center justify-between">
                          <StarRating 
                            rating={averageRating} 
                            size="sm" 
                            interactive={false}
                            showValue={true}
                          />
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setShowRatingModal(restaurant.id);
                            }}
                            className="text-[#db1020] hover:text-[#ffd700] text-sm font-semibold flex items-center gap-1"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <span className="material-symbols-outlined text-sm">rate_review</span>
                            Rate
                          </button>
                        </div>
                        <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          📍 {restaurant.location} | 🕐 {restaurant.hours}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
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
                      Rate {currentRestaurants.find(r => r.id === showRatingModal)?.name}
                    </h3>
                    <div className="flex justify-center mb-6">
                      <StarRating
                        rating={0}
                        onRatingChange={(rating) => handleRating(showRatingModal, rating)}
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
                        setShowRatingModal(null);
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-[16px] font-semibold transition min-h-[44px] flex items-center ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#db1020] text-white hover:bg-[#c00e1d] shadow-medium"
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, index) => {
                    if (page === 'ellipsis') {
                      return (
                        <span key={`ellipsis-${index}`} className="px-2 text-[#6B6B6B]">
                          ...
                        </span>
                      );
                    }
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-[16px] font-semibold transition min-h-[44px] ${
                          currentPage === page
                            ? "bg-[#db1020] text-white shadow-medium"
                            : "bg-gray-200 text-[#1F1F1F] hover:bg-gray-300"
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-[16px] font-semibold transition min-h-[44px] flex items-center ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#db1020] text-white hover:bg-[#c00e1d] shadow-medium"
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>

              <p className="text-sm text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Page {currentPage} of {totalPages}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Restaurant;

