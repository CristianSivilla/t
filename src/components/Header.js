import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/icon_white.png';
import lupa from '../assets/lupa.png';
import carrito from '../assets/carrito.png';
import persona from '../assets/persona.png';
import luna from '../assets/luna.png';
import idioma from '../assets/idioma_ca.png';

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/"><img className="logo" src={logo} alt="icono" /></Link></li>
        <li><Link to="/Tienda">Tienda</Link></li>
        <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
        <li><Link to="/buscador"><img className="img" src={lupa} alt="buscador" /></Link></li>
        <li><Link to="/carrito"><img className="img" src={carrito} alt="carrito" /></Link></li>
        <li><Link to="/Login"><img className="img" src={persona} alt="usuario" /></Link></li>
        <li><Link to="/usuario"><img className="img" src={luna} alt="usuario" /></Link></li>
        <li><Link to="/idioma"><img className="img" src={idioma} alt="idioma" /></Link></li>
      </ul>
    </header>
  );
}

export default Header;
