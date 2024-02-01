import React from 'react';
import '../styles/CajaRegister.css'

const CajaRegister = () => {

  return (
    <div className="login-contenedor">
      <div className="login-text">
        <h2 className="login-text">Registro</h2>
      </div>
      <input className="input" type="text" id="nombre" name="nombre" placeholder="Ingresa tu Nombre" />
      <input className="input" type="text" id="apellido" name="apellido" placeholder="Ingresa tu Apellido" />
      <input className="input" type="text" id="correo" name="correo" placeholder="Ingresa tu correo" />
      <input className="input" type="password" id="contraseña" name="contraseña" placeholder="Ingresa tu contraseña" />
      <input className="input" type="password" id="repetir" name="contraseña" placeholder="Confirma la contraseña" />

    
      <div className="contenedor-login-inferior">
      <button className="login-button">Registrarse</button>
      </div>


    </div>
  );
}

export default CajaRegister;
