import { Link } from "react-router-dom";
import {
  FaUtensils,
} from "react-icons/fa";

const Navbar = () => {

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaUtensils className="text-red-600 text-3xl mr-2" />
              <span className="text-2xl font-bold text-red-600">
                Hunger Express
              </span>
            </div>

            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <Link
                  to="/"
                  className=" hover:text-red-500 transition duration-300 hover:border-b-2 border-red-600"
                >
                  Home
                </Link>

                <Link
                  to="#"
                  className=" hover:text-red-500 transition duration-300 hover:border-b-2 border-red-600"
                >
                  Restaurant
                </Link>

                <li>
                  <a
                    href="#"
                    className="  hover:text-red-500 transition duration-300 hover:border-b-2 border-red-600"
                  >
                    Offers
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className=" hover:text-red-500 transition duration-300 hover:border-b-2 border-red-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contect"
                    className="t hover:text-red-500 transition duration-300 hover:border-b-2 border-red-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              
              <Link
                to="/login"
                className="flex items-center px-4 py-2 border border-red-800 text-black-600 rounded-xl hover:bg-red-600 hover:text-white"
              >
                <i className=""></i> Login
              </Link>

              <Link
                to="/signup"
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-500"
              >
                <i className="fas fa-user-plus mr-2"></i> Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
