import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/CajaLogin.css';
import google from '../assets/google.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CajaLogin = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false); // Estado para controlar el estado del reCAPTCHA
  const history = useHistory(); // Inicializa useHistory
  const recaptchaRef = useRef(); // Referencia al componente ReCAPTCHA

  const handleRecaptchaVerify = (token) => {
    console.log("reCAPTCHA token:", token);
    setRecaptchaCompleted(true); // Marca el reCAPTCHA como completado cuando se verifica
  };

  const handleRecaptchaError = () => {
    console.error("Error en reCAPTCHA");
    setRecaptchaCompleted(false); // Marca el reCAPTCHA como no completado en caso de error
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

      // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio
      if (response.data.mensaje === 'Inicio de sesión exitoso') {
        alert('¡Bienvenido!');
        history.push('/'); // Redirige al usuario a la página de inicio
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMensaje('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

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
