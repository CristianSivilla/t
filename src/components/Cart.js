import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; 
import { useHistory } from 'react-router-dom'; 
import '../styles/Cart.css';

const Cart = ({ userId }) => {
  const [cartData, setCartData] = useState([]); 
  const [modalIsOpen, setModalIsOpen] = useState(true); 
  const history = useHistory(); 

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/${userId}`);
        console.log('Response:', response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          setCartData(response.data); 
        } else {
          console.log('El carrito está vacío o no se encontró');
          setCartData([]); 
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };
    fetchCartData();
  }, [userId]);

  const handleClick = () => {
    console.log('User ID:', userId);
  };

  return (
    <div onClick={handleClick}>
      <h2>Carrito</h2>
      {cartData.length > 0 ? (
        <ul>
          {cartData.map((item, index) => (
            <li key={index}>
              <div>
                <h3>{item.nombre}</h3>
                <p>Precio: {item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
