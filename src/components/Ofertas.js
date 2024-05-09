import React from 'react';
import '../styles/Ofertas.css';
import { Link } from 'react-router-dom';

function Ofertas(props) {

  return (
    <div className="contenedor-ofertas">
      <div className="ofertas-imagen1">
        <img
          className="ofertas-img"
          src={require(`../assets/${props.imagen1}.jpg`)}
          alt={props.nombre1}
        />
        <p className="ofertas-texto">{props.nombre1}</p>
        <Link to="/Producto">
          <button className="ofertas-button">Ver</button>
        </Link>
      </div>
      <div className="ofertas-imagen2">
        <img
          className="ofertas-img"
          src={require(`../assets/${props.imagen2}.jpg`)}
          alt={props.nombre2}
        />
        <p className="ofertas-texto">{props.nombre2}</p>
        <Link to="/Producto">
          <button className="ofertas-button">Ver</button>
        </Link>
      </div>
      <div className="ofertas-imagen3">
        <img
          className="ofertas-img"
          src={require(`../assets/${props.imagen3}.jpg`)}
          alt={props.nombre3}
        />
        <p className="ofertas-texto">{props.nombre3}</p>
        <Link to="/Producto">
          <button className="ofertas-button">Ver</button>
        </Link>
      </div>
      <div className="ofertas-imagen">
        <img
          className="ofertas-img"
          src={require(`../assets/${props.imagen4}.jpg`)}
          alt={props.nombre4}
        />
        <p className="ofertas-texto">{props.nombre4}</p>
        <Link to="/Producto">
          <button className="ofertas-button">Ver</button>
        </Link>
      </div>
    </div>
  );
}

export default Ofertas;
