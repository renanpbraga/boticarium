import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoticariumContext from './BoticariumContext';

function BoticariumProvider({children}) {
  const [ingrediente, setIngrediente] = useState('Camellia');
  const [quantidade, setQuantidade] = useState();
  const [caldeirao, setCaldeirao] = useState([]);
  const [ervas, setErvas] = useState([]);
  
  const grimorio = {
    receitas: [
      {
        id: 1,
        nome: "Poção de cura",
        ingredientes: [{
          ingrediente: "Camellia",
          quantidade: 2,
        }],
      },
      {
        id: 2,
        nome: "Veneno",
        ingredientes: [{
          ingrediente: "Mamona",
          quantidade: 5,
        }],
      },
      {
        id: 3,
        nome: "Calmante",
        ingredientes: [{
          ingrediente: "Camellia",
          quantidade: 2,
        },
        {
          ingrediente: "Camomila",
          quantidade: 2,
        }],
      },
    ],
  };

  const jardim = [
    { id: 1, nome: "Camellia" },
    { id: 2, nome: "Camomila" },
    { id: 3, nome: "Coffea" },
    { id: 4, nome: "Mamona" },
    { id: 5, nome: "Ora-pro-nóbis" },
    { id: 6, nome: "Comigo-ninguém-pode" },
    { id: 7, nome: "Capim-limão" },
    { id: 8, nome: "Allamanda" },
  ];

  const context =  {
    ingrediente,
    setIngrediente,
    quantidade,
    setQuantidade,
    caldeirao,
    setCaldeirao,
    grimorio,
    ervas,
    setErvas,
    jardim,
  };

  return (
    <div>
      <BoticariumContext.Provider value={ context }>
        { children }
      </BoticariumContext.Provider>    
    </div>
  )
}

BoticariumProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoticariumProvider;
