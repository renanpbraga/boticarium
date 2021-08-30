import React, { useContext } from 'react';
import BoticariumContext from '../context/BoticariumContext';
import ArmarioDeErvas from './ArmarioDeErvas';
import ArmarioDePocoes from './ArmarioDePocoes';
import NavBar from './NavBar';
import caldeiraoImg from '../img/caldeiraoimg.png';
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
    setIngredientes,
    getUserInfo,
    setUserInfo,
    receitasIniciais,
  } = useContext(BoticariumContext);


  const getUser = () => {
    const getUserFromStorage = localStorage.getItem('user');
    if(!getUserFromStorage){
      localStorage.setItem('user', JSON.stringify({
        nivel: 1,
        xp: 0,
        ouro: 0,
        prestigio: 0,
        receitasConhecidas:[...receitasIniciais.receitas],
      }));
      const ervasIniciais =[
        {
          nome: 'Malorna',
          qtd: 5,
          valor: 1,
          conhecida: true,
        },
        {
          nome: 'Witterina',
          qtd: 5,
          valor: -1,
          conhecida: true,
        },
      ];
      getIngredientes.push(...ervasIniciais);
      setIngredientes(getIngredientes);
    };
  };
  getUser();
  console.log(ingrediente);
  const adicionarIngredientes = () => {
    //special thanks to Eduardo Santos(https://github.com/EduardoSantosF)
    const addIngrediente = getIngredientes.find((ingred) => ingred.nome === ingrediente); 
    if(!addIngrediente){
      setIngrediente('');
      return global.alert('Você deve adicionar algum ingrediente.');
    }
    const novoIngrediente = {
      nome: addIngrediente.nome ,
      valor: addIngrediente.valor,
    };
    if(getIngredientes.find((erva) => erva.nome === ingrediente && erva.qtd === 0)){
      global.alert(`Você não possui ${ingrediente} suficiente`)
    } else {
        setCaldeirao([...caldeirao, novoIngrediente]);
        const encontraIngrediente = getIngredientes.find((ingred) => ingred.nome === ingrediente);
        encontraIngrediente.qtd -= 1
        const ingredRestante = getIngredientes.filter((ingred) => ingred.qtd > 0);
        setIngredientes(ingredRestante);
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
    return result + number;
    };
  const sumNumbers = arrayValores.reduce(getSum, 0);
  const sumNumbersFixed = sumNumbers.toFixed(2)

  const preparaPocao = () => {
    if(sumNumbersFixed === 0){
      return;
    } else{
      const encontraPocao = grimorio.receitas.find((pocao) =>
      sumNumbersFixed >= pocao.valorMin && sumNumbersFixed <= pocao.valorMax)
      if(encontraPocao){
        getPocao.push(encontraPocao);
        setPocao(getPocao) //localstorage pocoes
        setCaldeirao([]);
        global.alert(`Você preparou ${encontraPocao.nome}`)
        const verificaReceitaConhecida = getUserInfo.receitasConhecidas.find((pocao) =>
          JSON.stringify(pocao) === JSON.stringify(encontraPocao));
        if(verificaReceitaConhecida){
          getUserInfo.xp += verificaReceitaConhecida.xp;
          setUserInfo(getUserInfo);
        } else {
          getUserInfo.xp += (getPocao[0].xp + 100);
          setUserInfo(getUserInfo);
        }
      } else {
        setCaldeirao([]);
        return global.alert('A receita falhou.');
      };
    };
  };
  
  const addAgua = () => {
    const valor = -0.01;
    const valorFixed = Number(valor.toFixed(2));

    const agua = {
      nome: "Água",
      valor: valorFixed,
    }
    if(caldeirao.length > 0){
      setCaldeirao([...caldeirao, agua]);;
    } else {
      global.alert('Não há o que diluir...')
    };
  };

  const concentrar = () => {
    const concentrador = {
      nome: "Concentrador",
      qtd: 5,
      valor: 0.05,
    }
    getIngredientes.push(concentrador);
    setIngredientes(getIngredientes)
  }

  const descartaCaldeirao = () => {
    setCaldeirao([]);
  }

  const findValor = jardim.find((ingred) => ingred.nome === ingrediente)||'';
  return (
    <main className="main-container">
      <nav>
        <NavBar />
      </nav>
      <section className="ingredient-select">
        <label htmlFor="ingrediente">
          Ingrediente:
          <select id="ingrediente" onChange={(e) => setIngrediente(e.target.value)}>
              <option />
            {
              ordenaArmario.map((ingrediente, index) => (
                <option key={index}>{ingrediente.conhecida ? ingrediente.nome : 'Erva desconhecida'}</option>
              )).sort()
            }
          </select>
        </label>
          <p>
            Potencial:{findValor.valor}
          </p>
        <button type="button" onClick={adicionarIngredientes}>Adicionar ao caldeirão</button>
      </section>
      <section className="caldeirao-container">
        <img src={caldeiraoImg} width="200" alt="caldeirao" className="caldeirao-img"/>
        <ul>Caldeirão:
          {caldeirao.length < 1 ? <li>Caldeirão Vazio</li> : caldeirao.map((ingred, index) => (
          <li key={index}>
            {ingred.nome} 
          </li>
          ))}
        </ul>
        <ul>Total: {sumNumbersFixed}</ul>
        <div className="caldeirao-buttons">
          <button type="button" onClick={addAgua}>Adicionar Água</button>
          <button type="button" onClick={concentrar}>Concentrar</button>
          <button type="button" onClick={preparaPocao}>Preparar receita</button>
          <button type="button" onClick={descartaCaldeirao}>Descartar caldeirão</button>
        </div>
      </section>
      <section>
      </section>
      <section className="armarios-container">
        <ArmarioDeErvas />
        <ArmarioDePocoes />
      </section>
    </main>
  )
}

export default Laboratorio2;
