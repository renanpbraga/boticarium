import React, { useContext } from 'react';
import BoticariumContext from '../context/BoticariumContext';
import NavBar from './NavBar';

function Jardim() {
  const {jardim, addIngredNoStorage, getIngredientes} = useContext(BoticariumContext);  

  const coletarErva = (nome) => {
    const findErva = jardim.find((erva) => erva.nome === nome);
    const novaErva = {
      nome: findErva.nome,
      qtd: Math.ceil(Math.random() * 5),
      valor: findErva.valor,
      descricao: findErva.descricao,
      conhecida: findErva.conhecida,
    };
    const encontraErva = getIngredientes.find((erva) => erva.nome === novaErva.nome);
    if(!encontraErva){
      getIngredientes.push(novaErva);
      addIngredNoStorage(getIngredientes);
    }
    else {
      const ervaRepetida = getIngredientes.find((erva) => erva.nome === novaErva.nome);
      ervaRepetida.qtd += novaErva.qtd;
      addIngredNoStorage(getIngredientes);
    }
  };
  
  const maxErvas = 4;
  const arrayErvas = [];
  for(let i = 0; i < jardim.length; i += 1){
    arrayErvas.push(jardim[Math.floor(Math.random()*jardim.length)])
  }

  return (
    <div>
      <NavBar />
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
