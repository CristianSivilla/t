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
          imagen="opalo"
          nombre={t('perlas')}
        />
        <Destacado
          imagen="amatista"
          nombre={t('fornitura')}
        />
        <Destacado
          imagen="opalo"
          nombre={t('piedraSintetica')}
        />
        <Destacado
          imagen="opalo"
          nombre={t('piedraNatural')}
        />
      </div>
      <div className="destacado-contenedor-inferior">
        <Destacado
          imagen="opalo"
          nombre={t('utensilios')}
        />
        <Destacado
          imagen="amatista"
          nombre={t('estuches')}
        />
        <Destacado
          imagen="opalo"
          nombre={t('cuero')}
        />
        <Destacado
          imagen="opalo"
          nombre={t('circonitas')}
        />
      </div>
    </div>
  );
}

export default Home;
