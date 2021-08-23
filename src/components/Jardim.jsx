import React, { useContext, useState } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function Jardim() {
  const[ervaColetada, setErvaColetada] = useState([])
  const {jardim} = useContext(BoticariumContext);
  
  const getAllErvas = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];

  const coletarErva = (name) => {
    const novaErva = {
      nome: name,
      qtd: Math.ceil(Math.random() * 5),
    }
    setErvaColetada([...ervaColetada, novaErva]);
    localStorage.setItem('armarioDeErvas', JSON.stringify([...getAllErvas, novaErva]));
  }
  console.log(ervaColetada);

  return (
    <div>
      {
        !jardim ? <p>Carregando...</p> : jardim.map((erva) => (
          <button
            type="button"
            name={erva.nome}
            key={erva.id}
            onClick={((e) => coletarErva(e.target.name))}
          >
            {erva.nome}
          </button>
        ))
        
      }
    </div>
  )
}

export default Jardim;
