import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoticariumContext from '../context/BoticariumContext';
import NavBar from './NavBar';

function Ervas({ match: { params } }) {

  const { jardim, getIngredientes, addIngredNoStorage,removerEspeciais } = useContext(BoticariumContext)
  
  const ervaNome = params.erva;
  const erva = getIngredientes.find((ingred) => ingred.nome === ervaNome);
  const ervaNoBd = jardim.find((ingred) => ingred.nome === ervaNome);
  
  const [palavra, setPalavra] = useState([]);
  const [erros, setErros] = useState(0);
  const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W' , 'X', 'Y', 'Z'];
  const enigma = removerEspeciais(erva.nome.toUpperCase());
  const splitErva = enigma.split('') 

  const verificaEnigma = splitErva.every((letra) => palavra.includes(letra));
  if(verificaEnigma && erva.conhecida === false){
    erva.conhecida = true;
    addIngredNoStorage(getIngredientes);
    global.alert('Você identificou a erva!');
  }

  const verificaPalavra = splitErva.find((letra) => palavra.includes(letra))
  useEffect(() => {
    if(!verificaPalavra){
      setErros(erros + 1);
    }
  },[])
  console.log(erros);

  return (
    <main>
      <div>
      <NavBar />
      </div>
      <section className="ervas-container">
        <section>
          <img src={ervaNoBd.img} width="400" alt={`Foto de ${erva.conhecida ? erva.nome : 'Erva Desconhecida'}`} />
        </section>
        <section>
          <div className="ervas-info">
            <h1>Nome: {erva.conhecida ? erva.nome : 'Erva desconhecida'}</h1>
            <p>Descrição: {erva.conhecida ? erva.descricao : '???'}</p>
            <p>Potencial alquímico: {erva.conhecida ? erva.valor : '???'}</p>
            <div className={erva.conhecida ? "inactive" : null}>
            <strong>Para identificar a erva, descubra seu nome:</strong>
              <span>
                {
                splitErva.map((letra) => (palavra.includes(letra) ? letra : ' _ '))
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
          </div>
        </section>
      </section>
    </main>
  )
}

Ervas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;

export default Ervas;
