import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import '../styles/Header.css';
import logo from '../assets/icon_white.png';
import lupa from '../assets/lupa.png';
import carrito from '../assets/carrito.png';
import persona from '../assets/persona.png';
import luna from '../assets/luna.png';
import idioma from '../assets/idioma_ca.png';

const Header = ({ toggleModoNocturno, modoNocturno }) => {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = () => {
    const nuevoIdioma = i18n.language === 'es' ? 'ca' : 'es';
    i18n.changeLanguage(nuevoIdioma); // asegúrate de que i18n esté disponible
  };

  return (
    <header className={modoNocturno ? 'modo-nocturno' : ''}>
      <ul>
        <li><NavLink to="/"><img className="logo" src={logo} alt="icono" /></NavLink></li>
        <div className="texto-header"><li><NavLink to="/Tienda">{t('tienda')}</NavLink></li></div>
        <li className={modoNocturno ? 'modo-nocturno-texto' : ''}>
          <NavLink to="/SobreNosotros">{t('sobreNosotros')}</NavLink>
        </li>
        <li><NavLink to="/Contacto">{t('contacto')}</NavLink></li>
        <li><img className="img" src={lupa} alt="buscador" /></li>
        <NavLink to="/Cart">
          <li><img className="img" src={carrito} alt="carrito" /></li>
        </NavLink>
        <li><NavLink to="/Login"><img className="img" src={persona} alt="usuario" /></NavLink></li>
        <li onClick={toggleModoNocturno} style={{ cursor: 'pointer' }}>
          <img className="img" src={luna} alt="modo nocturno" />
        </li>
        <li className={modoNocturno ? 'modo-nocturno-texto' : ''}>
          <img className="img" src={idioma} alt="idioma" onClick={cambiarIdioma} style={{ cursor: 'pointer' }} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
