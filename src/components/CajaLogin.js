import React, { useState, useRef, useEffect } from 'react'; // Agrega useEffect aquí
import { useHistory } from 'react-router-dom'; 
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/CajaLogin.css';
import google from '../assets/google.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 

const CajaLogin = ({ setUsuarioId }) => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false); 
  const history = useHistory(); 
  const recaptchaRef = useRef(); 

  const handleRecaptchaVerify = (token) => {
    console.log("reCAPTCHA token:", token);
    setRecaptchaCompleted(true); 
  };

  const handleRecaptchaError = () => {
    console.error("Error en reCAPTCHA");
    setRecaptchaCompleted(false); 
  };

  const handleLogin = async () => {
    if (!recaptchaCompleted) {
      alert("Completa el reCAPTCHA para iniciar sesión.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        correo,
        contrasena: contraseña
      });

      setMensaje(response.data.mensaje);

      if (response.data.mensaje === 'Inicio de sesión exitoso') {
        const token = response.data.token;
        const usuarioId = jwtDecode(token).usuarioId; 
        setUsuarioId(usuarioId); 
        localStorage.setItem('userId', usuarioId); // Almacenar userId en el almacenamiento local
        alert(`¡Bienvenido! Tu ID de usuario es ${usuarioId}`); 
        history.push('/Cart', { userId: usuarioId }); // Redirigir al usuario a la página del carrito con el userId
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMensaje('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  // Comprueba si hay un userId almacenado en el almacenamiento local al cargar el componente
  useEffect(() => {
    const userIdFromStorage = localStorage.getItem('userId');
    if (userIdFromStorage) {
      setUsuarioId(userIdFromStorage);
      history.push('/Cart', { userId: userIdFromStorage });
    }
  }, []);

  return (
    <div className="login-contenedor">
      <div className="login-text">
        <h2 className="login-text">Iniciar Sesión</h2>
      </div>
      <input className="input" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ingresa tu correo" />
      <input className="input" type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Ingresa tu contraseña" />

      <div className="recaptcha-container">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LfFhGMpAAAAABE9EJ4atUILMcdtdOuSURzsqmd0"
          onChange={handleRecaptchaVerify}
          onErrored={handleRecaptchaError}
        />
      </div>
      <div className="contenedor-login-inferior">
        <button className="login-button" onClick={handleLogin} disabled={!recaptchaCompleted}>Iniciar Sesión</button>
        <img className="google-img" src={google} alt="google" />
      </div>

      <div className="registrarse-texto">No tienes cuenta? <Link to="/Registro">Regístrate</Link></div>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default CajaLogin;
