import React, { useContext } from 'react';
import BoticariumContext from '../context/BoticariumContext';

function Ervas({ match: { params } }) {

  const { jardim } = useContext(BoticariumContext)
  const ervaNome = params.erva;
  console.log(ervaNome);
  const erva = jardim.find((ingred) => ingred.nome === ervaNome);
  return (
    <div>
        <h1>{erva.nome}</h1>
        <p>{erva.descricao}</p>
        <img src={erva.img} width="400" alt={`Foto de ${erva.nome}`} />
      </div>
  )
}

export default Ervas;
