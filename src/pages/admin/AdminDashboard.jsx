import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminDashboard = () => {
  const { user } = useAuth();

  const managementCards = [
    {
      title: "Restaurants",
      description: "Manage restaurants, add new ones, edit details, and remove restaurants",
      icon: "restaurant",
      link: "/admin/restaurants",
      color: "bg-[#db1020]",
      hoverColor: "hover:bg-[#c00e1d]"
    },
    {
      title: "Menu Items",
      description: "Add, edit, and delete menu items for all restaurants",
      icon: "restaurant_menu",
      link: "/admin/menu-items",
      color: "bg-[#ff6b35]",
      hoverColor: "hover:bg-[#e55a2b]"
    },
    {
      title: "Orders",
      description: "View all orders, update order status, and track deliveries",
      icon: "receipt_long",
      link: "/admin/orders",
      color: "bg-[#4ecdc4]",
      hoverColor: "hover:bg-[#3db5ad]"
    },
    {
      title: "Users",
      description: "Manage user accounts, roles, and permissions",
      icon: "people",
      link: "/admin/users",
      color: "bg-[#95e1d3]",
      hoverColor: "hover:bg-[#7dd4c4]"
    },
    {
      title: "Promo Codes",
      description: "Create and manage promotional codes and discounts",
      icon: "local_offer",
      link: "/admin/promo-codes",
      color: "bg-[#f38181]",
      hoverColor: "hover:bg-[#e06d6d]"
    },
    {
      title: "Ratings",
      description: "View and manage restaurant and menu item ratings",
      icon: "star",
      link: "/admin/ratings",
      color: "bg-[#fce38a]",
      hoverColor: "hover:bg-[#f9d857]"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#db1020] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Admin Dashboard
        </h1>
        <p className="text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Welcome back, {user?.username || 'Admin'}! Manage your platform from here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {managementCards.map((card) => (
          <Link
            key={card.title}
            to={card.link}
            className="block bg-white rounded-[16px] shadow-soft p-6 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`${card.color} ${card.hoverColor} w-16 h-16 rounded-[16px] flex items-center justify-center mb-4 transition-colors`}>
              <span className="material-symbols-outlined text-white text-3xl">
                {card.icon}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {card.title}
            </h3>
            <p className="text-[#4A4A4A] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              {card.description}
            </p>
            <div className="flex items-center text-[#db1020] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span>Manage</span>
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

