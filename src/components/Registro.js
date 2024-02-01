import React from 'react';
import '../styles/Register.css';
import CajaRegister from './CajaRegister';
import { Link } from 'react-router-dom';

const Registro = () => {
  return (
    <div className="register-screen">
    <CajaRegister/>
    </div>
  
  );
}

export default Registro;
