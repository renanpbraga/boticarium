import React, { useContext, useState, useEffect } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function Jardim() {
  const[ervaColetada, setErvaColetada] = useState([]);
  const {jardim, setErva} = useContext(BoticariumContext);
  
  // useEffect(() => {
  //   setErva();
  // });
  
  
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
      const mapGetAllErvas = getAllErvas.map((erva) => erva);
      const indexErva = mapGetAllErvas.indexOf(ervaRepetida);
      mapGetAllErvas.splice(indexErva);
      const ervaAlterada = {
          nome: novaErva.nome,
          qtd: (novaErva.qtd + ervaRepetida.qtd),
        };
      localStorage.removeItem('armarioDeErvas');
      console.log(mapGetAllErvas)
      // o problema está aqui
      localStorage.setItem('armarioDeErvas', JSON.stringify([...mapGetAllErvas, ervaAlterada]));
      // o problema está aqui
      }
    };
    const getAllErvas = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];
    // console.log(getAllErvas);
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
