import React from 'react';
import { useLocation } from 'react-router-dom';

function Producto() {
  const location = useLocation();
  const { nombre, imagen } = location.state;

  return (
    <div>
      <h2>Producto</h2>
      <img src={require(`../assets/${imagen}.jpg`)} alt={nombre} />
      <p>{nombre}</p>
    </div>
  );
}

export default Producto;
