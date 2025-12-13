import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import RestaurantDetails from "./pages/RestaurantDetails";
import SearchResults from "./pages/SearchResults";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

// Get basename for GitHub Pages deployment
const basename = import.meta.env.PROD ? "/Hunger_Express" : "";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router basename={basename}>
          <Navbar />

        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </Router>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
