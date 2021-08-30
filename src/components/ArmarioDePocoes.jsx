import React, { useContext } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function ArmarioDePocoes() {
  const {ordenar, getPocao} = useContext(BoticariumContext);

  const ordenaArmarioDePocoes = ordenar(getPocao)

  return (
    <div>
      <ul className="texto-negrito">
        Armário de Poções:
        {
          getPocao.length < 1 ? <li>Vazio...</li> :
          ordenaArmarioDePocoes.map((pocao, index) => (
            <li key={index}>{pocao.nome}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ArmarioDePocoes;
