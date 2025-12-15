import { useState, useEffect, useCallback } from "react";
import adminService from "../../services/adminService";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");

  const loadOrders = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminService.getAllOrders({ status: statusFilter || undefined, limit: 100 });
      if (response.success) {
        setOrders(response.data);
      } else {
        setError(response.error || "Failed to load orders");
      }
    } catch (err) {
      setError(err.message || "Failed to load orders");
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      setError(null);
      const response = await adminService.updateOrderStatus(orderId, newStatus);
      if (response.success) {
        loadOrders();
      } else {
        setError(response.error || "Failed to update order status");
      }
    } catch (err) {
      setError(err.message || "Failed to update order status");
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-blue-100 text-blue-800",
      preparing: "bg-purple-100 text-purple-800",
      ready: "bg-green-100 text-green-800",
      out_for_delivery: "bg-indigo-100 text-indigo-800",
      delivered: "bg-green-200 text-green-900",
      cancelled: "bg-red-100 text-red-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#db1020] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Orders Management
        </h1>
        <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
          View and manage all orders
        </p>
      </div>

      {error && <ErrorMessage message={error} onRetry={loadOrders} />}

      <div className="bg-white rounded-[16px] shadow-soft p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            All Orders
          </h2>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#db1020]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="preparing">Preparing</option>
            <option value="ready">Ready</option>
            <option value="out_for_delivery">Out for Delivery</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Order #</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>User</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Total</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Status</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Date</th>
                <th className="text-left py-3 px-4 text-[#1F1F1F] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-[#f9f5f5] transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {order.order_number}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {order.username || order.delivery_name || 'Guest'}
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    ${parseFloat(order.total || 0).toFixed(2)}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      {order.status?.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {new Date(order.created_at).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#db1020] text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="preparing">Preparing</option>
                      <option value="ready">Ready</option>
                      <option value="out_for_delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersManagement;

