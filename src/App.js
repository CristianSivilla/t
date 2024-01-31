import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home';
import Tienda from './components/Tienda';
import Footer from './components/Footer';
import Contacto from './components/SobreNosotros';
import SobreNosotros from './components/SobreNosotros';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
        <Switch>
          <Route path="/Tienda" component={Tienda} />
          <Route path="/SobreNosotros" component={SobreNosotros} />
          <Route path="/" component={Home} />
        
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
