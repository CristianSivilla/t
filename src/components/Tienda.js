import React from 'react';
import Ofertas from '../components/Ofertas';
import CompTienda from '../components/CompTienda';
import { useTranslation } from 'react-i18next';
import '../styles/Tienda.css';

const Tienda = () => {
    const { t } = useTranslation();
    return (
        <div className="tienda-screen">
            <h2>{t('tienda')}</h2>

            <Ofertas
                producto_id1="4"
                imagen1="opalo"
                nombre1={t('opalo')}
                descripcion1={t('opaloDescription')}
                precio1="20€"
                producto_id2="4"
                imagen2="opalo"
                nombre2={t('opalo')}
                descripcion2={t('opaloDescription')}
                precio2="20€"
                producto_id3="4"
                imagen3="opalo"
                nombre3={t('opalo')}
                descripcion3={t('opaloDescription')}
                precio3="20€"
                producto_id4="4"
                imagen4="opalo"
                nombre4={t('opalo')}
                descripcion4={t('opaloDescription')}
                precio4="20€"
            />

            <Ofertas
                producto_id1="1"
                imagen1="perla"
                nombre1={t('perlas')}
                descripcion1={t('perlasDescription')}
                precio1="10€"
                producto_id2="1"
                imagen2="perla"
                nombre2={t('perlas')}
                descripcion2={t('perlasDescription')}
                precio2="10€"
                producto_id3="1"
                imagen3="perla"
                nombre3={t('perlas')}
                descripcion3={t('perlasDescription')}
                precio3="10€"
                producto_id4="1"
                imagen4="perla"
                nombre4={t('perlas')}
                descripcion4={t('perlasDescription')}
                precio4="10€"
            />

            <Ofertas
                producto_id1="2"
                imagen1="fornitura"
                nombre1={t('fornitura')}
                descripcion1={t('fornituraDescription')}
                precio1="2€"
                producto_id2="2"
                imagen2="fornitura"
                nombre2={t('fornitura')}
                descripcion2={t('fornituraDescription')}
                precio2="2€"
                producto_id3="2"
                imagen3="fornitura"
                nombre3={t('fornitura')}
                descripcion3={t('fornituraDescription')}
                precio3="2€"
                producto_id4="2"
                imagen4="fornitura"
                nombre4={t('fornitura')}
                descripcion4={t('fornituraDescription')}
                precio4="2€"
            />

          
            <Ofertas
                producto_id1="5"
                imagen1="utensilios"
                nombre1={t('utensilios')}
                descripcion1={t('utensiliosDescription')}
                precio1="10€"
                producto_id2="5"
                imagen2="utensilios"
                nombre2={t('utensilios')}
                descripcion2={t('utensiliosDescription')}
                precio2="10€"
                producto_id3="5"
                imagen3="utensilios"
                nombre3={t('utensilios')}
                descripcion3={t('utensiliosDescription')}
                precio3="10€"
                producto_id4="5"
                imagen4="utensilios"
                nombre4={t('utensilios')}
                descripcion4={t('utensiliosDescription')}
                precio4="10€"
            />

            <Ofertas
                producto_id1="6"
                imagen1="estuche"
                nombre1={t('estuches')}
                descripcion1={t('estuchesDescription')}
                precio1="5€"
                producto_id2="6"
                imagen2="estuche"
                nombre2={t('estuches')}
                descripcion2={t('estuchesDescription')}
                precio2="5€"
                producto_id3="6"
                imagen3="estuche"
                nombre3={t('estuches')}
                descripcion3={t('estuchesDescription')}
                precio3="5€"
                producto_id4="6"
                imagen4="estuche"
                nombre4={t('estuches')}
                descripcion4={t('estuchesDescription')}
                precio4="5€"
            />

            <Ofertas
                producto_id1="7"
                imagen1="cuero"
                nombre1={t('cuero')}
                descripcion1={t('cueroDescription')}
                precio1="6€"
                producto_id2="7"
                imagen2="cuero"
                nombre2={t('cuero')}
                descripcion2={t('cueroDescription')}
                precio2="6€"
                producto_id3="7"
                imagen3="cuero"
                nombre3={t('cuero')}
                descripcion3={t('cueroDescription')}
                precio3="6€"
                producto_id4="7"
                imagen4="cuero"
                nombre4={t('cuero')}
                descripcion4={t('cueroDescription')}
                precio4="6€"
            />

            <Ofertas
                producto_id1="8"
                imagen1="circonitas"
                nombre1={t('circonitas')}
                descripcion1={t('circonitasDescription')}
                precio1="1€"
                producto_id2="8"
                imagen2="circonitas"
                nombre2={t('circonitas')}
                descripcion2={t('circonitasDescription')}
                precio2="1€"
                producto_id3="8"
                imagen3="circonitas"
                nombre3={t('circonitas')}
                descripcion3={t('circonitasDescription')}
                precio3="1€"
                producto_id4="8"
                imagen4="circonitas"
                nombre4={t('circonitas')}
                descripcion4={t('circonitasDescription')}
                precio4="1€"
            />

        </div>
    );
}

export default Tienda;
