import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const userId = 3; 
        const response = await axios.get(`http://localhost:3001/api/${userId}`); 
        setCartItems(response.data);
      } catch (error) {
        console.error('Error al obtener los elementos del carrito:', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <h3>{item.nombre}</h3> {/* Ajusta según la estructura de datos de tu carrito */}
              <p>Precio: {item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
