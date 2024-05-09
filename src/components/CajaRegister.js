import React, { useState } from 'react';
import '../styles/CajaRegister.css';
import axios from 'axios';

const CajaRegister = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRegistro = async () => {
    if (contraseña !== confirmarContraseña) {
      setMensaje('Las contraseñas no coinciden');
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
      setMensaje('Error al registrar usuario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="register-contenedor">
      <div className="login-text">
        <h2 className="login-text">Registro</h2>
      </div>
      <input className="input" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa tu Nombre" />
      <input className="input" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Ingresa tu Apellido" />
      <input className="input" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ingresa tu correo" />
      <input className="input" type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Ingresa tu contraseña" />
      <input className="input" type="password" value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)} placeholder="Confirma la contraseña" />

      <div className="contenedor-login-inferior">
        <button className="register-button" onClick={handleRegistro}>Registrarse</button>
      </div>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default CajaRegister;
