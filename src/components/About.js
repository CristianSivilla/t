import React from 'react';
import '../styles/About.css';
import carrerpi from '../assets/carrerpi.jpg';
import about from '../assets/about.jpg';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-contenedor">
      <div className="about-text">
        <h2 className="about-text">{t('quienesSomos')}</h2>
      </div>
      <img className="about-img" src={about} alt="about" />
      <img className="carrerpi-img" src={carrerpi} alt="carrerpi" />
      <p className="texto-about">{t('texto1')}</p>
      <p className="texto-about2">{t('texto2')}</p>
    </div>
  );
};

export default About;
