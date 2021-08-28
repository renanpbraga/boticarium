import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BoticariumContext from '../context/BoticariumContext';
import ArmarioDeErvas from './ArmarioDeErvas';
import ArmarioDePocoes from './ArmarioDePocoes';
import Grimorio from './Grimorio';
import Jardim from './Jardim';
import "../App.css"

function Laboratorio2() {

  const {
    ingrediente,
    setIngrediente,
    caldeirao,
    setCaldeirao,
    getIngredientes,
    grimorio,
    getPocao,
    setPocao,
    jardim,
  } = useContext(BoticariumContext);

  const adicionarIngredientes = () => {
    //special thanks to Eduardo Santos(https://github.com/EduardoSantosF)
    const addIngrediente = getIngredientes.find((ingred) => ingred.nome === ingrediente);
    if(!ingrediente){
      return global.alert('Você deve adicionar algum ingrediente.');
    }
    const novoIngrediente = {
      nome: addIngrediente.nome,
      valor: addIngrediente.valor,
    };
    if(getIngredientes.find((erva) => erva.nome === ingrediente && erva.qtd === 0)){
      global.alert(`Você não possui ${ingrediente} suficiente`)
    } else {
        setCaldeirao([...caldeirao, novoIngrediente]);
    };
  };

  const ordenaArmario = getIngredientes.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    return 0;
  });

  const arrayValores = caldeirao.map((ingred) => ingred.valor);
  const getSum = (result, number) => {
    console.log(result);
    return result + number;
    };
  const sumNumbers = arrayValores.reduce(getSum, 0);
  console.log(sumNumbers);

  const preparaPocao = () => {
    if(sumNumbers === 0){
      return;
    } else{
      const encontraPocao = grimorio.receitas.find((pocao) =>
        sumNumbers >= pocao.valorMin && sumNumbers <= pocao.valorMax)
      if(encontraPocao){
        getPocao.push(encontraPocao);
        setPocao(getPocao)
      } else {
        return global.alert('A receita falhou.');
      }
    }

  };
  const findValor = jardim.find((ingred) => ingred.nome === ingrediente)||'';

  console.log(findValor)
  return (
    <main>
     <label htmlFor="ingrediente">
        Ingrediente:
        <select id="ingrediente" onChange={(e) => setIngrediente(e.target.value)}>
            <option />
          {
            ordenaArmario.map((ingrediente) => (
              <option key={ingrediente.nome}>{ingrediente.nome}</option>
            )).sort()
          }
        </select>
        <p>
          Potencial:{findValor.valor}
        </p>
        <button type="button" onClick={adicionarIngredientes}>Adicionar ao caldeirão</button>
        <ul>Caldeirão:
        {caldeirao.length < 1 ? <li>Caldeirão Vazio</li> : caldeirao.map((caldeirao) => (
          <li key={caldeirao.nome}>
            {caldeirao.nome} 
          </li>
        ))}
      </ul>
      <ul>Total: {sumNumbers}</ul>
      <button type="button" onClick={preparaPocao}>Preparar receita</button>
      </label>
      <Jardim />
      <ArmarioDeErvas />
    </main>
  )
}

export default Laboratorio2;
