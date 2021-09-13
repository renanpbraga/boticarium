import React from 'react';
import PropTypes from 'prop-types';
import '../inicio.css';


function Inicio({history}) {

  const jogar = () => {
    history.push('/laboratorio');
  }
  
  return (
    <main className="inicio-main-container">
      <p className="inicio-titulo">Boticarium</p>
      <button type="button" className="inicio-jogar-button" onClick={jogar}>Jogar</button>
    </main>
  )
}

Inicio.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Inicio;
