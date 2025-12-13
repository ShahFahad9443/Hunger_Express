
import { useNavigate } from "react-router-dom";
const Signup = () => {
     const navigate = useNavigate();
      const handleClose = () => {
        
       navigate("/");     
      };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="w-96 bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Create Account
        </h2>

        <input
          type="Text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
        />

        <button className="w-full bg-pink-600 text-white py-3 rounded-lg mb-3 hover:bg-pink-700">
          Sign In
        </button>

        <button onClick={handleClose} className="w-full border py-3 rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default Signup;
