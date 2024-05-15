import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CajaRegister.css';
import axios from 'axios';

const CajaRegistro = () => {
  const { t } = useTranslation();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(null); // Estado para controlar errores

  const handleRegistro = async () => {
    if (!correoIsValid(correo)) {
      setError('El formato del correo electrónico no es válido.');
      return;
    }

    if (contraseña !== confirmarContraseña) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/registro', {
        nombre,
        apellido,
        correo,
        contrasena: contraseña
      });

      setMensaje(response.data.mensaje);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError('Error al registrar usuario. Por favor, inténtalo de nuevo más tarde.'); // Configurar el error obtenido del servidor
    }
  };

  const correoIsValid = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="register-contenedor">
      <div className="login-text">
        <h2 className="login-text">{t('registro')}</h2>
      </div>
      <input className="input" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder={t('ingresaNombre')} />
      <input className="input" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder={t('ingresaApellido')} />
      <input className="input" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder={t('ingresaCorreo')} />
      <input className="input" type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder={t('ingresaContraseña')} />
      <input className="input" type="password" value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)} placeholder={t('confirmaContraseña')} />

      <div className="contenedor-login-inferior">
        <button className="register-button" onClick={handleRegistro}>{t('registrar')}</button>
      </div>

      {error && <p>{error}</p>} {}
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default CajaRegistro;
