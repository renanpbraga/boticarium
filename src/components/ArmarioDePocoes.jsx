import React, { useState, useEffect } from 'react';

function ArmarioDePocoes() {
  const [itemsFromStorage, setItemsFromStorage] = useState([]);
  
  useEffect(() => {
    const setItems = () => {
      const getItemsFromStorage = JSON.parse(localStorage.getItem('pocoes'));
      setItemsFromStorage(getItemsFromStorage);
    };
    setItems();
  }, [itemsFromStorage]);

  if(itemsFromStorage === null) {
    return (
      <p>Armário vazio</p>
    );
  };

  return (
    <div>
      <ul>Armário de Poções:
        {
          itemsFromStorage.map((pocao) => (
            <li>{pocao.nome}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ArmarioDePocoes;
