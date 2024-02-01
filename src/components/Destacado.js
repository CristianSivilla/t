import React from 'react';
import '../styles/Destacado.css';
import { Link } from 'react-router-dom';

function Destacado(props) {
  return (
    <div className="destacado-elemento">
      <Link to={`/Tienda`}>
        <img
          className="destacado-img"
          src={require(`../assets/${props.imagen}.jpg`)}
          alt={props.nombre}
        />
      </Link>
      <p className="destacado-texto">{props.nombre}</p>
    </div>
  );
}

export default Destacado;



