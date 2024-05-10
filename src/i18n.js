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
          opalo: 'Ópalo',
          opaloDescription: 'Es una gema preciosa conocida por su juego de colores iridiscentes. Este fenómeno se llama juego de colores, y es resultado de la interferencia de la luz en las microestructuras del ópalo. Puede mostrar una amplia gama de colores, desde el rojo y naranja hasta el verde y azul.',
          ametista: 'Ametista',
          ametistaDescription: 'La amatista es una variedad del cuarzo conocida por su color púrpura. Se cree que tiene propiedades protectoras y puede promover la calma y la claridad mental.',
          verEnTienda: 'Ver en Tienda',
          colecciones: 'Colecciones',
          perlas: 'Perlas',
          fornitura: 'Fornitura',
          piedraSintetica: 'Piedra Sintética',
          piedraNatural: 'Piedra Natural',
          utensilios: 'Utensilios',
          estuches: 'Estuches',
          cuero: 'Cuero',
          circonitas: 'Circonitas',
          ayuda: 'Ayuda',
          contacto: 'Contacto',
          preguntasFrecuentes: 'Preguntas Frecuentes',
          misCompras: 'Mis Compras',
          politicas: 'Políticas',
          condicionesGenerales: 'Condiciones Generales',
          politicaPrivacidad: 'Política de privacidad',
          cambiosDevoluciones: 'Cambios y devoluciones',
          politicaCookies: 'Política de Cookies',
          ubicacion: 'Ubicación',
          comoLlegar: 'Cómo Llegar',
          recogidaTienda: 'Recogida en Tienda',
          entregasEnvios: 'Entregas y Envíos',
          redesSociales: 'Síguenos en Redes',
          instagram: 'Instagram',
          facebook: 'Facebook',
          twitter: 'Twitter',
          tiktok: 'TikTok',
          quienesSomos: 'Quiénes Somos',
          ubicacion: 'Ubicación',
          texto1: 'Ubicada en el corazón del encantador Carrer del Pi número 11, Sivillà Lapidarios emerge como un rincón fascinante dedicado a la belleza y la sofisticación en forma de bisutería única. Este acogedor establecimiento combina a la perfección la artesanía tradicional con un toque contemporáneo, ofreciendo a sus clientes una experiencia de compra excepcional.',
          texto2: 'Al adentrarse en Sivillà Lapidarios, los visitantes son recibidos por una exhibición resplandeciente de joyas cuidadosamente seleccionadas. Cada pieza es una obra maestra en sí misma, con detalles meticulosos que destacan la destreza artesanal de los expertos lapidarios detrás de la creación de estas joyas.'
        }
      },
      ca: {
        translation: {
          tienda: 'Botiga',
          sobreNosotros: 'Sobre Nosaltres',
          contacto: 'Contacte',
          producto: 'Producte',
          opalo: 'Opal',
          opaloDescription: 'És una gema preciosa coneguda pel seu joc de colors iridescents. Aquest fenomen es diu joc de colors, i és resultat de la interferència de la llum en les microestructures de l\'òpal. Pot mostrar una àmplia gamma de colors, des del vermell i taronja fins al verd i blau.',
          ametista: 'Ametista',
          ametistaDescription: 'La ametista és una varietat del quars coneguda pel seu color porpra. Es creu que té propietats protectores i pot promoure la calma i la claredat mental.',
          verEnTienda: 'Veure a Botiga',
          colecciones: 'Col·leccions',
          perlas: 'Perles',
          fornitura: 'Fornitura',
          piedraSintetica: 'Pedra Sintètica',
          piedraNatural: 'Pedra Natural',
          utensilios: 'Utensilis',
          estuches: 'Estoigs',
          cuero: 'Cuir',
          circonitas: 'Circonites',
          ayuda: 'Ajuda',
          contacto: 'Contacte',
          preguntasFrecuentes: 'Preguntes Freqüents',
          misCompras: 'Les Meves Compres',
          politicas: 'Polítiques',
          condicionesGenerales: 'Condicions Generals',
          politicaPrivacidad: 'Política de Privadesa',
          cambiosDevoluciones: 'Canvis i Devolucions',
          politicaCookies: 'Política de Cookies',
          ubicacion: 'Ubicació',
          comoLlegar: 'Com Arribar',
          recogidaTienda: 'Recollida a Botiga',
          entregasEnvios: 'Lliuraments i Enviaments',
          redesSociales: 'Segueix-nos a Xarxes',
          instagram: 'Instagram',
          facebook: 'Facebook',
          twitter: 'Twitter',
          tiktok: 'TikTok',
          quienesSomos: 'Qui Som',
          ubicacion: 'Ubicació',
          texto1: 'Ubicada al cor del encantador Carrer del Pi número 11, Sivillà Lapidarios emergeix com un racó fascinant dedicat a la bellesa i la sofisticació en forma de bijuteria única. Aquest acollidor establiment combina a la perfecció l\'artesania tradicional amb un toc contemporani, oferint als seus clients una experiència de compra excepcional.',
          texto2: 'En endinsar-se a Sivillà Lapidarios, els visitants són rebuts per una exhibició resplendent de joies cuidadosament seleccionades. Cada peça és una obra mestra en si mateixa, amb detalls meticulosos que destaquen la destresa artesanal dels experts lapidaris darrere de la creació d\'aquestes joies.'
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
