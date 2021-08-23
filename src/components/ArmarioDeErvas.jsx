import React from 'react';

function ArmarioDeErvas() {

  const getArmarioDeErvas = JSON.parse(localStorage.getItem('armarioDeErvas')) || [];

  return (
    <div>
      <ul>
        Armário de Ervas:
      {
        getArmarioDeErvas.length < 1 ? <li>Vazio...</li> :
          getArmarioDeErvas.map((erva) => (
            <li key={erva.id}>
              {`${erva.qtd}x ${erva.nome}`}
            </li>
        ))
      }      
      </ul>
    </div>
  )
}

export default ArmarioDeErvas;
