/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import authService from "../services/authService.js";

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

  // Load user from localStorage on mount and verify with API
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = authService.getCurrentUser();
      if (storedUser && authService.isAuthenticated()) {
        try {
          // Verify token is still valid
          const response = await authService.getMe();
          if (response.success) {
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            // Token invalid, clear storage
            authService.logout();
          }
        } catch (error) {
          // Token invalid or expired
          authService.logout();
        }
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  const login = async (identifier, password) => {
    try {
      // Try as username first, then as email
      let response;
      try {
        response = await authService.login(identifier, password);
      } catch (err) {
        // If it fails, try as email
        if (identifier.includes('@')) {
          response = await authService.login(identifier, password);
        } else {
          // Try with username field
          response = await authService.login(null, password, identifier);
        }
      }
      
      if (response.success) {
        setUser(response.data.user);
        return { success: true };
      }
      return { success: false, error: response.error || "Login failed" };
    } catch (error) {
      return { success: false, error: error.message || "Login failed" };
    }
  };

  const signup = async (full_name, email, username, password) => {
    try {
      const response = await authService.register({
        full_name,
        email,
        username,
        password
      });
      if (response.success) {
        setUser(response.data.user);
        return { success: true };
      }
      return { success: false, error: response.error || "Registration failed" };
    } catch (error) {
      return { success: false, error: error.message || "Registration failed" };
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
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

