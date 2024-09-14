// src/Context/FavoritesContext.jsx

import React, { createContext, useReducer } from 'react';

const FavoritesContext = createContext();

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favs")) || []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(user => user.id !== action.payload) };
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;


