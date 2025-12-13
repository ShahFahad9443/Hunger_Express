import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const Restaurant = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { addToCart } = useCart();

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCuisine]);

  const restaurants = [
    {
      id: 1,
      name: "Italian Bistro",
      cuisine: "Italian",
      description: "Experience authentic Italian cuisine with our handcrafted pasta, wood-fired pizzas, and traditional Italian dishes made with the finest ingredients.",
      location: "Downtown",
      rating: 4.8,
      hours: "11:00 AM - 11:00 PM",
      price: 15.99
    },
    {
      id: 2,
      name: "Asian Fusion",
      cuisine: "Asian",
      description: "A perfect blend of Asian flavors featuring sushi, ramen, stir-fries, and dim sum. Fresh ingredients and traditional cooking methods.",
      location: "Midtown",
      rating: 4.9,
      hours: "12:00 PM - 10:00 PM",
      price: 18.99
    },
    {
      id: 3,
      name: "Burger House",
      cuisine: "American",
      description: "Juicy, flame-grilled burgers made with premium beef, fresh vegetables, and our signature sauces. Perfect for a quick and satisfying meal.",
      location: "Multiple Locations",
      rating: 4.7,
      hours: "10:00 AM - 12:00 AM",
      price: 12.99
    },
    {
      id: 4,
      name: "Mexican Cantina",
      cuisine: "Mexican",
      description: "Spicy and flavorful Mexican dishes including tacos, burritos, enchiladas, and fresh guacamole. Authentic recipes passed down through generations.",
      location: "East Side",
      rating: 4.6,
      hours: "11:00 AM - 11:00 PM",
      price: 14.99
    },
    {
      id: 5,
      name: "Seafood Grill",
      cuisine: "Seafood",
      description: "Fresh seafood daily from local fishermen. Enjoy grilled fish, lobster, shrimp, and crab dishes prepared to perfection.",
      location: "Harbor District",
      rating: 4.9,
      hours: "5:00 PM - 11:00 PM",
      price: 24.99
    },
    {
      id: 6,
      name: "Vegetarian Delight",
      cuisine: "Vegetarian",
      description: "Plant-based cuisine that&apos;s both healthy and delicious. Creative vegetarian and vegan options that will satisfy any palate.",
      location: "Green Street",
      rating: 4.8,
      hours: "10:00 AM - 9:00 PM",
      price: 13.99
    },
    {
      id: 7,
      name: "Sushi Master",
      cuisine: "Asian",
      description: "Premium sushi and sashimi made with the freshest fish. Traditional Japanese techniques meet modern presentation.",
      location: "Waterfront",
      rating: 4.9,
      hours: "5:00 PM - 11:00 PM",
      price: 22.99
    },
    {
      id: 8,
      name: "BBQ Smokehouse",
      cuisine: "American",
      description: "Slow-smoked meats, tender ribs, and classic BBQ sides. Our pitmasters use time-honored techniques for authentic flavor.",
      location: "South Side",
      rating: 4.8,
      hours: "11:00 AM - 10:00 PM",
      price: 19.99
    },
    {
      id: 9,
      name: "Mediterranean Garden",
      cuisine: "Mediterranean",
      description: "Fresh Mediterranean cuisine featuring hummus, falafel, kebabs, and Greek salads. Healthy and flavorful dishes from the Mediterranean coast.",
      location: "Central Plaza",
      rating: 4.7,
      hours: "11:00 AM - 10:00 PM",
      price: 16.99
    },
    {
      id: 10,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      description: "Authentic street-style tacos with fresh ingredients and homemade salsas. Quick service and bold flavors that bring Mexico to your plate.",
      location: "Food Court",
      rating: 4.6,
      hours: "10:00 AM - 11:00 PM",
      price: 11.99
    },
    {
      id: 11,
      name: "Pizza Palace",
      cuisine: "Italian",
      description: "New York-style and Neapolitan pizzas with fresh toppings. Hand-tossed dough and wood-fired ovens for the perfect crust.",
      location: "North End",
      rating: 4.7,
      hours: "11:00 AM - 12:00 AM",
      price: 17.99
    },
    {
      id: 12,
      name: "Curry House",
      cuisine: "Indian",
      description: "Authentic Indian curries, biryanis, and tandoori dishes. Rich spices and aromatic flavors that warm the soul.",
      location: "Little India",
      rating: 4.8,
      hours: "12:00 PM - 10:00 PM",
      price: 15.99
    },
    {
      id: 13,
      name: "Thai Spice",
      cuisine: "Thai",
      description: "Traditional Thai cuisine with perfect balance of sweet, sour, salty, and spicy. Pad Thai, green curry, and tom yum soup.",
      location: "Asia Town",
      rating: 4.7,
      hours: "11:00 AM - 10:00 PM",
      price: 16.99
    },
    {
      id: 14,
      name: "Steakhouse Prime",
      cuisine: "American",
      description: "Premium cuts of steak, perfectly grilled to your preference. Classic sides and an extensive wine selection.",
      location: "Uptown",
      rating: 4.9,
      hours: "5:00 PM - 11:00 PM",
      price: 29.99
    },
    {
      id: 15,
      name: "Ramen Noodle Bar",
      cuisine: "Asian",
      description: "Authentic Japanese ramen with rich, flavorful broths and perfectly cooked noodles. A comforting bowl of perfection.",
      location: "Japan District",
      rating: 4.8,
      hours: "11:00 AM - 10:00 PM",
      price: 14.99
    }
  ];

  const cuisines = ["All", ...new Set(restaurants.map(r => r.cuisine))];

  const filteredRestaurants = selectedCuisine === "All" 
    ? restaurants 
    : restaurants.filter(r => r.cuisine === selectedCuisine);

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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-4 md:mb-0">Our Restaurants</h1>
        
        <div className="flex items-center gap-4">
          <label htmlFor="cuisine-filter" className="text-gray-700 font-semibold">
            Filter by Cuisine:
          </label>
          <select
            id="cuisine-filter"
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700 bg-white"
          >
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No restaurants found for this cuisine type.</p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredRestaurants.length)} of {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
            {selectedCuisine !== "All" && ` in ${selectedCuisine} cuisine`}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-2xl font-semibold text-gray-800">{restaurant.name}</h2>
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {restaurant.cuisine}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{restaurant.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  📍 {restaurant.location} | ⭐ {restaurant.rating} | 🕐 {restaurant.hours}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-pink-600">
                    ${restaurant.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart({
                      id: restaurant.id,
                      name: restaurant.name,
                      description: restaurant.description,
                      price: restaurant.price
                    })}
                    className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-pink-600 text-white hover:bg-pink-700"
                  }`}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, index) => {
                    if (page === 'ellipsis') {
                      return (
                        <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                          ...
                        </span>
                      );
                    }
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                          currentPage === page
                            ? "bg-pink-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
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
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-pink-600 text-white hover:bg-pink-700"
                  }`}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>

              <p className="text-sm text-gray-600">
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

