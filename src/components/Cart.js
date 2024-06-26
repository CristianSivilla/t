import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; 
import { useHistory } from 'react-router-dom'; 
import '../styles/Cart.css';

const Cart = ({ userId, productId }) => {
  const [cartData, setCartData] = useState([]); 
  const [modalIsOpen, setModalIsOpen] = useState(true); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const history = useHistory(); 

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`https://tb-yhp0.onrender.com/api/${userId}`);
        console.log('Response:', response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          setCartData(response.data); 
          calculateTotalPrice(response.data); 
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

  const calculateTotalPrice = (cartItems) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.precio), 0);
    setTotalPrice(totalPrice.toFixed(2)); 
  };

  const eliminarProducto = async (productoId) => {
    try {
      await axios.delete(`https://tb-yhp0.onrender.com/api/carrito/${productoId}`);
      const updatedCartData = cartData.filter(item => item.productoId !== productoId);
      setCartData(updatedCartData);
      calculateTotalPrice(updatedCartData); 
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
      <div className='modal-content'>
        <h2>Carrito</h2>
        {cartData.length > 0 ? (
          <>
            <ul>
              {cartData.map((item, index) => (
                <li key={index}>
                  <div>
                    <img className='imagen-carrito' src={require(`../assets/${item.nombre}.jpg`)} alt={item.nombre} />
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button className="carrito-eliminar" onClick={() => eliminarProducto(item.productoId)}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="total-carrito">Precio Total: {totalPrice}</p> {}
          </>
        ) : (
          <p>El carrito está vacío</p>
        )}
        <button className='carrito-comprar' onClick={closeModalAndRedirect}>Pagar</button>
        <button className='modal-close-button' onClick={closeModalAndRedirect}>Cerrar</button>
      </div>
    </Modal>
  );
};

export default Cart;
