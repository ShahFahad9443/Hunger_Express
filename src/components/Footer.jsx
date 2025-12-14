import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1F1F1F] to-[#0a0a0a] text-white mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <span className="material-symbols-outlined text-[#db1020] text-4xl transform group-hover:scale-110 transition-transform duration-300">restaurant</span>
              <span className="text-2xl font-bold text-white group-hover:text-[#ffd700] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Hunger Express
              </span>
            </Link>
            <p className="text-white/70 mb-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Delivering happiness, one meal at a time. Your favorite restaurants, 
              delivered fresh to your doorstep.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#db1020] transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
                title="Facebook"
              >
                <span className="material-symbols-outlined text-sm group-hover:text-white">group</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffd700] hover:text-[#1F1F1F] transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
                title="Twitter"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#27742d] transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
                title="Instagram"
              >
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#db1020] transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
                title="LinkedIn"
              >
                <span className="material-symbols-outlined text-sm">work</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffd700]" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/restaurants" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>Restaurants</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/offers" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>Offers</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffd700]" style={{ fontFamily: 'Poppins, sans-serif' }}>Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/help-center" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/track-order" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>Track Order</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/faqs" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-white/70 hover:text-[#ffd700] transition-colors duration-300 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffd700]" style={{ fontFamily: 'Poppins, sans-serif' }}>Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-[#db1020] text-xl transform group-hover:scale-110 transition-transform duration-300">call</span>
                <div>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Phone</p>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-[#ffd700] text-xl transform group-hover:scale-110 transition-transform duration-300">mail</span>
                <div>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>support@hungerexpress.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-[#27742d] text-xl transform group-hover:scale-110 transition-transform duration-300">location_on</span>
                <div>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Address</p>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>123 Food Street, City, State 12345</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold mb-2 text-[#ffd700]" style={{ fontFamily: 'Poppins, sans-serif' }}>Stay Updated</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Subscribe to our newsletter for exclusive deals and updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-[16px] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffd700] min-h-[44px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button
                className="bg-[#db1020] text-white px-6 py-3 rounded-[16px] font-semibold hover:bg-[#c00e1d] transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105 min-h-[44px] transform"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
              © {currentYear} Hunger Express. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="material-symbols-outlined text-sm">favorite</span>
              <span>Made with love for food lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

