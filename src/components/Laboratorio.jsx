import React, { useContext } from 'react';
import BoticariumContext from '../context/BoticariumContext';
import ArmarioDeErvas from './ArmarioDeErvas';
import ArmarioDePocoes from './ArmarioDePocoes';
import Grimorio from './Grimorio';
import Jardim from './Jardim';
import "../App.css"

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
    if(!ingrediente){
      return
    }
    //special thanks to Eduardo Santos(https://github.com/EduardoSantosF)
    const novoIngrediente = {
      ingrediente,
      quantidade,
    };
    console.log(novoIngrediente);
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
  const receitaConhecida = JSON.parse(localStorage.getItem('receitasConhecidas')) || [];
  const getIngredientes = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];
  
  const preparaReceita = () => {
    const receitaPreparada = grimorio.receitas.find((receita) => JSON.stringify(receita.ingredientes) === JSON.stringify(caldeirao));
    global.alert(!receitaPreparada ? "A receita falhou" : `Você preparou: ${receitaPreparada.nome}`);
    if(receitaPreparada){
      localStorage.setItem('pocoes', JSON.stringify([...getAllDoneRecipes, receitaPreparada]));
    }
    setCaldeirao([]);
    if(!receitaConhecida.find((receita) => receita.nome === receitaPreparada.nome)){
      const receitaNova = JSON.stringify(receitaPreparada);
      localStorage.setItem('receitasConhecidas', JSON.stringify(...receitaConhecida, receitaNova));
    }

  };

  return (
    <div>
      <label htmlFor="ingrediente">
        Ingrediente:
        <select id="ingrediente" onChange={(e) => setIngrediente(e.target.value)}>
            <option />
          {
            getIngredientes.map((ingrediente) => (
              <option key={ingrediente.nome}>{ingrediente.nome}</option>
            ))
          }
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
      <ArmarioDeErvas />
      <Grimorio />
    </div>
  )
}

export default Laboratorio;
