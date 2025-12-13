import { useSearchParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { restaurants, getAllMenuItems } from "../utils/restaurantData";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { addToCart } = useCart();

  // Search restaurants
  const searchRestaurants = (searchQuery) => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(lowerQuery) ||
        restaurant.cuisine.toLowerCase().includes(lowerQuery) ||
        restaurant.description.toLowerCase().includes(lowerQuery) ||
        restaurant.location.toLowerCase().includes(lowerQuery)
    );
  };

  // Search menu items
  const searchMenuItems = (searchQuery) => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    const allMenuItems = getAllMenuItems();
    return allMenuItems.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
    );
  };

  const matchedRestaurants = searchRestaurants(query);
  const matchedMenuItems = searchMenuItems(query);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-[#db1020] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Search Results
        {query && (
          <span className="text-2xl text-[#4A4A4A] ml-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            for &quot;{query}&quot;
          </span>
        )}
      </h1>

      {!query ? (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search</span>
          <p className="text-[#4A4A4A] text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Please enter a search query
          </p>
        </div>
      ) : matchedRestaurants.length === 0 && matchedMenuItems.length === 0 ? (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
          <p className="text-[#4A4A4A] text-lg mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            No results found for &quot;{query}&quot;
          </p>
          <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Try searching for restaurants, cuisines, or menu items
          </p>
        </div>
      ) : (
        <>
          {/* Restaurants Results */}
          {matchedRestaurants.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Restaurants ({matchedRestaurants.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedRestaurants.map((restaurant) => (
                  <Link
                    key={restaurant.id}
                    to={`/restaurants/${restaurant.id}`}
                    className="bg-white rounded-[16px] shadow-soft overflow-hidden hover:shadow-medium transition duration-300 flex flex-col"
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
                      <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2 hover:text-[#db1020] transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {restaurant.name}
                      </h3>
                      <p className="text-sm text-[#4A4A4A] mb-3 flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {restaurant.description}
                      </p>
                      <p className="text-xs text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        📍 {restaurant.location}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Menu Items Results */}
          {matchedMenuItems.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Menu Items ({matchedMenuItems.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedMenuItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[16px] shadow-soft overflow-hidden hover:shadow-medium transition duration-300 flex flex-col"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop";
                        }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <Link
                        to={`/restaurants/${item.restaurantId}`}
                        className="block mb-1"
                      >
                        <h3 className="text-xl font-semibold text-[#1F1F1F] hover:text-[#db1020] transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-[#6B6B6B] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        from <span className="font-semibold text-[#db1020]">{item.restaurantName}</span> • {item.restaurantCuisine}
                      </p>
                      <p className="text-sm text-[#4A4A4A] mb-4 flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-[#db1020]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          ${item.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => addToCart({
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            price: item.price,
                            image: item.image,
                            restaurantId: item.restaurantId
                          })}
                          className="bg-[#db1020] text-white px-4 py-2 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px] flex items-center gap-2"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;

