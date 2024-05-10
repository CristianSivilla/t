import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; 
import { useHistory } from 'react-router-dom'; 
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(true); 
  const history = useHistory(); 

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

  const eliminarProducto = async (productoId) => {
    try {
      await axios.delete(`http://localhost:3001/api/carrito/${productoId}`);
      const updatedCartItems = cartItems.filter(item => item.productoId !== productoId); // Corregir la comparación aquí
      setCartItems(updatedCartItems);
      alert('Producto eliminado correctamente del carrito');
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  const closeModalAndRedirect = () => {
    setModalIsOpen(false);
    history.push('/'); 
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModalAndRedirect}
      ariaHideApp={false} 
    >
      <h2>Carrito</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div className='caja-carrito'>
              <img className='imagen-carrito' src={require(`../assets/${item.nombre}.jpg`)} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>Precio: {item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <button className='carrito-button' onClick={() => eliminarProducto(item.productoId)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <button className='boton-carritomodal' onClick={closeModalAndRedirect}>Cerrar</button>
    </Modal>
  );
};

export default Cart;
