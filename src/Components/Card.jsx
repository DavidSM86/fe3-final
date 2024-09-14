import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFav = { id, name, username };
    if (!favs.find(fav => fav.id === id)) {
      localStorage.setItem("favs", JSON.stringify([...favs, newFav]));
      alert(`${name} añadido a favoritos`);
    } else {
      alert(`${name} ya está en favoritos`);
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/users/${id}`}>
        <img
          src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
          alt={`${name}`}
          className="profile-img"
        />
      </Link>
      <button onClick={addFav} className="favButton">Add to favs</button>
    </div>
  );
};

export default Card;

