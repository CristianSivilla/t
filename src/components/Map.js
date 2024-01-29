import React from 'react';
import '../styles/Map.css';
import map from '../assets/map.jpg';
import about from '../assets/about.jpg';

const Map = () => {
  return (

<div className="map-contenedor">
<div className="map-text">
<h2 className="about-text">Donde Encontrarnos</h2>
</div>
<iframe
  className="map-img"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.3906145497878!2d2.1732832696197133!3d41.38358999820629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f77a10099d%3A0x9d5e355436e42392!2sSivill%C3%A0%20Lapidaris%2C%20S.C.P.!5e0!3m2!1ses!2ses!4v1706554976263!5m2!1ses!2ses"
  width="600"
  height="450"
  style={{ border: '0' }} 
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>


 </div>
    
);

}

export default Map;
