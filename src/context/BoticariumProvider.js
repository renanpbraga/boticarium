import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoticariumContext from './BoticariumContext';

function BoticariumProvider({children}) {
  const [ingrediente, setIngrediente] = useState();
  const [quantidade, setQuantidade] = useState();
  const [caldeirao, setCaldeirao] = useState([]);
  const [erva, setErva] = useState([]);
  
  const receitasIniciais = {
    receitas: [
      {
        id: 1,
        nome: "Poção de cura",
        ingredientes: [{
          ingrediente: "Camellia",
          quantidade: 2,
        }],
        receita:"2 unidades de Camellia."
      },
      {
        id: 2,
        nome: "Veneno",
        ingredientes: [{
          ingrediente: "Mamona",
          quantidade: 5,
        }],
        receita:"5 unidades de Mamona"
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
        receita:"2 unidades de Camellia; 2 unidades de Camomila"
      },
    ],
  };

  const grimorio = {
    receitas: [
      {
        id: 1,
        nome: "Poção de cura",
        ingredientes: [{
          ingrediente: "Camellia",
          quantidade: 2,
        }],
        receita:"2 unidades de Camellia."
      },
      {
        id: 2,
        nome: "Veneno",
        ingredientes: [{
          ingrediente: "Mamona",
          quantidade: 5,
        }],
        receita:"5 unidades de Mamona."
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
        receita:"2 unidades de Camellia; 2 unidades de Camomila."
      },
      {
        id: 4,
        nome: "Veneno Forte",
        ingredientes: [{
          ingrediente: "Mamona",
          quantidade: 5,
        },
        {
          ingrediente: "Comigo-ninguém-pode",
          quantidade: 2,
        }],
        receita:"5 unidades de Mamona; 2 unidades de Comigo-ninguém-pode."
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
    erva,
    setErva,
    jardim,
    receitasIniciais,
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
