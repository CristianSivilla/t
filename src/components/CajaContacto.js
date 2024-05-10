import React from 'react';
import '../styles/CajaContacto.css';
import '../styles/Contacto.css';
import telefono from '../assets/llamada-telefonica.png';
import email from '../assets/email.png';
import pasador_ubicacion from '../assets/pasador-de-ubicacion.png';
import { useTranslation } from 'react-i18next';

const CajaContacto = () => {
  const { t } = useTranslation();

  return (
    <div className="contacto-contenedor">
      <div className="contacto-text">
        <h2 className="contacto-text">{t('contacto')}</h2>
      </div>

      <div className="contacto-fila2">
        <p className="contacto-texto">{t('correo')}</p>
        <img className="img_mail" src={email} alt="mail" />
      </div>
      <div className="contacto-fila3">
        <p className="contacto-texto">{t('ubicacion')}</p>
        <img className="img_ubi" src={pasador_ubicacion} alt="ubicacion" />
      </div>
      <div className="contacto-fila1">
        <p className="contacto-texto-telefono">{t('telefono')}</p>
        <img className="img_telefono" src={telefono} alt="telefono" />
      </div>
      <div className="tabla-container">
        <div className="tabla-horarios">
          <table>
            <tbody>
              <tr>
                <th>{t('dia')}</th>
                <th>{t('horario')}</th>
              </tr>
              <tr>
                <td>{t('lunes')}</td>
                <td>{t('8:30–13:00, 15:00–17:00')}</td>
              </tr>
              <tr>
                <td>{t('martes')}</td>
                <td>{t('8:30–13:00, 15:00–17:00')}</td>
              </tr>
              <tr>
                <td>{t('miercoles')}</td>
                <td>{t('8:30–13:00, 15:00–17:00')}</td>
              </tr>
              <tr>
                <td>{t('jueves')}</td>
                <td>{t('8:30–13:00, 15:00–17:00')}</td>
              </tr>
              <tr>
                <td>{t('viernes')}</td>
                <td>{t('8:30–14:00')}</td>
              </tr>
              <tr>
                <td>{t('sabado')}</td>
                <td>{t('Cerrado')}</td>
              </tr>
              <tr>
                <td>{t('domingo')}</td>
                <td>{t('Cerrado')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CajaContacto;
