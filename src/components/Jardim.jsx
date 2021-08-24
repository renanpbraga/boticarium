import React, { useContext, useState, useEffect } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function Jardim() {
  const[ervaColetada, setErvaColetada] = useState([]);
  const {jardim, setErva} = useContext(BoticariumContext);
  
  // useEffect(() => {
  //   setErva();
  // });
  
  const getAllErvas = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];

  const coletarErva = (name) => {
    const novaErva = {
      nome: name,
      qtd: Math.ceil(Math.random() * 5),
    }
    setErva(novaErva);
    const encontraErva = getAllErvas.find((erva) => erva.nome === novaErva.nome);
    if(!encontraErva){
    localStorage.setItem('armarioDeErvas', [...getAllErvas, novaErva]);
    }
    else {
      const ervaRepetida = getAllErvas.map((erva) => erva);
      const indexErva = getAllErvas.indexOf(ervaRepetida);
      const mapErvaColetada = getAllErvas.map((erva) => erva);
      mapErvaColetada.splice(indexErva);
      const ervaAlterada = {
        nome: novaErva.nome,
        qtd: novaErva.qtd + ervaRepetida.qtd,
      };
      localStorage.removeItem('armarioDeErvas');
      mapErvaColetada.push(ervaAlterada);
      const strMapErvaColetada = JSON.stringify(mapErvaColetada);
      localStorage.setItem('armarioDeErvas', [strMapErvaColetada]);
      // setErvaColetada(mapErvaColetada);
    }
  };
  // Math.ceil(Math.random()*4)
  const maxErvas = 4;
  const arrayErvas = [];
  for(let i = 0; i < jardim.length; i += 1){
    arrayErvas.push(jardim[Math.floor(Math.random()*jardim.length)])
  }

  return (
    <div>
      {
        arrayErvas.map((erva, index) => index < maxErvas &&(
          <button
            type="button"
            name={erva.nome}
            key={`${erva}-${index}`}
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
