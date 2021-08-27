import React, { useContext } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function Jardim() {
  const {jardim, setErva} = useContext(BoticariumContext);  
  
  const coletarErva = (name) => {
    const novaErva = {
      nome: name,
      qtd: Math.ceil(Math.random() * 5),
    }
    setErva(novaErva);
    const encontraErva = getAllErvas.find((erva) => erva.nome === novaErva.nome);
    if(!encontraErva){
      localStorage.setItem('armarioDeErvas', JSON.stringify([...getAllErvas, novaErva]));
    }
    else {
      const ervaRepetida = getAllErvas.find((erva) => erva.nome === novaErva.nome);
      ervaRepetida.qtd += novaErva.qtd;
      localStorage.setItem('armarioDeErvas', JSON.stringify([...getAllErvas]));
      // const ervaRepetida = getAllErvas.find((erva) => erva.nome === novaErva.nome);
      // let indexErva = getAllErvas.indexOf(ervaRepetida);
      // getAllErvas[indexErva].qtd = (ervaRepetida.qtd + novaErva.qtd);
      // localStorage.setItem('armarioDeErvas', JSON.stringify([...getAllErvas]));
    }
  };
  const getAllErvas = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];

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
