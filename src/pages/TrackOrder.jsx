import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import orderService from "../services/orderService.js";

const TrackOrder = () => {
  const location = useLocation();
  const [orderNumber, setOrderNumber] = useState(location.state?.orderNumber || "");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [searchAttempted, setSearchAttempted] = useState(false);

  // Auto-search if order number is provided via location state
  useEffect(() => {
    const loadOrder = async () => {
      if (location.state?.orderNumber) {
        try {
          const response = await orderService.getOrder(location.state.orderNumber);
          if (response.success) {
            setOrder(response.data);
            setSearchAttempted(true);
          }
        } catch (error) {
          setError("Order not found");
          setSearchAttempted(true);
        }
      }
    };
    loadOrder();
  }, [location.state]);

  const getOrderStatus = (order) => {
    if (!order) return null;
    
    const statusMap = {
      'pending': { status: "pending", step: 0, message: "Order Pending" },
      'confirmed': { status: "confirmed", step: 0, message: "Order Confirmed" },
      'preparing': { status: "preparing", step: 1, message: "Preparing Your Order" },
      'ready': { status: "ready", step: 2, message: "Order Ready for Pickup" },
      'out_for_delivery': { status: "out_for_delivery", step: 3, message: "Out for Delivery" },
      'delivered': { status: "delivered", step: 4, message: "Delivered" },
      'cancelled': { status: "cancelled", step: -1, message: "Order Cancelled" }
    };
    
    return statusMap[order.status] || statusMap['pending'];
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchAttempted(true);
    setError("");
    setOrder(null);
    
    if (!orderNumber.trim()) {
      setError("Please enter an order number");
      return;
    }

    try {
      const response = await orderService.getOrder(orderNumber.trim().toUpperCase());
      if (response.success) {
        setOrder(response.data);
        setError("");
      } else {
        setError("Order not found. Please check your order number and try again.");
      }
    } catch (error) {
      setError("Order not found. Please check your order number and try again.");
    }
  };

  const statusSteps = [
    { label: "Order Confirmed", icon: "check_circle", color: "#27742d" },
    { label: "Preparing", icon: "restaurant", color: "#ffd700" },
    { label: "Ready", icon: "done", color: "#ffd700" },
    { label: "Out for Delivery", icon: "delivery_dining", color: "#db1020" },
    { label: "Delivered", icon: "check_circle", color: "#27742d" }
  ];

  const orderStatus = order ? getOrderStatus(order) : null;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📦</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#db1020] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Track Your Order</h1>
          <p className="text-xl text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Enter your order number to see real-time updates
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-[16px] shadow-soft p-8 mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                  placeholder="Enter order number (e.g., ORD-1234567890)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#db1020] min-h-[44px] shadow-soft"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <button
                type="submit"
                className="bg-[#db1020] text-white px-8 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105 min-h-[44px] transform flex items-center justify-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="material-symbols-outlined">search</span>
                Track Order
              </button>
            </div>
            {error && (
              <p className="text-[#db1020] text-sm mt-3 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="material-symbols-outlined text-sm">error</span>
                {error}
              </p>
            )}
          </form>
        </div>

        {/* Order Details */}
        {order && orderStatus && (
          <div className="space-y-6">
            {/* Order Info Card */}
            <div className="bg-white rounded-[16px] shadow-soft p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Order #{order.orderNumber}
                  </h2>
                  <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Placed on {new Date(order.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="bg-[#27742d] bg-opacity-10 border-2 border-[#27742d] rounded-[16px] px-6 py-3">
                  <p className="text-sm text-[#4A4A4A] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Status</p>
                  <p className="text-lg font-bold text-[#27742d]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {orderStatus.message}
                  </p>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Order Progress</h3>
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200">
                    <div 
                      className="absolute top-0 left-0 w-full bg-[#27742d] transition-all duration-500"
                      style={{ height: `${(orderStatus.step / (statusSteps.length - 1)) * 100}%` }}
                    ></div>
                  </div>

                  {/* Status Steps */}
                  <div className="space-y-8">
                    {statusSteps.map((step, index) => {
                      const isCompleted = index <= orderStatus.step;
                      const isCurrent = index === orderStatus.step;
                      
                      return (
                        <div key={index} className="flex items-start gap-4 relative">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isCompleted 
                              ? `bg-[#27742d] text-white shadow-medium` 
                              : `bg-gray-200 text-gray-400`
                          } ${isCurrent ? 'ring-4 ring-[#27742d] ring-opacity-30 scale-110' : ''}`}>
                            <span className="material-symbols-outlined text-2xl">
                              {step.icon}
                            </span>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                              isCompleted ? 'text-[#1F1F1F]' : 'text-gray-400'
                            }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {step.label}
                            </h4>
                            {isCurrent && (
                              <p className="text-sm text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Your order is currently at this stage
                              </p>
                            )}
                            {isCompleted && !isCurrent && index < orderStatus.step && (
                              <p className="text-sm text-[#27742d]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                ✓ Completed
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Order Items</h3>
                <div className="space-y-3">
                  {order.items && order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-[#f9f5f5] rounded-[16px]">
                      <div className="w-16 h-16 rounded-[12px] overflow-hidden bg-gray-100 flex-shrink-0">
                        {item.image_url ? (
                          <img
                            src={item.image_url}
                            alt={item.item_name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop";
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-gray-400">image</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {item.item_name}
                        </h4>
                        <p className="text-sm text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Quantity: {item.quantity} × ${parseFloat(item.price_at_time).toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#db1020]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          ${(parseFloat(item.price_at_time) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span>Subtotal</span>
                    <span>${parseFloat(order.subtotal).toFixed(2)}</span>
                  </div>
                  {order.discount > 0 && (
                    <div className="flex justify-between text-[#27742d]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span>Discount ({order.promo_code || 'Promo'})</span>
                      <span>-${parseFloat(order.discount).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span>Delivery Fee</span>
                    <span>${parseFloat(order.delivery_fee).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span>Tax</span>
                    <span>${parseFloat(order.tax).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-[#db1020] pt-3 border-t" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <span>Total</span>
                    <span>${parseFloat(order.total).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              {order.deliveryInfo && (
                <div className="mt-6 p-6 bg-[#f9f5f5] rounded-[16px]">
                  <h3 className="text-lg font-semibold text-[#1F1F1F] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Delivery Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#4A4A4A] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Name</p>
                      <p className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Inter, sans-serif' }}>{order.deliveryInfo.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#4A4A4A] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Phone</p>
                      <p className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Inter, sans-serif' }}>{order.deliveryInfo.phone}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-[#4A4A4A] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Address</p>
                      <p className="font-semibold text-[#1F1F1F]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {order.deliveryInfo.address}, {order.deliveryInfo.city}, {order.deliveryInfo.state} {order.deliveryInfo.zipCode}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setOrderNumber("");
                  setOrder(null);
                  setError("");
                  setSearchAttempted(false);
                }}
                className="bg-white text-[#db1020] border-2 border-[#db1020] px-8 py-3 rounded-[16px] font-semibold hover:bg-[#ffd700] hover:text-[#1F1F1F] transition duration-300 shadow-soft min-h-[44px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Track Another Order
              </button>
              <Link
                to="/restaurants"
                className="bg-[#db1020] text-white px-8 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition duration-300 shadow-medium text-center min-h-[44px] flex items-center justify-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Order Again
              </Link>
            </div>
          </div>
        )}

        {/* No Order Found Message */}
        {searchAttempted && !order && !error && (
          <div className="bg-white rounded-[16px] shadow-soft p-8 text-center">
            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
            <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Order Not Found</h3>
            <p className="text-[#4A4A4A] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              We couldn&apos;t find an order with that number. Please check and try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;

