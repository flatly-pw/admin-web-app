import React, { useState, useEffect } from 'react';
import NavigationBar from './components/common/NavigationBar';
import WelcomePage from './components/welcome/WelcomePage';
import OffersPage from './components/offers/OffersPage';
import BookingsPage from './components/bookings/BookingsPage';
import LoginPage from './components/common/LoginPage';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  const [view, setView] = useState('welcome');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      fetch('https://pwflatlyreact.azurewebsites.net/auth/ok', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem('jwtToken');
            setIsLoggedIn(false);
          }
        })
        .catch((error) => {
          console.error('Error during token verification:', error.message);
          setIsLoggedIn(false);
        });
    }
  }, []);

  return (
    <ChakraProvider>
    <div>
    {isLoggedIn ? (
          <>
            <NavigationBar onViewChange={setView} currentView={view} onLogout={handleLogout} />
            {view === 'welcome' ? <WelcomePage onViewChange={setView} /> : null}
            {view === 'offers' ? <OffersPage /> : null}
            {view === 'bookings' ? <BookingsPage /> : null}
          </>
        ) : (
          <LoginPage onLogin={handleLogin} onViewChange={setView} />
        )}
    </div>
    </ChakraProvider>
  );
};

export default App;