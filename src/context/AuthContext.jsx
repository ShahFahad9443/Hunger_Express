/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (username, password) => {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check admin credentials
    if (username === "admin" && password === "admin") {
      const userData = {
        username: "admin",
        name: "Admin User",
        email: "admin@hungerexpress.com",
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true };
    }

    // Check registered users
    const foundUser = users.find(
      (u) => (u.username === username || u.email === username) && u.password === password
    );

    if (foundUser) {
      const userData = {
        username: foundUser.username,
        name: foundUser.name,
        email: foundUser.email,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true };
    }

    return { success: false, error: "Invalid username or password" };
  };

  const signup = (name, email, username, password) => {
    // Get existing users
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if username already exists
    if (users.some((u) => u.username === username)) {
      return { success: false, error: "Username already exists" };
    }

    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      return { success: false, error: "Email already registered" };
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      username,
      password, // In production, this should be hashed
      createdAt: new Date().toISOString(),
    };

    // Save user
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Auto-login after signup
    const userData = {
      username: newUser.username,
      name: newUser.name,
      email: newUser.email,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

