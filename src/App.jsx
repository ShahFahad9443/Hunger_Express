import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home"
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contect from "./pages/Contect";


// Get basename for GitHub Pages deployment
const basename = import.meta.env.PROD ? "/Hunger_Express" : "";

function App() {
  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element= {<About />} />
    <Route path="/contect" element= {<Contect/>}/>
      </Routes>
       <Footer/>
    </Router>
  );
}
export default App;
