import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; 
import { useHistory, useLocation } from 'react-router-dom';
import '../styles/Producto.css';

function Producto({ userId }) {
  const { t } = useTranslation(); 
  const location = useLocation();
  const { nombre, imagen, descripcion, precio, producto_id } = location.state;
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const history = useHistory();

  const [productoId, setProductoId] = useState(producto_id);

  const handleCarritoClick = async (productoId) => {
    try {
      const response = await axios.post('https://tb-yhp0.onrender.com/api/agregar', {
        usuarioId: userId,
        productoId: productoId, 
        cantidad: cantidad
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
          <div className="contador">
            <button onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}>-</button>
            <span>{cantidad}</span>
            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>
          <button className='carrito-producto' onClick={() => handleCarritoClick(productoId)}>{t('addToCart')}</button>
          {agregadoAlCarrito && <p className="mensaje-carrito">{t('productAddedToCart')}</p>}
          <button className='carrito-producto'>{t('pay')}</button>
        </div>
      </div>
    </div>
  );
}

export default Producto;
