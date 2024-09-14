import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './Context/ThemeContext';
import { FavoritesProvider } from './Context/FavoritesContext';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';
import Contact from './Components/Contact';
import FavoritesPage from './Components/FavoritesPage';
import './index.css';

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<UserList />} />
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="favs" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
