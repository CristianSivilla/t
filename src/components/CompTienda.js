import React from 'react';
import '../styles/CompTienda.css';

function CompTienda(props) {
  return (
    <div className="comptienda-elemento">
         <p className="comptienda-titulo">{props.titulo}</p>
        <img
          className="comptienda-img"
          src={require(`../assets/${props.imagen}.jpg`)}
          alt={props.nombre}
        />
      <p className="comptienda-texto">{props.nombre}</p>
    </div>
  );
}

export default CompTienda;



