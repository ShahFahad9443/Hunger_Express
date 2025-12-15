import { useState, useEffect } from "react";
import adminService from "../../services/adminService";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const UsersManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    role: "",
    is_active: true,
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminService.getAllUsers();
      if (response.success) {
        setUsers(response.data);
      } else {
        setError(response.error || "Failed to load users");
      }
    } catch (err) {
      setError(err.message || "Failed to load users");
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

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const response = await adminService.updateUser(editingUser.id, formData);
      if (response.success) {
        setShowEditModal(false);
        setEditingUser(null);
        loadUsers();
      } else {
        setError(response.error || "Failed to update user");
      }
    } catch (err) {
      setError(err.message || "Failed to update user");
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to deactivate this user?")) {
      return;
    }
    try {
      setError(null);
      const response = await adminService.deleteUser(id);
      if (response.success) {
        loadUsers();
      } else {
        setError(response.error || "Failed to deactivate user");
      }
    } catch (err) {
      setError(err.message || "Failed to deactivate user");
    }
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setFormData({
      role: user.role || "customer",
      is_active: user.is_active !== undefined ? user.is_active : true,
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
          Users Management
        </h1>
        <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Manage user accounts and permissions
        </p>
      </div>

      {error && <ErrorMessage message={error} onRetry={loadUsers} />}

      <div className="bg-white rounded-[16px] shadow-soft p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Username</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Email</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Role</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Status</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Created</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-[#f9f5f5] transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {user.username}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {user.email}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.role === 'admin' ? 'bg-[#db1020] text-white' : 'bg-gray-200 text-gray-800'
                    }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      {user.role?.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      {user.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(user)}
                        className="text-[#db1020] hover:text-[#c00e1d] transition-colors p-2"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-700 transition-colors p-2"
                        title="Deactivate"
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

      {/* Edit Modal */}
      {showEditModal && editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 max-w-md w-full mx-4 shadow-large">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Edit User
              </h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingUser(null);
                }}
                className="text-gray-400 hover:text-[#db1020] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px]"
                  required
                >
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
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
                  Active Account
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#db1020] text-white py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium min-h-[44px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Update User
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingUser(null);
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

export default UsersManagement;

