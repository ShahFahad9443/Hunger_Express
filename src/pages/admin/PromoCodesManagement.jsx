import { useState, useEffect } from "react";
import adminService from "../../services/adminService";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const PromoCodesManagement = () => {
  const [promoCodes, setPromoCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingPromo, setEditingPromo] = useState(null);
  const [formData, setFormData] = useState({
    code: "",
    discount_type: "percentage",
    discount_value: "",
    min_order_amount: "",
    max_uses: "",
    valid_from: "",
    valid_until: "",
    is_active: true,
  });

  useEffect(() => {
    loadPromoCodes();
  }, []);

  const loadPromoCodes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminService.getAllPromoCodes();
      if (response.success) {
        setPromoCodes(response.data);
      } else {
        setError(response.error || "Failed to load promo codes");
      }
    } catch (err) {
      setError(err.message || "Failed to load promo codes");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddPromoCode = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const promoData = {
        ...formData,
        discount_value: parseFloat(formData.discount_value),
        min_order_amount: parseFloat(formData.min_order_amount) || 0,
        max_uses: formData.max_uses ? parseInt(formData.max_uses) : null,
        valid_from: formData.valid_from || null,
        valid_until: formData.valid_until || null,
      };
      const response = await adminService.createPromoCode(promoData);
      if (response.success) {
        setShowAddModal(false);
        setFormData({
          code: "",
          discount_type: "percentage",
          discount_value: "",
          min_order_amount: "",
          max_uses: "",
          valid_from: "",
          valid_until: "",
          is_active: true,
        });
        loadPromoCodes();
      } else {
        setError(response.error || "Failed to create promo code");
      }
    } catch (err) {
      setError(err.message || "Failed to create promo code");
    }
  };

  const handleEditPromoCode = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const promoData = {
        ...formData,
        discount_value: parseFloat(formData.discount_value),
        min_order_amount: parseFloat(formData.min_order_amount) || 0,
        max_uses: formData.max_uses ? parseInt(formData.max_uses) : null,
        valid_from: formData.valid_from || null,
        valid_until: formData.valid_until || null,
      };
      const response = await adminService.updatePromoCode(editingPromo.id, promoData);
      if (response.success) {
        setShowEditModal(false);
        setEditingPromo(null);
        loadPromoCodes();
      } else {
        setError(response.error || "Failed to update promo code");
      }
    } catch (err) {
      setError(err.message || "Failed to update promo code");
    }
  };

  const handleDeletePromoCode = async (id) => {
    if (!window.confirm("Are you sure you want to delete this promo code?")) {
      return;
    }
    try {
      setError(null);
      const response = await adminService.deletePromoCode(id);
      if (response.success) {
        loadPromoCodes();
      } else {
        setError(response.error || "Failed to delete promo code");
      }
    } catch (err) {
      setError(err.message || "Failed to delete promo code");
    }
  };

  const openEditModal = (promo) => {
    setEditingPromo(promo);
    setFormData({
      code: promo.code || "",
      discount_type: promo.discount_type || "percentage",
      discount_value: promo.discount_value || "",
      min_order_amount: promo.min_order_amount || "",
      max_uses: promo.max_uses || "",
      valid_from: promo.valid_from ? promo.valid_from.split('T')[0] : "",
      valid_until: promo.valid_until ? promo.valid_until.split('T')[0] : "",
      is_active: promo.is_active !== undefined ? promo.is_active : true,
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
          Promo Codes Management
        </h1>
        <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Create and manage promotional codes
        </p>
      </div>

      {error && <ErrorMessage message={error} onRetry={loadPromoCodes} />}

      <div className="bg-white rounded-[16px] shadow-soft p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            All Promo Codes
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#db1020] text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px] flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="material-symbols-outlined">add</span>
            Add Promo Code
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Code</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Discount</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Min Order</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Uses</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Status</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {promoCodes.map((promo) => (
                <tr key={promo.id} className="border-b border-gray-100 hover:bg-[#f9f5f5] transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {promo.code}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {promo.discount_type === 'percentage' 
                      ? `${promo.discount_value}%` 
                      : `$${parseFloat(promo.discount_value).toFixed(2)}`}
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    ${parseFloat(promo.min_order_amount || 0).toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {promo.current_uses || 0} / {promo.max_uses || '∞'}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      promo.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      {promo.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(promo)}
                        className="text-[#db1020] hover:text-[#c00e1d] transition-colors p-2"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        onClick={() => handleDeletePromoCode(promo.id)}
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

      {/* Add/Edit Modals - Similar structure to other management pages */}
      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-2xl w-full mx-4 shadow-large max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Add New Promo Code
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-[#db1020] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddPromoCode} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Code *
                </label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px] uppercase"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Discount Type *
                  </label>
                  <select
                    name="discount_type"
                    value={formData.discount_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    required
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed Amount</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Discount Value *
                  </label>
                  <input
                    type="number"
                    name="discount_value"
                    value={formData.discount_value}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Min Order Amount ($)
                  </label>
                  <input
                    type="number"
                    name="min_order_amount"
                    value={formData.min_order_amount}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Max Uses
                  </label>
                  <input
                    type="number"
                    name="max_uses"
                    value={formData.max_uses}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="Leave empty for unlimited"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Valid From
                  </label>
                  <input
                    type="date"
                    name="valid_from"
                    value={formData.valid_from}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Valid Until
                  </label>
                  <input
                    type="date"
                    name="valid_until"
                    value={formData.valid_until}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#db1020] rounded focus:ring-[#db1020]"
                />
                <label className="text-gray-700 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Active
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Add Promo Code
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

      {/* Edit Modal - Similar structure */}
      {showEditModal && editingPromo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-2xl w-full mx-4 shadow-large max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Edit Promo Code
              </h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingPromo(null);
                }}
                className="text-gray-400 hover:text-[#db1020] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleEditPromoCode} className="space-y-4">
              {/* Same form fields as Add Modal */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Code *
                </label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px] uppercase"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Discount Type *
                  </label>
                  <select
                    name="discount_type"
                    value={formData.discount_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    required
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed Amount</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Discount Value *
                  </label>
                  <input
                    type="number"
                    name="discount_value"
                    value={formData.discount_value}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Min Order Amount ($)
                  </label>
                  <input
                    type="number"
                    name="min_order_amount"
                    value={formData.min_order_amount}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Max Uses
                  </label>
                  <input
                    type="number"
                    name="max_uses"
                    value={formData.max_uses}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                    placeholder="Leave empty for unlimited"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Valid From
                  </label>
                  <input
                    type="date"
                    name="valid_from"
                    value={formData.valid_from}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Valid Until
                  </label>
                  <input
                    type="date"
                    name="valid_until"
                    value={formData.valid_until}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#db1020] rounded focus:ring-[#db1020]"
                />
                <label className="text-gray-700 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Active
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Update Promo Code
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingPromo(null);
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

export default PromoCodesManagement;

