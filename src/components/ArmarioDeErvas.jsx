import React, {useContext} from 'react';
import BoticariumContext from '../context/BoticariumContext';

function ArmarioDeErvas() {

  const {getArmarioDeErvas} = useContext(BoticariumContext); 

  const ordenaArmario = getArmarioDeErvas.sort(function (a, b) {
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
      <ul>
        Armário de Ervas:
      {
        getArmarioDeErvas.length < 1 ? <li>Vazio...</li> :
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
