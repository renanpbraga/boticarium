import React, { useContext, useState } from 'react';
import BoticariumContext from '../context/BoticariumContext';
import NavBar from './NavBar';

function Grimorio() {
  
  const[isActive, setIsActive] = useState("false");
  // const[receitas, setReceitas] = useState(false);
  // console.log(ervas, 'ERVAS');
  // console.log(receitas, 'RECEITAS');
  
  const handleToggle = () => {
    setIsActive(isActive === "" ? "active" : "");
  };
  
  // const toggleClass = (ervas, receitas) => {
  //   if(ervas === false){
  //     setErvas(true);
  //   } else if(ervas === true) {
  //     setErvas(false);
  //   }
  //   if(!receitas){
  //     setReceitas(true);
  //   } else {
  //     setReceitas(false);
  //   };
  // };

  const {receitasIniciais, jardim} = useContext(BoticariumContext);
  const getGrimorio = JSON.parse(localStorage.getItem('receitasConhecidas')) || [];
  if(getGrimorio.length < 1){
    const grimorioInicial = JSON.stringify(receitasIniciais.receitas);
    localStorage.setItem('receitasConhecidas', grimorioInicial);
  }
  
  return (
    <main>
      <NavBar />
      <ul>Grimório</ul>
      <section>
        <button
          type="button"
          name="ervas"
          onClick={handleToggle}
        >
          Ervas
        </button>
        <button
          type="button"
          name="receitas"
          onClick={handleToggle}
        >
          Receitas conhecidas
        </button>
      </section>
      <section name="jardim" className={isActive ? "active" : "inactive"}>
      {
        jardim.map((erva) => (
          (
            <ul key={erva.nome}>
            <img src={erva.img} width="100" alt={erva.nome}/>
            {erva.nome}
            <li key={erva.id}>
              {erva.descricao}
            </li>
          </ul>
        )))
      }
      </section>
      <section className={isActive ? "inactive" : "active"}>
      {
        receitasIniciais.receitas.map((receita) => (
        (
          <ul key={receita.nome}>
            {receita.nome}
            <li key={receita.id}>
              Potencial: {receita.valorMin} ~ {receita.valorMax}
            </li>
          </ul>
        )))
      }
      </section>
    </main>
  )
}

export default Grimorio;
