import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminLayout = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (user?.role !== "admin") {
      navigate("/");
      return;
    }
  }, [isAuthenticated, user, navigate]);

  const navItems = [
    { path: "/admin", label: "Dashboard", icon: "dashboard" },
    { path: "/admin/restaurants", label: "Restaurants", icon: "restaurant" },
    { path: "/admin/menu-items", label: "Menu Items", icon: "restaurant_menu" },
    { path: "/admin/orders", label: "Orders", icon: "receipt_long" },
    { path: "/admin/users", label: "Users", icon: "people" },
    { path: "/admin/promo-codes", label: "Promo Codes", icon: "local_offer" },
    { path: "/admin/ratings", label: "Ratings", icon: "star" }
  ];

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  if (!isAuthenticated || user?.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f9f5f5]">
      {/* Admin Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-soft z-40">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#db1020]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Admin Panel
          </h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[12px] transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-[#db1020] text-white shadow-medium"
                      : "text-[#1F1F1F] hover:bg-[#f9f5f5]"
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

