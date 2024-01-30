import React, { useState } from 'react';
import NavigationBar from './components/common/NavigationBar';
import WelcomePage from './components/welcome/WelcomePage';
import OffersPage from './components/offers/OffersPage';
import BookingsPage from './components/bookings/BookingsPage';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  const [view, setView] = useState('welcome');

  return (
    <ChakraProvider>
    <div>
      <NavigationBar onViewChange={setView} currentView={view}/>
      {view === 'welcome' ? <WelcomePage onViewChange={setView} /> : null}
      {view === 'offers' ? <OffersPage /> : null}
      {view === 'bookings' ? <BookingsPage /> : null}
    </div>
    </ChakraProvider>
  );
};

export default App;