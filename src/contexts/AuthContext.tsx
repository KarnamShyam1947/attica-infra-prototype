import React, { createContext, useContext, useEffect, useState } from 'react';
import { showAlert } from '../utils/Alerts';

export type UserRole = 'admin' | 'builder' | 'customer';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/v1/auth/current`, { credentials: 'include' });
        console.log(res);

        if (!res.ok) throw new Error();

        const user: User = await res.json();
        setUser(user);
        setIsAuthenticated(true);
      } catch {
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);


  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password })
      });

      const resp = await response.json();
      console.log(resp);

      if (!response.ok) {
        showAlert("Error", resp.error, "error");
        throw new Error('Login failed');
      }

      // Optional: fetch user info from another endpoint
      const userData = await fetch(`http://localhost:3000/api/v1/auth/current`, { credentials: 'include' });
      const user: any = await userData.json();
      console.log(user);

      if (user.error) {
        showAlert("Error", resp.error, "error");
        return;
      }
      else {
        showAlert("Success", "successfully logged in");
        setUser(user);
        setIsAuthenticated(true);
        return;
      }

    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      const resp = await response.json();
      console.log(resp);
      
      if (!response.ok) {
        showAlert("Error", resp.error, "error");
        throw new Error('Logout failed');
      }
      else {
        showAlert("Success", "Successfully logged out")
        setUser(null);
        setIsAuthenticated(false);
        return;
      }
      
    } catch (error: any) {
      showAlert("Error", "Logout error : "+ error, "error");
      console.error('Logout error:', error);
    }
  };


  const forgotPassword = async (email: string) => {
    try {
      // Mock API call - replace with real API
      console.log('Password reset email sent to:', email);
    } catch (error) {
      throw new Error('Failed to send reset email');
    }
  };

  const resetPassword = async (token: string, password: string) => {
    try {
      // Mock API call - replace with real API
      console.log('Password reset successful');
    } catch (error) {
      throw new Error('Failed to reset password');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        forgotPassword,
        resetPassword,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};