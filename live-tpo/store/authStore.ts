import {create} from 'zustand';

interface AuthState {
  email: string;
  password: string;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  token: null,
  isLoading: false,
  error: null,
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        set({ token: data.token, error: null });
        // You can store the token in localStorage or a cookie for persistence
        localStorage.setItem('token', data.token);
      } else {
        set({ error: 'Invalid credentials, please try again.' });
      }
    } catch (error) {
      set({ error: 'An error occurred. Please try again later.' });
    } finally {
      set({ isLoading: false });
    }
  },
  logout: () => {
    set({ token: null });
    localStorage.removeItem('token');
  },
}));
