import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';
import logo from '../assets/icon_white.png';
import lupa from '../assets/lupa.png';
import carrito from '../assets/carrito.png';
import persona from '../assets/persona.png';
import luna from '../assets/luna.png';
import idiomacat from '../assets/idioma_ca.png';
import idiomaes from '../assets/idioma_es.png';

const Header = ({ toggleModoNocturno, modoNocturno }) => {
  const { t, i18n } = useTranslation();
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const history = useHistory(); 

  const cambiarIdioma = () => {
    const nuevoIdioma = i18n.language === 'es' ? 'ca' : 'es';
    i18n.changeLanguage(nuevoIdioma);
  };

  const idiomaImg = i18n.language === 'es' ? idiomaes : idiomacat;

  const handleLogout = () => {
    localStorage.removeItem('userId'); 
    history.push('/login');
    alert('Cerrar sesión');
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
        <li>
          <img
            className="img"
            src={lupa}
            alt="buscador"
            onClick={() => setMostrarBuscador(!mostrarBuscador)}
          />
          {mostrarBuscador && (
            <input
              type="text"
              className="campo-busqueda"
              placeholder={t('buscar')}
            />
          )}
        </li>
        <NavLink to="/Cart">
          <li><img className="img" src={carrito} alt="carrito" /></li>
        </NavLink>
        <li><NavLink to="/Login"><img className="img" src={persona} alt="usuario" /></NavLink></li>
        <li onClick={toggleModoNocturno} style={{ cursor: 'pointer' }}>
          <img className="img" src={luna} alt="modo nocturno" />
        </li>
        <li className={modoNocturno ? 'modo-nocturno-texto' : ''}>
          <img
            className="img img-idioma"
            src={idiomaImg}
            alt="idioma"
            onClick={cambiarIdioma}
            style={{ cursor: 'pointer' }}
          />
        </li>
        <li onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <span>Cerrar sesión</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
