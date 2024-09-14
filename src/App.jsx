import React, { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
