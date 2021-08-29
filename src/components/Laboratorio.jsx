import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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

  const array = [+5, -3, +10];

  const getSum = (result, number) => result + number;
  const sumNumbers = array.reduce(getSum);
  console.log(sumNumbers);

  const adicionarIngredientes = () => {
    if(!ingrediente){
      return
    }
    //special thanks to Eduardo Santos(https://github.com/EduardoSantosF)
    const novoIngrediente = {
      nome: ingrediente,
      qtd: quantidade,
    };
    if(getAllErvas.find((erva) => erva.nome === ingrediente && erva.qtd < quantidade)){
      global.alert(`Você não possui ${ingrediente} suficiente`)
    } else{
      const foundIngred = caldeirao.find((ingred) => ingred.nome === ingrediente) 
      if(!foundIngred  && quantidade > 0){
        setCaldeirao([...caldeirao, novoIngrediente]);
      } 
      else {
        const newCaldeirao = caldeirao.map(
          ingred => ingred.nome === ingrediente ? {...ingred, valor: quantidade} : ingred
        );
        setCaldeirao(newCaldeirao);
      };
    }
  };
  
  const getAllDoneRecipes = JSON.parse(localStorage.getItem('pocoes')) || [];
  // const receitaConhecida = JSON.parse(localStorage.getItem('receitasConhecidas')) || [];
  const getIngredientes = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];
  const getAllErvas = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];

  const preparaPocao = () => {
    getAllErvas.find((ingred) => {
      const verificaCaldeirao = caldeirao.find((ing) => ing.nome === ingred.nome)
      if(verificaCaldeirao){
        //MUDAR ISSO AQUI - COMPARAR SEM USAR STRINGIFY
        const receitaPreparada = grimorio.receitas.find((receita) => JSON.stringify(receita.ingredientes) === JSON.stringify(caldeirao));
        if(!receitaPreparada){
          global.alert('A Poção falhou');
          ingred.qtd -= verificaCaldeirao.qtd
          localStorage.setItem('armarioDeErvas', JSON.stringify([...getAllErvas]))
          setCaldeirao([]);
          return ingred
        }
        const encontraIngreds = getAllErvas.map((ingred) => {
          const ingredUsado = receitaPreparada.ingredientes.find((ing) => ing.nome === ingred.nome)
          if(ingredUsado){
            ingred.qtd -= ingredUsado.qtd;
          }
          return ingred;
        });
        const ingredRestantes = encontraIngreds.filter((ingred) => ingred.qtd > 0)
        localStorage.setItem('armarioDeErvas', JSON.stringify(ingredRestantes));
        getAllErvas.find((erva) => erva.nome === receitaPreparada.ingredientes.nome)
        localStorage.setItem('pocoes', JSON.stringify([...getAllDoneRecipes, receitaPreparada]));
        setCaldeirao([]);
        }});
  }

  const ordenaArmario = getIngredientes.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    return 0;
  });

  return (
    <main>
      <nav>
      <Link to="/grimorio">Grimório</Link>
      </nav>
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
      </label>
      <label htmlFor="quantidade">
        Quantidade:
        <input type="number" id="quantidade" onChange={(e) => setQuantidade(Number(e.target.value))}/>
      </label>
      <button type="button" onClick={adicionarIngredientes}>Adicionar ao caldeirão</button>
      <ul>Caldeirão:
        {caldeirao.length < 1 ? <li>Caldeirão Vazio</li> : caldeirao.map((caldeirao) => (
          <li key={caldeirao.nome}>
            {caldeirao.qtd}x: {caldeirao.nome}
          </li>
        ))}
      </ul>
      <button type="button" onClick={preparaPocao}>Preparar receita</button>
      <ArmarioDePocoes />
      <Jardim />
      <ArmarioDeErvas />
      <Grimorio />
    </main>
  )
}

export default Laboratorio;
