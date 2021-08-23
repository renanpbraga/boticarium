import React, { useContext, useState, useEffect } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function Jardim() {
  const[ervaColetada, setErvaColetada] = useState([]);
  const {jardim, setErva} = useContext(BoticariumContext);
  
  const getAllErvas = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];

  const coletarErva = (name) => {
    const novaErva = {
      nome: name,
      qtd: Math.ceil(Math.random() * 5),
    }
    setErva(novaErva);
    const encontraErva = getAllErvas.find((erva) => erva.nome === novaErva.nome);
    if(!encontraErva){
      localStorage.setItem('armarioDeErvas', JSON.stringify([...getAllErvas, novaErva]));
      setErvaColetada([...ervaColetada, novaErva]);
    }
    else {
      const alteraQtd = getAllErvas.find((erva) => erva.nome === novaErva.nome);
      alteraQtd.qtd = (alteraQtd.qtd + novaErva.qtd);
      const ervaRepetida = getAllErvas.find((erva) => erva.nome === alteraQtd.nome);
      console.log(ervaRepetida);
      localStorage.removeItem('armarioDeErvas', JSON.stringify(ervaRepetida));
      localStorage.setItem('armarioDeErvas', JSON.stringify([...getAllErvas]));
      setErvaColetada([...ervaColetada, alteraQtd]);
    }
  };
  console.log(ervaColetada)

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
