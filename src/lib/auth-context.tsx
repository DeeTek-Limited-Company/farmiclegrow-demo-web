'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Map our backend AppRole to the UI's UserRole
export type UserRole = 'admin' | 'agronomist' | 'farmer' | 'ops';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole; // UI expects a single role currently
  roles?: UserRole[]; // Real backend provides multiple
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // We can fetch from a '/api/auth/me' endpoint later, but for now we rely on the
  // login return value. If user reloads, they might need to login again in UI state
  // (unless we hydrate from server, which is best done outside this context).
  useEffect(() => {
    // Attempt to hydrate from localStorage for UI persistence (token is in cookie)
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('farmicle_user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          localStorage.removeItem('farmicle_user');
        }
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      const backendUser = data.user;
      const newUser: User = {
        id: backendUser.id,
        email: backendUser.email,
        name: backendUser.name,
        role: backendUser.roles[0] as UserRole, // Take first role for UI compatibility
        roles: backendUser.roles,
      };

      setUser(newUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('farmicle_user', JSON.stringify(newUser));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('farmicle_user');
    }
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
