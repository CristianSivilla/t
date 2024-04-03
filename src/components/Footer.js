import React from 'react';
import '../styles/Footer.css';
import icon_green from '../assets/icon_green.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import tiktok from '../assets/icon_green.png';


const Footer = ({ toggleModoNocturno, modoNocturno }) => {
  return (
    <footer className={modoNocturno ? 'modo-nocturno' : ''}>

      <img className="img_icon" src={icon_green} alt="buscador" />
      <div className="contenedor-footer">
        <div className="contenedor-footer-izquierdo">
          <h2>AYUDA</h2>
          <p className="texto-footer">Contacto</p>
          <p className="texto-footer">Preguntas Frecuentes</p>
          <p className="texto-footer">Mis Compras</p>
        </div>
        <div className="contenedor-footer-central">
          <h2>POLÍTICAS</h2>
          <p className="texto-footer">Condiciones Generales</p>
          <p className="texto-footer">Política de privacidad</p>
          <p className="texto-footer">Cambios y devoluciones</p>
          <p className="texto-footer">Política de Cookies</p>
        </div>
        <div className="contenedor-footer-central-2">
          <h2>UBICACIÓN</h2>
          <p className="texto-footer">Contacto</p>
          <p className="texto-footer">Como Llegar</p>
          <p className="texto-footer">Recogida en Tienda</p>
          <p className="texto-footer">Entregas y Envíos</p>
        </div>
        <div className="contenedor-footer-derecho">
          <h2>SIGUENOS EN REDES</h2>
          <p className="texto-footer">Instagram</p>
          <p className="texto-footer">Facebook</p>
          <p className="texto-footer">Twitter</p>
          <p className="texto-footer">TikTok</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
