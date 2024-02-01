import React from 'react';
import '../styles/SobreNosotros.css';
import About from './About';
import Map from './Map';


const SobreNosotros = () => {
  return (
    <div>
        <div className="contact-screen">
        <About/>
        <Map/>
        </div>
      
    </div>
  );
}

export default SobreNosotros;
