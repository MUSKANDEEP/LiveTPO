// pages/index.tsx
import { Button, TextField, Snackbar, CircularProgress } from '@mui/material';
import { useState } from 'react';
import '../styles/globals.css';
import { useAuthStore } from '../store/authStore';

const HomePage = () => {
  // Using Zustand store for API state
  const { login, isLoading, error, token } = useAuthStore((state : any) => ({
    login: state.login,
    isLoading: state.isLoading,
    error: state.error,
    token: state.token,
  }));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !password) {
//       alert('Please fill in both email and password.');
//       return;
//     }

//     await login(email, password);
//   };
const handleLogin = async () => {
    const email = 'test@example.com';  // You can get this from your form inputs
    const password = 'password'; // Similarly get this from your form inputs
    await login(email, password);
  };

  if (token) {
    // Redirect to dashboard if logged in (you could also use Next.js's `useRouter` here)
    window.location.href = '/dashboard';
  }

  return (
    <div className="relative h-screen w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Layout - Split into Left and Right */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 h-full">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center text-white text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
            LIVE TPO
          </h1>
          <p className="text-xl sm:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            The ultimate platform for students to track placements, register for companies, and more.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white mx-8 h-full"></div>

        {/* Right Section - Login Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl mb-6 text-center text-gray-700">Student Login</h2>

          {/* Email Input */}
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            margin="normal"
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            className="mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Button */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className="mt-4 py-3 text-lg rounded-full"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Login'}
          </Button>

          {/* Display Error Message */}
          {error && (
            <Snackbar
              open={!!error}
              autoHideDuration={6000}
              onClose={() => {}}
              message={error}
            />
          )}

          <div className="text-center mt-4">
            {/* <Link href="/forgot-password">
              <a className="text-blue-500 text-sm">Forgot Password?</a>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
