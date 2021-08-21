import React, { useContext, useState } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function Jardim() {
  const[ervaColetada, setErvaColetada] = useState([])
  const {jardim} = useContext(BoticariumContext);
  
  const coletarErva = (name) => {
    setErvaColetada([...ervaColetada, name]);
  }
  
  console.log(ervaColetada);

  return (
    <div>
      {
        !jardim ? <p>Carregando...</p> : jardim.map((erva) => (
          <button
            type="button"
            name={erva}
            onClick={((e) => coletarErva(e.target.name))}
          >
            {erva}
          </button>
        ))
        
      }
    </div>
  )
}

export default Jardim;
