import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const result = login(formData.username, formData.password);
      setIsSubmitting(false);

      if (result.success) {
        navigate("/");
      } else {
        setError(result.error || "Invalid credentials");
      }
    }, 500);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 mt-20">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <span className="material-symbols-outlined text-pink-600 text-5xl mb-4">account_circle</span>
          <h2 className="text-3xl font-bold text-pink-600 mb-2">Login</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">error</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-blue-700">
              <span className="font-semibold">Demo Credentials:</span> Username: <strong>admin</strong>, Password: <strong>admin</strong>
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined animate-spin">sync</span>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>

          <button
            type="button"
            onClick={handleClose}
            className="w-full border border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-pink-600 hover:text-pink-700 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
