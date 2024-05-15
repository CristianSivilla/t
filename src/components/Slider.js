import React, { useState, useEffect } from 'react';
import '../styles/Slider.css';
import opalo from '../assets/opalo.jpg';
import ametista from '../assets/amatista.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Slider = ({ modoNocturno }) => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState('fade-in');

  const slides = [
    { img: opalo, title: t('opalo'), description: t('opaloDescriptions') },
    { img: ametista, title: t('ametista'), description: t('ametistaDescription') },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransition('fade-out');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setTransition('fade-in');
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [index, slides.length, setIndex, setTransition]);

  return (
    <div className={`slider-contenedor ${transition} ${modoNocturno ? 'modo-nocturno' : ''}`}>
      <img className="slider-img" src={slides[index].img} alt={slides[index].title} />
      <p id="texto-destacado">{slides[index].title}</p>
      <p className="texto-descriptivo">{slides[index].description}</p>
      <button className="boton-slider">
        <Link to={`/Tienda`}>
          {t('verEnTienda')}
        </Link>
      </button>
    </div>
  );
};

export default Slider;
