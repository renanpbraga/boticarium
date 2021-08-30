import React, {useContext, useState} from 'react';
import BoticariumContext from '../context/BoticariumContext';

function ArmarioDeErvas() {
  const {getIngredientes, ingrediente, setIngrediente, ordenar} = useContext(BoticariumContext); 
  useState(() => {
    setIngrediente();
  },[ingrediente])

  const ordenaArmariodeErvas = ordenar(getIngredientes);

  return (
    <div className="armario-ervas">
      <ul>
        Armário de Ervas:
      {
        getIngredientes.length < 1 ? <li>Vazio...</li> :
          ordenaArmariodeErvas.map((erva, index) => (
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
