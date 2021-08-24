import React from 'react';

function ArmarioDePocoes() {

  const getArmarioDePocoes = JSON.parse(localStorage.getItem('pocoes')) || [];

  const ordenaArmario = getArmarioDePocoes.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    return 0;
  });

  return (
    <div>
      <ul className="texto-negrito">
        Armário de Poções:
        {
          getArmarioDePocoes.length < 1 ? <li>Vazio...</li> :
          ordenaArmario.map((pocao, index) => (
            <li key={index}>{pocao.nome}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ArmarioDePocoes;
