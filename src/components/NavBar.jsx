import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/laboratorio">Laboratório</Link>
      <Link to="/jardim">Jardim</Link>
      <Link to="/grimorio">Grimório</Link>
    </div>
  )
}

export default NavBar;