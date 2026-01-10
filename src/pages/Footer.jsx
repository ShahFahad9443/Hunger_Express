import {
  FaUtensils,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Define the content data for easier maintenance
const quickLinks = ["Home", "Restaurants", "Offers", "About Us", "Contact"];
const customerServiceLinks = [
  "Help Center",
  "Track Order",
  "FAQs",
  "Privacy Policy",
  "Terms of Service",
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300  py-18 px-4 sm:px-8">
      {/* Footer Top Section (Grid Layout) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 border-b border-gray-700 pb-4">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-1 md:col-span-2">
          <div className="flex items-center mb-4 mt-3">
            <FaUtensils className="text-red-600 text-3xl mr-2" />
            <h2 className="text-3xl font-bold text-white">Hunger Express</h2>
          </div>
          <p className="text-2x1 leading-relaxed mb-6 max-w-sm">
            Delivering happiness, one meal at a time. Your favorite restaurants,
            delivered fresh to your doorstep.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`Social link ${index}`}
                  className="w-9 h-9 border border-gray-500 rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 transition duration-300"
                >
                  <Icon className="text-lg" />
                </a>
              )
            )}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="mt-4">
          <h3 className="text-yellow-400 text-base font-semibold uppercase mb-4">
            Quick Links
          </h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="hover:text-red-600 transition duration-300 text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h3 className="text-yellow-400 text-base font-semibold uppercase mb-4 mt-4">
            Customer Service
          </h3>
          <ul>
            {customerServiceLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="hover:text-red-600 transition duration-300 text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Get in Touch */}
        <div>
          <h3 className="text-yellow-400 text-base font-semibold uppercase mb-4 mt-4">
            Get in Touch
          </h3>

          {[
            { Icon: FaPhoneAlt, label: "Phone", detail: "+1 (555) 123-4567" },
            {
              Icon: FaEnvelope,
              label: "Email",
              detail: "support@hungerexpress.com",
            },
            {
              Icon: FaMapMarkerAlt,
              label: "Address",
              detail: "123 Food Street, City, State 12345",
            },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <p className="flex items-center text-white text-sm font-medium mb-1">
                <item.Icon className="text-red-600 mr-2" /> {item.label}
              </p>
              <p className="text-sm ml-6">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section (Newsletter) */}
      <div className="max-w-7xl mx-auto pt-10 text-center border-b border-gray-700 pb-8 mb-4">
        <h3 className="text-yellow-400 text-xl font-semibold uppercase mb-3">
          Stay Updated
        </h3>
        <p className="text-sm mb-6">
          Subscribe to our newsletter for exclusive deals and updates
        </p>
        <div className="flex justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-l-md"
          />
          <button className="bg-red-600 text-white font-bold px-6 rounded-r-md hover:bg-red-700 transition duration-300 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-4 text-xs text-gray-300 pb-10">
        <p>&copy; 2025 Hunger Express. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 italic text-3x1">
          Made with love for food lovers{" "}
          <span className="text-red-600 font-bold text-sm">&hearts;</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
