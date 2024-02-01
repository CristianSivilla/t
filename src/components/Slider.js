import React, { useState, useEffect } from 'react';
import '../styles/Slider.css';
import opalo from '../assets/opalo.jpg';
import ametista from '../assets/amatista.jpg';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState('fade-in');

  const slides = [
    { img: opalo, title: 'Opalo', description: 'Es una gema preciosa conocida por su juego de colores iridiscentes. Este fenómeno se llama juego de colores, y es resultado de la interferencia de la luz en las microestructuras del ópalo. Puede mostrar una amplia gama de colores, desde el rojo y naranja hasta el verde y azul.' },
    { img: ametista, title: 'Ametista', description: 'La amatista es una variedad del cuarzo conocida por su color púrpura. Se cree que tiene propiedades protectoras y puede promover la calma y la claridad mental.' },
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
  }, [index, slides.length]);

  return (
    <div className={`slider-contenedor ${transition}`}>
      <img className="slider-img" src={slides[index].img} alt={slides[index].title} />
      <p id="texto-destacado">{slides[index].title}</p>
      <p className="texto-descriptivo">{slides[index].description}</p>
      <button className="boton-slider">Ver en Tienda</button>
    </div>
  );
};

export default Slider;
