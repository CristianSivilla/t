import React from 'react';
import '../styles/Home.css';
import Slider from '../components/Slider';
import Destacado from '../components/Destacado';


const Home = () => {
  return (
    <body>
    <div className="home-screen">
        <Slider/>
    </div>
    <div className="destacado-contenedor">
      <p className="titulo-destacado">Colecciones</p>
      <Destacado
      imagen ="opalo"
      nombre="Opalo"/>
      <Destacado
      imagen ="amatista"
      nombre="Amatista"/>
      <Destacado
      imagen ="opalo"
      nombre="Opalo"/>
          <Destacado
      imagen ="opalo"
      nombre="Opalo"/>  
    </div>

    <div className="destacado-contenedor-inferior">
      <Destacado
      imagen ="opalo"
      nombre="Opalo"/>
      <Destacado
      imagen ="amatista"
      nombre="Amatista"/>
      <Destacado
      imagen ="opalo"
      nombre="Opalo"/>
          <Destacado
      imagen ="opalo"
      nombre="Opalo"/>  
    </div>
        </body>

        
    );

}

export default Home;
