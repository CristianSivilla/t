import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/Producto.css';

function Producto({ userId }) {
  const location = useLocation();
  const { nombre, imagen, descripcion, precio, producto_id } = location.state;
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad
  const history = useHistory();

  const [productoId, setProductoId] = useState(producto_id);

  const handleCarritoClick = async (productoId) => {
    try {
      const response = await axios.post('http://localhost:3001/api/agregar', {
        usuarioId: userId,
        productoId: productoId, 
        cantidad: cantidad // Utilizar la cantidad seleccionada
      });
      console.log(response.data);
      setAgregadoAlCarrito(true);
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
          {}
          <div className="contador">
            <button onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}>-</button>
            <span>{cantidad}</span>
            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>
          <button className='carrito-producto' onClick={() => handleCarritoClick(productoId)}>Añadir al Carrito</button>
          {agregadoAlCarrito && <p className="mensaje-carrito">Producto añadido correctamente al carrito</p>}
          <button className='carrito-producto'>Pagar</button>
        </div>
      </div>
    </div>
  );
}

export default Producto;
