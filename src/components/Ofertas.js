import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Ofertas.css'
import { useTranslation } from 'react-i18next';

function Ofertas(props) {
  const { t } = useTranslation();
  return (
    <div className="contenedor-ofertas">
      <div className="ofertas-imagen1">
        <img
          className="ofertas-img"
          src={require(`../assets/${props.imagen1}.jpg`)}
          alt={props.nombre1}
        />
        <p className="ofertas-texto">{props.nombre1}</p>
        <Link to={{
            pathname: "/Producto",
            state: {
              nombre: props.nombre1,
              imagen: props.imagen1,
              descripcion: props.descripcion1,
              precio: props.precio1,
              producto_id: props.producto_id1 
            }
          }}>
        <button className="ofertas-button">{t('verEnTienda')}</button>

        </Link>
      </div>
      <div className="ofertas-imagen2">
        <img
          className="ofertas-img"
          src={require(`../assets/${props.imagen2}.jpg`)}
          alt={props.nombre2}
        />
        <p className="ofertas-texto">{props.nombre2}</p>
        <Link to={{
            pathname: "/Producto",
            state: {
              nombre: props.nombre2,
              imagen: props.imagen2,
              descripcion: props.descripcion2,
              precio: props.precio2,
              producto_id: props.producto_id2 
            }
          }}>
          <button className="ofertas-button">{t('verEnTienda')}</button>

        </Link>
      </div>
      <div className="ofertas-imagen3">
        <img
          className="ofertas-img"
          src={require(`../assets/${props.imagen3}.jpg`)}
          alt={props.nombre3}
        />
        <p className="ofertas-texto">{props.nombre3}</p>
        <Link to={{
            pathname: "/Producto",
            state: {
              nombre: props.nombre3,
              imagen: props.imagen3,
              descripcion: props.descripcion3,
              precio: props.precio3,
              producto_id: props.producto_id3 
            }
          }}>
        <button className="ofertas-button">{t('verEnTienda')}</button>

        </Link>
      </div>
      <div className="ofertas-imagen4">
        <img
          className="ofertas-img"
          src={require(`../assets/${props.imagen4}.jpg`)}
          alt={props.nombre4}
        />
        <p className="ofertas-texto">{props.nombre4}</p>
        <Link to={{
            pathname: "/Producto",
            state: {
              nombre: props.nombre4,
              imagen: props.imagen4,
              descripcion: props.descripcion4,
              precio: props.precio4,
              producto_id: props.producto_id4 
            }
          }}>
         <button className="ofertas-button">{t('verEnTienda')}</button>
        </Link>
      </div>
    </div>
  );
}

export default Ofertas;
