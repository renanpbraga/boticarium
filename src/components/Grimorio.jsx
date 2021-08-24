import React, { useContext } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function Grimorio() {
  const {receitasIniciais} = useContext(BoticariumContext);
  const getGrimorio = JSON.parse(localStorage.getItem('receitasConhecidas')) || [];
  if(getGrimorio.length < 1){
    const grimorioInicial = JSON.stringify(receitasIniciais.receitas);
    localStorage.setItem('receitasConhecidas', grimorioInicial);
  }

  return (
    <div>
      <ul>Grimório de receitas:</ul>
      {
        receitasIniciais.receitas.map((receita) => (
        (
          <ul>
            {receita.nome}
            <li>
              { receita.receita}
            </li>
          </ul>
        )))
      }
    </div>
  )
}

export default Grimorio;
