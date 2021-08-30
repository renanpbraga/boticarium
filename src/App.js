import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Ervas from './components/Ervas';
import Grimorio from './components/Grimorio';
import Jardim from './components/Jardim';
// import Laboratorio from './components/Laboratorio';
import Laboratorio2 from './components/Laboratorio2';
import BoticariumProvider from './context/BoticariumProvider';

function App() {
  document.title = "Boticarium";
  return (
    <BoticariumProvider>
      <Switch>
        <Route path="/grimorio/:erva" render={ (props) => <Ervas { ...props } /> } />
        <Route path="/grimorio" render={ (props) => <Grimorio { ...props } /> } />
        <Route path="/jardim" render={ (props) => <Jardim { ...props } /> } />
        <Route exact path="/" render={ (props) => <Laboratorio2 { ...props } /> } />  
      </Switch>
    </BoticariumProvider>
  );
}

export default App;
