import React from 'react';
import '../styles/CajaContacto.css';
import '../styles/Contacto.css';
import telefono from '../assets/llamada-telefonica.png';
import email from '../assets/email.png';
import pasador_ubicacion from '../assets/pasador-de-ubicacion.png';

const CajaContacto = () => {
  return (
    <div className="contacto-contenedor">
      <div className="contacto-text">
        <h2 className="contacto-text">Contacto</h2>
      </div>

      <div className="contacto-fila2">
        <p className="contacto-texto">sivillalapidarios@gmail.com</p>
        <img className="img_mail" src={email} alt="mail" />
      </div>
      <div className="contacto-fila3">
        <p className="contacto-texto">Carrer del Pi, 11, Ciutat Vella</p>
        <img className="img_ubi" src={pasador_ubicacion} alt="ubicacion" />
      </div>
      <div className="contacto-fila1">
        <p className="contacto-texto-telefono">933 18 54 47</p>
        <img className="img_telefono" src={telefono} alt="telefono" />
      </div>
      <div className="tabla-container">
        <div className="tabla-horarios">
          <table>
            <tr>
              <th>Día</th>
              <th>Horario</th>
            </tr>
            <tr>
              <td>Lunes</td>
              <td>8:30–13:00, 15:00–17:00</td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>8:30–13:00, 15:00–17:00</td>
            </tr>
            <tr>
              <td>Miércoles</td>
              <td>8:30–13:00, 15:00–17:00</td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>8:30–13:00, 15:00–17:00</td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>8:30–14:00</td>
            </tr>
            <tr>
              <td>Sábado</td>
              <td>Cerrado</td>
            </tr>
            <tr>
              <td>Domingo</td>
              <td>Cerrado</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CajaContacto;
