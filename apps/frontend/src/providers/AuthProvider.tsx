import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthCredentials, AuthResponse, UserProfile } from 'shared/api/auth';

interface AuthContextType {
  user: UserProfile | null;
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => void;
  register: (credentials: AuthCredentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Check for existing user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials: AuthCredentials) => {
    // Implement login logic here
    const response: AuthResponse = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());

    setUser(response.user);
    localStorage.setItem('user', JSON.stringify(response.user));
  };

  const logout = () => {
    // Implement logout logic here
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (credentials: AuthCredentials) => {
    // Implement register logic here
    const response: AuthResponse = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());

    setUser(response.user);
    localStorage.setItem('user', JSON.stringify(response.user));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
