import React from 'react';
import '../styles/Home.css';
import Slider from '../components/Slider';
import Destacado from '../components/Destacado';
import { useTranslation } from 'react-i18next';

const Home = ({ modoNocturno }) => {
  const { t } = useTranslation();

  return (
    <div className={modoNocturno ? 'modo-nocturno' : ''}>
      <div className="home-screen">
        <Slider />
      </div>
      <div className="destacado-contenedor">
        <p className="titulo-destacado">{t('colecciones')}</p>
        <Destacado
          imagen="perla"
          nombre={t('perlas')}
        />
        <Destacado
          imagen="fornitura"
          nombre={t('fornitura')}
        />
        <Destacado
          imagen="sintetica"
          nombre={t('piedraSintetica')}
        />
        <Destacado
          imagen="opalo"
          nombre={t('piedraNatural')}
        />
      </div>
      <div className="destacado-contenedor-inferior">
        <Destacado
          imagen="utensilios"
          nombre={t('utensilios')}
        />
        <Destacado
          imagen="estuche"
          nombre={t('estuches')}
        />
        <Destacado
          imagen="cuero"
          nombre={t('cuero')}
        />
        <Destacado
          imagen="circonitas"
          nombre={t('circonitas')}
        />
      </div>
    </div>
  );
}

export default Home;
