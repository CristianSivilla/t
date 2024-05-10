import React from 'react';
import '../styles/Footer.css';
import icon_green from '../assets/icon_green.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import tiktok from '../assets/icon_green.png';
import { useTranslation } from 'react-i18next';

const Footer = ({ toggleModoNocturno, modoNocturno }) => {
  const { t } = useTranslation();

  return (
    <footer className={modoNocturno ? 'modo-nocturno' : ''}>

      <img className="img_icon" src={icon_green} alt="buscador" />
      <div className="contenedor-footer">
        <div className="contenedor-footer-izquierdo">
          <h2>{t('ayuda')}</h2>
          <p className="texto-footer">{t('contacto')}</p>
          <p className="texto-footer">{t('preguntasFrecuentes')}</p>
          <p className="texto-footer">{t('misCompras')}</p>
        </div>
        <div className="contenedor-footer-central">
          <h2>{t('politicas')}</h2>
          <p className="texto-footer">{t('condicionesGenerales')}</p>
          <p className="texto-footer">{t('politicaPrivacidad')}</p>
          <p className="texto-footer">{t('cambiosDevoluciones')}</p>
          <p className="texto-footer">{t('politicaCookies')}</p>
        </div>
        <div className="contenedor-footer-central-2">
          <h2>{t('ubicacion')}</h2>
          <p className="texto-footer">{t('contacto')}</p>
          <p className="texto-footer">{t('comoLlegar')}</p>
          <p className="texto-footer">{t('recogidaTienda')}</p>
          <p className="texto-footer">{t('entregasEnvios')}</p>
        </div>
        <div className="contenedor-footer-derecho">
          <h2>{t('redesSociales')}</h2>
          <p className="texto-footer">{t('instagram')}</p>
          <p className="texto-footer">{t('facebook')}</p>
          <p className="texto-footer">{t('twitter')}</p>
          <p className="texto-footer">{t('tiktok')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
