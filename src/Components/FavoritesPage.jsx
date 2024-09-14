import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../Context/FavoritesContext';

const FavoritesPage = () => {
  const { state, dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    // Sincroniza el estado con localStorage cuando el componente se monte
    const savedFavorites = JSON.parse(localStorage.getItem("favs")) || [];
    dispatch({ type: 'SET_FAVORITES', payload: savedFavorites });
  }, [dispatch]);

  const removeFav = (id) => {
    const updatedFavs = state.favorites.filter(fav => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  return (
    <div>
      <h1>Usuarios Destacados</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map(user => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <Link to={`/users/${user.id}`}>
                <img
                  src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
                  alt={user.name}
                  className="profile-img"
                />
              </Link>
              <button
                onClick={() => removeFav(user.id)}
                className="removeButton"
              >
                Remove from favs
              </button>
              <Link to={`/users/${user.id}`}>
                <button className="viewDetailsButton">View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No tienes usuarios destacados.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;


