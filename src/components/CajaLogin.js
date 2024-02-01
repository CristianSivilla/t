import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/CajaLogin.css';
import google from '../assets/google.png';
import { Link } from 'react-router-dom';


const CajaLogin = () => {
  const handleRecaptchaVerify = (token) => {
    console.log("reCAPTCHA token:", token);
  };

  const handleRecaptchaError = () => {
    console.error("Error en reCAPTCHA");
  };

  return (
    <div className="login-contenedor">
      <div className="login-text">
        <h2 className="login-text">Iniciar Sesión</h2>
      </div>
      <input className="input" type="text" id="correo" name="correo" placeholder="Ingresa tu correo" />
      <input className="input" type="password" id="contraseña" name="contraseña" placeholder="Ingresa tu contraseña" />

      <div className="recaptcha-container">
        <ReCAPTCHA
          sitekey="6LfFhGMpAAAAABE9EJ4atUILMcdtdOuSURzsqmd0"
          onChange={handleRecaptchaVerify}
          onErrored={handleRecaptchaError}
        />
      </div>
      <div className="contenedor-login-inferior">
        <button className="login-button">Iniciar Sesión</button>
        <img className="google-img" src={google} alt="google" />
      </div>

      <Link to={`/Tienda`}>
        No tienes cuenta? <Link to="/Registro">Regístrate</Link>
      </Link>
    </div>
  );
}

export default CajaLogin;
