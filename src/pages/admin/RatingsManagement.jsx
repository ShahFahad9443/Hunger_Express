import { useState, useEffect } from "react";
import adminService from "../../services/adminService";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const RatingsManagement = () => {
  const [ratings, setRatings] = useState({ restaurant_ratings: [], menu_item_ratings: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("restaurant");

  useEffect(() => {
    loadRatings();
  }, []);

  const loadRatings = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminService.getAllRatings();
      if (response.success) {
        setRatings(response.data);
      } else {
        setError(response.error || "Failed to load ratings");
      }
    } catch (err) {
      setError(err.message || "Failed to load ratings");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRestaurantRating = async (id) => {
    if (!window.confirm("Are you sure you want to delete this rating?")) {
      return;
    }
    try {
      setError(null);
      const response = await adminService.deleteRestaurantRating(id);
      if (response.success) {
        loadRatings();
      } else {
        setError(response.error || "Failed to delete rating");
      }
    } catch (err) {
      setError(err.message || "Failed to delete rating");
    }
  };

  const handleDeleteMenuItemRating = async (id) => {
    if (!window.confirm("Are you sure you want to delete this rating?")) {
      return;
    }
    try {
      setError(null);
      const response = await adminService.deleteMenuItemRating(id);
      if (response.success) {
        loadRatings();
      } else {
        setError(response.error || "Failed to delete rating");
      }
    } catch (err) {
      setError(err.message || "Failed to delete rating");
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#db1020] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Ratings Management
        </h1>
        <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
          View and manage all ratings
        </p>
      </div>

      {error && <ErrorMessage message={error} onRetry={loadRatings} />}

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("restaurant")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "restaurant"
              ? "text-[#db1020] border-b-2 border-[#db1020]"
              : "text-[#4A4A4A] hover:text-[#db1020]"
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Restaurant Ratings ({ratings.restaurant_ratings?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab("menu")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "menu"
              ? "text-[#db1020] border-b-2 border-[#db1020]"
              : "text-[#4A4A4A] hover:text-[#db1020]"
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Menu Item Ratings ({ratings.menu_item_ratings?.length || 0})
        </button>
      </div>

      {/* Restaurant Ratings */}
      {activeTab === "restaurant" && (
        <div className="bg-white rounded-[16px] shadow-soft p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Restaurant</th>
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>User</th>
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Rating</th>
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Date</th>
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ratings.restaurant_ratings?.map((rating) => (
                  <tr key={rating.id} className="border-b border-gray-100 hover:bg-[#f9f5f5] transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {rating.restaurant_name || `Restaurant #${rating.restaurant_id}`}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {rating.username || `User #${rating.user_id}`}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        <span className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {rating.rating}
                        </span>
                        <span className="text-yellow-500">⭐</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {new Date(rating.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleDeleteRestaurantRating(rating.id)}
                        className="text-red-600 hover:text-red-700 transition-colors p-2"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {ratings.restaurant_ratings?.length === 0 && (
              <div className="text-center py-8 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                No restaurant ratings found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Menu Item Ratings */}
      {activeTab === "menu" && (
        <div className="bg-white rounded-[16px] shadow-soft p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Menu Item</th>
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>User</th>
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Rating</th>
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Date</th>
                  <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ratings.menu_item_ratings?.map((rating) => (
                  <tr key={rating.id} className="border-b border-gray-100 hover:bg-[#f9f5f5] transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {rating.menu_item_name || `Menu Item #${rating.menu_item_id}`}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {rating.username || `User #${rating.user_id}`}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        <span className="text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {rating.rating}
                        </span>
                        <span className="text-yellow-500">⭐</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {new Date(rating.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleDeleteMenuItemRating(rating.id)}
                        className="text-red-600 hover:text-red-700 transition-colors p-2"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {ratings.menu_item_ratings?.length === 0 && (
              <div className="text-center py-8 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                No menu item ratings found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingsManagement;

