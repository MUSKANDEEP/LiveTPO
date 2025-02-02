// pages/login.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate login process (replace with real API call or logic)
    if (email === 'student@example.com' && password === 'password123') {
      // Store login status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard'); // Redirect to dashboard after login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl mb-6 text-center text-gray-700">Student Login</h2>

        {/* Show error if any */}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-full w-full text-lg hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
