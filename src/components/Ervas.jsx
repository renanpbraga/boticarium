import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BoticariumContext from '../context/BoticariumContext';
import NavBar from './NavBar';

function Ervas({ match: { params } }) {

  const { jardim, setIngredientes, getIngredientes } = useContext(BoticariumContext)

  const ervaNome = params.erva;
  const erva = getIngredientes.find((ingred) => ingred.nome === ervaNome);
  const ervaNoBd = jardim.find((ingred) => ingred.nome === ervaNome);

  const setEnigma = (enigma) => {
    console.log(enigma)
    if(enigma === erva.nome){
      global.alert('Você identificou a Erva')
      const ervaDesconhecida = getIngredientes.find((erva) => erva.nome === ervaNome);
      ervaDesconhecida.conhecida = true;
      setIngredientes(getIngredientes);
      window.location.reload(false); // rever como fazer usando useEffect
    }
    return enigma;
  };

    function shuffleWord (Word){
      let shuffledWord = '';
      Word = ervaNome.split('');
      while (Word.length > 0) {
        shuffledWord +=  Word.splice(Word.length * Math.random() << 0, 1);
      }
      return shuffledWord;
  }

  const ervaEmbaralhada = shuffleWord();

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
            <h1>{erva.conhecida ? erva.nome : ervaEmbaralhada}</h1>
            <p>{erva.conhecida ? ervaNoBd.descricao : 'Descrição: ???'}</p>
            <p>Potencial alquímico: {erva.conhecida ? ervaNoBd.valor : '???'}</p>
            <input onChange={(e) => setEnigma(e.target.value)} className={erva.conhecida ? "qualquer" : null}/>
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
