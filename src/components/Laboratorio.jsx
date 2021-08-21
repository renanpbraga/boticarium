import React, { useContext } from 'react';
import BoticariumContext from '../context/BoticariumContext';
import ArmarioDePocoes from './ArmarioDePocoes';
import Jardim from './Jardim';

function Laboratorio() {
  
  const {
    ingrediente,
    setIngrediente,
    quantidade,
    setQuantidade,
    caldeirao,
    setCaldeirao,
    grimorio
  } = useContext(BoticariumContext);

  const adicionarIngredientes = () => {
    //special thanks to Eduardo Santos(https://github.com/EduardoSantosF)
    const novoIngrediente = {
      ingrediente,
      quantidade,
    };
    const foundIngred = caldeirao.find((ingred) => ingred.ingrediente === ingrediente) 
    if(!foundIngred  && quantidade > 0){
      setCaldeirao([...caldeirao, novoIngrediente]);
    } 
    else {
      const newCaldeirao = caldeirao.map(
        ingred => ingred.ingrediente === ingrediente ? {...ingred, quantidade} : ingred
      );
      setCaldeirao(newCaldeirao); 
    };
  };
  
  const getAllDoneRecipes = JSON.parse(localStorage.getItem('pocoes')) || [];
  
  const preparaReceita = () => {
    const receitaPreparada = grimorio.receitas.find((receita) => JSON.stringify(receita.ingredientes) === JSON.stringify(caldeirao));
    global.alert(!receitaPreparada ? "A receita falhou" : `Você preparou: ${receitaPreparada.nome}`);
    if(receitaPreparada){
      localStorage.setItem('pocoes', JSON.stringify([...getAllDoneRecipes, receitaPreparada]));
    }
    setCaldeirao([]);
  };

  return (
    <div>
      <label htmlFor="ingrediente">
        Ingrediente:
        <select id="ingrediente" onChange={(e) => setIngrediente(e.target.value)}>
          <option>Camellia</option>
          <option>Mamona</option>
          <option>Camomila</option>
          <option>Coffea</option>
        </select>
      </label>
      <label htmlFor="quantidade">
        Quantidade:
        <input type="number" id="quantidade" onChange={(e) => setQuantidade(Number(e.target.value))}/>
      </label>
      <button type="button" onClick={adicionarIngredientes}>Adicionar ao caldeirão</button>
      <ul>Caldeirão:
        {caldeirao.length < 1 ? <li>Caldeirão Vazio</li> : caldeirao.map((caldeirao) => (
          <li key={caldeirao.ingrediente}>
            {caldeirao.quantidade}x: {caldeirao.ingrediente}
          </li>
        ))}
      </ul>
      <button type="button" onClick={preparaReceita}>Preparar receita</button>
      <ArmarioDePocoes />
      <Jardim />
    </div>
  )
}

export default Laboratorio;
