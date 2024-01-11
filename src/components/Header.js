import React from 'react';
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
        <li><a href="#Inicio"><img className="logo" src={logo} alt="icono" /></a></li>
        <li><a href="#Tienda">Tienda</a></li>
        <li><a href="#SobreNosotros">Sobre Nosotros</a></li>
        <li><a href="#Contacto">Contacto</a></li>
        <li><a href="#buscador"><img className="img" src={lupa} alt="buscador" /></a></li>
        <li><a href="#carrito"><img className="img" src={carrito} alt="carrito" /></a></li>
        <li><a href="#usuario"><img className="img" src={persona} alt="usuario" /></a></li>
        <li><a href="#usuario"><img className="img" src={luna} alt="usuario" /></a></li>
        <li><a href="#idioma"><img className="img" src={idioma} alt="idioma" /></a></li>
      </ul>
    </header>
  );
}

export default Header;
