// src/Components/UserList.jsx
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FavoritesContext from '../Context/FavoritesContext';
import Card from "./Card";

const UserList = () => {
  const [users, setUsers] = React.useState([]);
  const { state, dispatch } = useContext(FavoritesContext);
  const [doctors, setDoctors] = useState([]);

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const handleAddFavorite = (user) => {
    dispatch({ type: 'ADD_FAVORITE', payload: user });
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div className="card-grid">
      {}
      {doctors.map((doctor) => (
        <Card key={doctor.id} name={doctor.name} username={doctor.username} id={doctor.id} />
      ))}
    </div>
    </div>
  );
};

export default UserList;
