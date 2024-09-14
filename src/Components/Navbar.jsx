import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      <button onClick={toggleTheme}>
        Cambiar tema ({theme === 'light' ? 'Oscuro' : 'Claro'})
      </button>
    </nav>
  );
};

export default Navbar;
