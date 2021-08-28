import React, { useState } from 'react';

function Login({history}) {
  const [user, setUser] = useState();
  console.log(user);
  
  localStorage.setItem('user', JSON.stringify({
    nome: user,
    nivel: 1,
    xp: 0,
    ouro: 0,
    prestigio: 0
  }));

  const doLogin = () => {
    history.push('/laboratorio');
  }

  return (
    <div>
      <label htmlFor="nome">
        Digite seu nome:
      </label>
      <input type= "text" id="nome" name="nome" onChange={(e) => setUser(e.target.value)}/>
      <button type="button" onClick={doLogin}>Entrar</button>
    </div>
  )
}

export default Login;
