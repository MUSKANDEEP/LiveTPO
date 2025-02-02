// pages/dashboard.tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus !== 'true') {
      router.push('/login'); // Redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) {
    return null; // Optionally, show a loading state or nothing while checking login
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Your Dashboard!</h1>
        <p className="text-xl">Here, you can view and track placement opportunities and results.</p>
      </div>
    </div>
  );
}
