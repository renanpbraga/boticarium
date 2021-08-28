import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grimorio from './components/Grimorio';
// import Laboratorio from './components/Laboratorio';
import Laboratorio2 from './components/Laboratorio2';
import Login from './components/Login';
import BoticariumProvider from './context/BoticariumProvider';

function App() {
  document.title = "Boticarium";
  return (
    <BoticariumProvider>
      <Switch>
        <Route path="/grimorio" render={ (props) => <Grimorio { ...props } /> } />
        <Route exact path="/laboratorio" render={ (props) => <Laboratorio2 { ...props } /> } /> 
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />  
      </Switch>
    </BoticariumProvider>
  );
}

export default App;
