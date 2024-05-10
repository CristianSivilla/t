import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Tienda from './components/Tienda';
import Footer from './components/Footer';
import SobreNosotros from './components/SobreNosotros';
import Registro from './components/Registro';
import Contacto from './components/Contacto';
import Login from './components/Login';
import Producto from './components/Producto';
import Cart from './components/Cart';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // asegúrate de importar la instancia de i18n

import './App.css'; 
const App = () => {
  const [modoNocturno, setModoNocturno] = useState(false);

  const toggleModoNocturno = () => {
    setModoNocturno(!modoNocturno);
  };

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
      <div className={`app-container ${modoNocturno ? 'modo-nocturno' : ''}`}>
        <Header toggleModoNocturno={toggleModoNocturno} />
        <Switch>
        <Route path="/Cart" component={Cart} />
         <Route path="/Producto" component={Producto} />
          <Route path="/Registro" component={Registro} />
          <Route path="/Tienda" component={Tienda} />
          <Route path="/SobreNosotros" component={SobreNosotros} />
          <Route path="/Contacto" component={Contacto} />
          <Route path="/Login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer toggleModoNocturno={toggleModoNocturno} />

      </div>
      </I18nextProvider>
    </Router>
  );
}

export default App;
