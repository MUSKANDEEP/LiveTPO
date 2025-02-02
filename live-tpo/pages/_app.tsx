// pages/_app.tsx

import { useEffect, useState } from 'react';
import '../styles/globals.css';  // Import global styles (Tailwind CSS)
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus !== 'true' && router.pathname !== '/login') {
      router.push('/login');  // Redirect to login page if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
