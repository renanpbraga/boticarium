import React from 'react';
import Laboratorio from './components/Laboratorio';
import BoticariumProvider from './context/BoticariumProvider';

function App() {
  return (
    <BoticariumProvider>
      <Laboratorio />
    </BoticariumProvider>
  );
}

export default App;
