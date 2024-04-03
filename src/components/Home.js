import React from 'react';
import '../styles/Home.css';
import Slider from '../components/Slider';
import Destacado from '../components/Destacado';


const Home = ({ modoNocturno }) => {

  return (
    
    <body className={modoNocturno ? 'modo-nocturno' : ''}>

    <div className="home-screen">
        <Slider/>
    </div>
    <div className="destacado-contenedor">
      <p className="titulo-destacado">Colecciones</p>
      <Destacado
      imagen ="opalo"
      nombre="Perlas"/>
      <Destacado
      imagen ="amatista"
      nombre="Fornitura"/>
      <Destacado
      imagen ="opalo"
      nombre="Piedra Sintética"/>
          <Destacado
      imagen ="opalo"
      nombre="Piedra Natural"/>  
    </div>

    <div className="destacado-contenedor-inferior">
      <Destacado
      imagen ="opalo"
      nombre="Utensilios"/>
      <Destacado
      imagen ="amatista"
      nombre="Estuches"/>
      <Destacado
      imagen ="opalo"
      nombre="Cuero"/>
          <Destacado
      imagen ="opalo"
      nombre="Circonitas"/>  
    </div>
        </body>

    );

}

export default Home;
