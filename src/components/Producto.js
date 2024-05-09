import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Producto.css';

function Producto() {
  const location = useLocation();
  const { nombre, imagen, descripcion, precio } = location.state;

  return (
    <div className='caja-producto'>
      <h2 className='titulo-producto'>{nombre}</h2>
      <div className='contenedor-contenido'>
        <img className='imagen-producto' src={require(`../assets/${imagen}.jpg`)} alt={nombre} />
        <div className='contenedor-producto'>
          <p className='descripcion-producto'>{descripcion}</p>
          <h4 className='precio-producto'>{precio}</h4>
          <button className='comprar-producto'>Comprar</button>
          <button className='carrito-producto'>Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Producto;
