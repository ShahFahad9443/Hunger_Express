import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom"; // <--- 1. Import Link from React Router

// NOTE: We are removing the state (showLogin, setShowLogin) and the modal JSX
// because we are now using the <Link> component to navigate to the full Login page.

const Navbar = () => {
  // const [showLogin, setShowLogin] = useState(false); // REMOVED
  const [showSignup, setShowSignup] = useState(false); // Keeping signup as a modal for now

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
            
              <i className="fas fa-panda text-pink-600 text-3xl"></i>
              <span className="text-2xl font-bold text-pink-600">
                Hunger Express
              </span>
            </div>

            {/* Navigation Links (Updated to use <Link> for Home) */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  {/* Using Link instead of <a> with href="#" */}
                  <Link
                    to="/"
                    className="text-pink-600 font-semibold hover:text-pink-700 transition duration-300 border-b-2 border-pink-600 pb-1"
                  >
                    Home
                  </Link>
                </li>
                {/* ... other links (you may want to change these to <Link> too) ... */}
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-pink-600 transition"
                  >
                    Restaurants
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-pink-600 transition"
                  >
                    Offers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-pink-600 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-pink-600 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
             
              <Link 
                to="/login"  
                className="flex items-center px-4 py-2 border border-pink-600 text-pink-600 rounded-xl hover:bg-pink-50 transition"
              >
                <i className="fas fa-sign-in-alt mr-2"></i> Login
              </Link>

              <Link
                to= "/signup"
                className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition shadow"
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

































// import React from "react";
// import { Link } from "react-router-dom"; // Ensure Link is imported

// const Navbar = () => {
//   // Removed showLogin and showSignup state variables

//   return (
//     <>
//       {/* NAVBAR */}
//       <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             {/* Logo */}
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <i className="fas fa-panda text-pink-600 text-3xl"></i>
//               <span className="text-2xl font-bold text-pink-600">
//                 Hunger Express
//               </span>
//             </div>

//             {/* Navigation Links (Using <Link> for Home) */}
//             <nav className="hidden md:block">
//               <ul className="flex items-center space-x-8">
//                 <li>
//                   <Link
//                     to="/" // Link to the Home page
//                     className="text-pink-600 font-semibold hover:text-pink-700 transition duration-300 border-b-2 border-pink-600 pb-1"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 {/* ... other navigation items (use <Link> for other pages too) ... */}
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-700 hover:text-pink-600 transition"
//                   >
//                     Restaurants
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-700 hover:text-pink-600 transition"
//                   >
//                     Offers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-700 hover:text-pink-600 transition"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-700 hover:text-pink-600 transition"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </nav>

//             <div className="flex items-center space-x-4">
//               {/* LOGIN LINK */}
//               <Link
//                 to="/login"
//                 className="flex items-center px-4 py-2 border border-pink-600 text-pink-600 rounded-xl hover:bg-pink-50 transition"
//               >
//                 <i className="fas fa-sign-in-alt mr-2"></i> Login
//               </Link>

//               {/* SIGN UP LINK (New) */}
//               <Link // <--- Changed button to Link
//                 to="/signup" // <--- Set the destination route
//                 className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition shadow"
//               >
//                 <i className="fas fa-user-plus mr-2"></i> Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* REMOVED: Login and Signup Modal JSX */}
//     </>
//   );
// };

// export default Navbar;
