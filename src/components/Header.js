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
        <li><img className="img" src={lupa} alt="buscador" /></li>
        <li><img className="img" src={carrito} alt="carrito" /></li>
        <li><Link to="/Login"><img className="img" src={persona} alt="usuario" /></Link></li>
        <li><img className="img" src={luna} alt="usuario" /></li>
        <li><img className="img" src={idioma} alt="idioma" /></li>
      </ul>
    </header>
  );
}

export default Header;
