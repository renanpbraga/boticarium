import React from 'react';

function ArmarioDeErvas() {

  const getArmarioDeErvas = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];

  return (
    <div>
      <ul>
        Armário de Ervas:
      {
        getArmarioDeErvas.length < 1 ? <li>Vazio...</li> :
          getArmarioDeErvas.map((erva, index) => (
            <li key={index}>
              {`${erva.qtd}x ${erva.nome}`}
            </li>
        )).sort()
      }      
      </ul>
    </div>
  )
}

export default ArmarioDeErvas;
