import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import BoticariumContext from '../context/BoticariumContext';
import NavBar from './NavBar';

function Grimorio() {
  
  const[isActive, setIsActive] = useState("false");
  
  const handleToggle = () => {
    setIsActive(isActive === "" ? "active" : "");
  };

  const {receitasIniciais, ordenar, getIngredientes} = useContext(BoticariumContext);
  const getGrimorio = JSON.parse(localStorage.getItem('receitasConhecidas')) || [];
  if(getGrimorio.length < 1){
    const grimorioInicial = JSON.stringify(receitasIniciais.receitas);
    localStorage.setItem('receitasConhecidas', grimorioInicial);
  }
  
  const jardimOrdenado = ordenar(getIngredientes); 
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
      <div className="armario-ervas">
      <ul>
        Armário de Ervas:
      {
        jardimOrdenado.map((erva, index) => (
            <li key={index}>
              <Link to={`/grimorio/${erva.nome}`}>
              {erva.conhecida ? erva.nome : 'Erva Desconhecida'}
              </Link>
            </li>
        ))
      }      
      </ul>
    </div>
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
