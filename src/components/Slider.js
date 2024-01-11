import React from 'react';
import '../styles/Slider.css';
import opalo from '../assets/opalo.jpg';


const Slider = () => {
  return (
<div className="slider-contenedor">
<img className="slider-img" src={opalo} alt="buscador" />
<p id = "texto-destacado">Opalo,</p>
<p className="texto-descriptivo">Es una gema preciosa conocida por su juego de colores iridiscentes. Este fenómeno  se llama juego de colores,
y es resultado de la interferencia de la luz en las microestructuras del ópalo. 
Puede mostrar una amplia gama de colores, desde el rojo y naranja hasta el verde y azul.</p>
<button className="boton-slider">Ver en Tienda</button>
    </div>
    
);

}

export default Slider;
