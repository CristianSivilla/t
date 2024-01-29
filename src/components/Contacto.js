import React from 'react';
import '../styles/Contacto.css';
import About from '../components/About';
import Map from '../components/Map';


const Contacto = () => {
  return (
    <div>
        <div className="contact-screen">
        <About/>
        <Map/>
        </div>
      
    </div>
  );
}

export default Contacto;
