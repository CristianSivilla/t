// i18n.js

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    resources: {
      es: {
        translation: {
          tienda: 'Tienda',
          sobreNosotros: 'Sobre Nosotros',
          contacto: 'Contacto',
          producto: 'Producto', 
         
        }
      },
      ca: {
        translation: {
          tienda: 'Botiga',
          sobreNosotros: 'Sobre Nosaltres',
          contacto: 'Contacte',
          producto: 'Producte', // Traducción del header

        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
