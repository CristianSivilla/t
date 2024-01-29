import React from 'react';
import '../styles/About.css';
import carrerpi from '../assets/carrerpi.jpg';
import about from '../assets/about.jpg';

const About = () => {
  return (

<div className="about-contenedor">
<div className="about-text">
<h2 className="about-text">Quienes Somos</h2>
</div>
<img className="about-img" src={about} alt="about" />
<img className="carrerpi-img" src={carrerpi} alt="carrerpi" />
<p className="texto-about">Ubicada en el corazón del encantador Carrer del Pi número 11,
 Sivillà Lapidarios emerge como un rincón fascinante dedicado a la belleza y la sofisticación en forma de
  bisutería única. Este acogedor establecimiento combina a la perfección la artesanía tradicional con un
   toque contemporáneo, ofreciendo a sus clientes una experiencia de compra excepcional.</p>
<p className="texto-about2">Al adentrarse en Sivillà Lapidarios, los visitantes son recibidos por una exhibición resplandeciente de 
joyas cuidadosamente seleccionadas. Cada pieza es una obra maestra en sí misma, con detalles meticulosos que destacan la destreza artesanal de los expertos lapidarios detrás de la creación de estas joyas.</p>

 </div>
    
);

}

export default About;
