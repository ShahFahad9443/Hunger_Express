import { useState, useEffect } from "react";
import restaurantService from "../services/restaurantService";
import adminService from "../services/adminService";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const RestaurantsManagement = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingRestaurant, setEditingRestaurant] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    description: "",
    location: "",
    image_url: "",
    hours: "",
    price_range: "",
  });

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await restaurantService.getRestaurants();
      if (response.success) {
        setRestaurants(response.data);
      } else {
        setError(response.error || "Failed to load restaurants");
      }
    } catch (err) {
      setError(err.message || "Failed to load restaurants");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddRestaurant = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const restaurantData = {
        ...formData,
        price_range: parseFloat(formData.price_range) || 0,
        rating: 0,
      };
      const response = await adminService.createRestaurant(restaurantData);
      if (response.success) {
        setShowAddModal(false);
        setFormData({
          name: "",
          cuisine: "",
          description: "",
          location: "",
          image_url: "",
          hours: "",
          price_range: "",
        });
        loadRestaurants();
      } else {
        setError(response.error || "Failed to create restaurant");
      }
    } catch (err) {
      setError(err.message || "Failed to create restaurant");
    }
  };

  const handleEditRestaurant = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const restaurantData = {
        ...formData,
        price_range: parseFloat(formData.price_range) || 0,
      };
      const response = await adminService.updateRestaurant(editingRestaurant.id, restaurantData);
      if (response.success) {
        setShowEditModal(false);
        setEditingRestaurant(null);
        setFormData({
          name: "",
          cuisine: "",
          description: "",
          location: "",
          image_url: "",
          hours: "",
          price_range: "",
        });
        loadRestaurants();
      } else {
        setError(response.error || "Failed to update restaurant");
      }
    } catch (err) {
      setError(err.message || "Failed to update restaurant");
    }
  };

  const handleDeleteRestaurant = async (id) => {
    if (!window.confirm("Are you sure you want to delete this restaurant?")) {
      return;
    }
    try {
      setError(null);
      const response = await adminService.deleteRestaurant(id);
      if (response.success) {
        loadRestaurants();
      } else {
        setError(response.error || "Failed to delete restaurant");
      }
    } catch (err) {
      setError(err.message || "Failed to delete restaurant");
    }
  };

  const openEditModal = (restaurant) => {
    setEditingRestaurant(restaurant);
    setFormData({
      name: restaurant.name || "",
      cuisine: restaurant.cuisine || "",
      description: restaurant.description || "",
      location: restaurant.location || "",
      image_url: restaurant.image_url || "",
      hours: restaurant.hours || "",
      price_range: restaurant.price_range || "",
    });
    setShowEditModal(true);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#db1020] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Admin Panel
        </h1>
        <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Manage restaurants, menu items, and more
        </p>
      </div>

      {error && <ErrorMessage message={error} onRetry={loadRestaurants} />}

      {/* Restaurants Section */}
      <div className="bg-white rounded-[16px] shadow-soft p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Restaurants Management
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#db1020] text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px] flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="material-symbols-outlined">add</span>
            Add Restaurant
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Name</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Cuisine</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Location</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Rating</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => (
                <tr key={restaurant.id} className="border-b border-gray-100 hover:bg-[#f9f5f5] transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {restaurant.name}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {restaurant.cuisine}
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {restaurant.location}
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {parseFloat(restaurant.rating || 0).toFixed(1)} ⭐
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(restaurant)}
                        className="text-[#db1020] hover:text-[#c00e1d] transition-colors p-2"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteRestaurant(restaurant.id)}
                        className="text-red-600 hover:text-red-700 transition-colors p-2"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Restaurant Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-2xl w-full mx-4 shadow-large max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Add New Restaurant
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-[#db1020] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddRestaurant} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Restaurant Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Cuisine Type *
                </label>
                <input
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Image URL
                </label>
                <input
                  type="url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Hours
                  </label>
                  <input
                    type="text"
                    name="hours"
                    value={formData.hours}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="11:00 AM - 11:00 PM"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Price Range ($)
                  </label>
                  <input
                    type="number"
                    name="price_range"
                    value={formData.price_range}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="15.99"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Add Restaurant
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 border border-gray-300 py-3 rounded-[16px] font-semibold text-gray-700 hover:bg-gray-50 transition min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Restaurant Modal */}
      {showEditModal && editingRestaurant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-2xl w-full mx-4 shadow-large max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Edit Restaurant
              </h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingRestaurant(null);
                }}
                className="text-gray-400 hover:text-[#db1020] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleEditRestaurant} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Restaurant Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Cuisine Type *
                </label>
                <input
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Image URL
                </label>
                <input
                  type="url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Hours
                  </label>
                  <input
                    type="text"
                    name="hours"
                    value={formData.hours}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="11:00 AM - 11:00 PM"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Price Range ($)
                  </label>
                  <input
                    type="number"
                    name="price_range"
                    value={formData.price_range}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="15.99"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Update Restaurant
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingRestaurant(null);
                  }}
                  className="flex-1 border border-gray-300 py-3 rounded-[16px] font-semibold text-gray-700 hover:bg-gray-50 transition min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantsManagement;

