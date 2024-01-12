import React from 'react';
import '../styles/Destacado.css';


function Destacado(props){
  return (
    <div className="destacado-elemento">
      <img
      className="destacado-img"
       src={require(`../assets/${props.imagen}.jpg`)}
       />
        <p className="destacado-texto">{props.nombre}</p>
    </div>
    
  );
}

export default Destacado;
