import React, { useState, useEffect } from 'react'

function Teste() {
  const [palavra, setPalavra] = useState([])
  const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W' , 'X', 'Y', 'Z']
  const enigma = 'TERRA';
  const splitEnigma = enigma.split('');
  console.log(splitEnigma);
  console.log(palavra);

  useEffect(() => {
    setPalavra();
  },[palavra]);

  return (
    <div>
        <span>
          {
           palavra ? enigma.split('').map((letra) => (palavra.includes(letra) ? letra : ' _ ')) : null
          }
        </span>
      {
        alfabeto.map((letra, index) => (
          <button
            type="button"
            key={index}
            name={letra}
            onClick={e => setPalavra([...palavra, e.target.name])}
          >
            {letra}
          </button>
        ))
      }
    </div>
  )
}

export default Teste;
