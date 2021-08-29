import React, {useContext, useState} from 'react';
import BoticariumContext from '../context/BoticariumContext';

function ArmarioDeErvas() {
  const {getIngredientes, ingrediente, setIngrediente} = useContext(BoticariumContext); 
  useState(() => {
    setIngrediente();
  },[ingrediente])

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
    <div className="armario-ervas">
      <ul>
        Armário de Ervas:
      {
        getIngredientes.length < 1 ? <li>Vazio...</li> :
          ordenaArmario.map((erva, index) => (
            <li key={index}>
              {`${erva.qtd}x ${erva.nome} (${erva.valor})`}
            </li>
        ))
      }      
      </ul>
    </div>
  )
}

export default ArmarioDeErvas;
