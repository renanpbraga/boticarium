import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Inicio from './components/Inicio';
import Ervas from './components/Ervas';
import Grimorio from './components/Grimorio';
import Jardim from './components/Jardim';
import Laboratorio from './components/Laboratorio';
import BoticariumProvider from './context/BoticariumProvider';
import Teste from './components/Teste';

function App() {
  document.title = "Boticarium";
  return (
    <BoticariumProvider>
      <Switch>
        <Route path="/grimorio/:erva" render={ (props) => <Ervas { ...props } /> } />
        <Route path="/grimorio" render={ (props) => <Grimorio { ...props } /> } />
        <Route path="/jardim" render={ (props) => <Jardim { ...props } /> } />
        <Route exact path="/" render={ (props) => <Inicio { ...props } /> } /> 
        <Route exact path="/laboratorio" render={ (props) => <Laboratorio { ...props } /> } />
        <Route exact path="/teste" render={ (props) => <Teste { ...props } /> } />  
      </Switch>
    </BoticariumProvider>
  );
}

export default App;
