import React, {useState} from 'react';

function Laboratorio() {
  const [ingrediente, setIngrediente] = useState('Camellia');
  const [quantidade, setQuantidade] = useState();
  const [caldeirao, setCaldeirao] = useState([]);

  const adicionarIngredientes = () => {
    if(caldeirao.includes(ingrediente) === false && quantidade > 0){
      const novoIngrediente = {
        ingrediente,
        quantidade,
      };
      setCaldeirao([...caldeirao, novoIngrediente]);
    }
  };
  return (
    <div>
      <label htmlFor="ingrediente">
        Ingrediente:
        <select id="ingrediente" onChange={(e) => setIngrediente(e.target.value)}>
          <option>Camellia</option>
          <option>Mamona</option>
          <option>Camomila</option>
          <option>Coffea</option>
        </select>
      </label>
      <label htmlFor="quantidade">
        Quantidade:
        <input type="number" id="quantidade" onChange={(e) => setQuantidade(e.target.value)}/>
      </label>
      <button type="button" onClick={adicionarIngredientes}>Adicionar ao caldeirão</button>
      <ul>
        {!caldeirao ? <p>Vazio</p> : caldeirao.map((caldeirao, index) => (
          <li key={caldeirao.ingrediente[index]}>
            {caldeirao.quantidade}x: {caldeirao.ingrediente}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Laboratorio;
