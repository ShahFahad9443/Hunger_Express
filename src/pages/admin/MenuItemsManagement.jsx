import { useState, useEffect } from "react";
import adminService from "../../services/adminService";
import restaurantService from "../../services/restaurantService";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const MenuItemsManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    restaurant_id: "",
    name: "",
    description: "",
    price: "",
    image_url: "",
    category: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [menuResponse, restaurantResponse] = await Promise.all([
        adminService.getAllMenuItems(),
        restaurantService.getRestaurants()
      ]);
      
      if (menuResponse.success) {
        setMenuItems(menuResponse.data);
      }
      if (restaurantResponse.success) {
        setRestaurants(restaurantResponse.data);
      }
    } catch (err) {
      setError(err.message || "Failed to load data");
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

  const handleAddMenuItem = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const menuItemData = {
        ...formData,
        price: parseFloat(formData.price),
        restaurant_id: parseInt(formData.restaurant_id),
      };
      const response = await adminService.createMenuItem(menuItemData);
      if (response.success) {
        setShowAddModal(false);
        setFormData({
          restaurant_id: "",
          name: "",
          description: "",
          price: "",
          image_url: "",
          category: "",
        });
        loadData();
      } else {
        setError(response.error || "Failed to create menu item");
      }
    } catch (err) {
      setError(err.message || "Failed to create menu item");
    }
  };

  const handleEditMenuItem = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const menuItemData = {
        ...formData,
        price: parseFloat(formData.price),
        restaurant_id: parseInt(formData.restaurant_id),
      };
      const response = await adminService.updateMenuItem(editingItem.id, menuItemData);
      if (response.success) {
        setShowEditModal(false);
        setEditingItem(null);
        setFormData({
          restaurant_id: "",
          name: "",
          description: "",
          price: "",
          image_url: "",
          category: "",
        });
        loadData();
      } else {
        setError(response.error || "Failed to update menu item");
      }
    } catch (err) {
      setError(err.message || "Failed to update menu item");
    }
  };

  const handleDeleteMenuItem = async (id) => {
    if (!window.confirm("Are you sure you want to delete this menu item?")) {
      return;
    }
    try {
      setError(null);
      const response = await adminService.deleteMenuItem(id);
      if (response.success) {
        loadData();
      } else {
        setError(response.error || "Failed to delete menu item");
      }
    } catch (err) {
      setError(err.message || "Failed to delete menu item");
    }
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      restaurant_id: item.restaurant_id.toString(),
      name: item.name || "",
      description: item.description || "",
      price: item.price || "",
      image_url: item.image_url || "",
      category: item.category || "",
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
          Menu Items Management
        </h1>
        <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Manage menu items for all restaurants
        </p>
      </div>

      {error && <ErrorMessage message={error} onRetry={loadData} />}

      <div className="bg-white rounded-[16px] shadow-soft p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            All Menu Items
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#db1020] text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px] flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="material-symbols-outlined">add</span>
            Add Menu Item
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Name</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Restaurant</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Category</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Price</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Rating</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-[#f9f5f5] transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.name}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.restaurant_name || 'N/A'}
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.category || 'N/A'}
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    ${parseFloat(item.price || 0).toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {parseFloat(item.rating || 0).toFixed(1)} ⭐
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(item)}
                        className="text-[#db1020] hover:text-[#c00e1d] transition-colors p-2"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteMenuItem(item.id)}
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

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-2xl w-full mx-4 shadow-large max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Add New Menu Item
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-[#db1020] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddMenuItem} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Restaurant *
                </label>
                <select
                  name="restaurant_id"
                  value={formData.restaurant_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                >
                  <option value="">Select Restaurant</option>
                  {restaurants.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Item Name *
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="e.g., Appetizer, Main Course"
                  />
                </div>
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

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Add Menu Item
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

      {/* Edit Modal - Similar structure to Add Modal */}
      {showEditModal && editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-2xl w-full mx-4 shadow-large max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Edit Menu Item
              </h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingItem(null);
                }}
                className="text-gray-400 hover:text-[#db1020] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleEditMenuItem} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Restaurant *
                </label>
                <select
                  name="restaurant_id"
                  value={formData.restaurant_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                >
                  <option value="">Select Restaurant</option>
                  {restaurants.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Item Name *
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="e.g., Appetizer, Main Course"
                  />
                </div>
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

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Update Menu Item
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingItem(null);
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

export default MenuItemsManagement;

