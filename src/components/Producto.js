import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Producto.css';
import axios from 'axios';

function Producto() {
  const location = useLocation();
  const { nombre, imagen, descripcion, precio } = location.state;
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(2);
  }, []);

  const handleCarritoClick = async () => {
    const productId = 1; 
    const usuarioId = 3; 

    try {
      const response = await axios.post('http://localhost:3001/api/agregar', {
        usuarioId: usuarioId,  
        productoId: productId,
        cantidad: 2
      });

      console.log(response.data); 
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error);
    }
  };

  return (
    <div className='caja-producto'>
      <h2 className='titulo-producto'>{nombre}</h2>
      <div className='contenedor-contenido'>
        <img className='imagen-producto' src={require(`../assets/${imagen}.jpg`)} alt={nombre} />
        <div className='contenedor-producto'>
          <p className='descripcion-producto'>{descripcion}</p>
          <h4 className='precio-producto'>{precio}</h4>
          <button className='carrito-producto' onClick={handleCarritoClick}>Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Producto;
