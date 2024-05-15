import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import google from '../assets/google.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../styles/CajaLogin.css';

const CajaLogin = ({ setUsuarioId }) => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const [insulto, setInsulto] = useState('');
  const history = useHistory();
  const recaptchaRef = useRef();

  const obtenerInsulto = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setInsulto(response.data.value);
      alert(`${response.data.value}`);
    } catch (error) {
      console.error('Error al obtener insulto:', error);
    }
  };

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
        localStorage.setItem('userId', usuarioId);
        obtenerInsulto(); 
        history.push('/Cart', { userId: usuarioId });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMensaje('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem('userId');
    if (userIdFromStorage) {
      setUsuarioId(userIdFromStorage);
      history.push('/Cart', { userId: userIdFromStorage });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    history.push('/Login');
  };

  return (
    <div className="caja-login-wrapper">
      <div className="login-contenedor">
        <h2 className="login-text">Iniciar Sesión</h2>
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
        {insulto && <p>{insulto}</p>}
      </div>
    </div>
  );
}

export default CajaLogin;
