import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoticariumContext from './BoticariumContext';
import amrita from '../img/amrita.jpg';
import acallentum from '../img/acallentum.jpg';
import kopheum from '../img/kopheum.jpg';
import malorna from '../img/malorna.jpg';
import ignaria from '../img/ignaria.jpg';
import umumbuia from '../img/umumbuia.jpg';
import amenaria from '../img/amenaria.jpg';
import empetrata from '../img/empetrata.jpg';
import triticatum from '../img/triticatum.jpg';
import witterina from '../img/witterina.jpg';
import glicinolia from '../img/glicinolia.jpg';
import magnollum from '../img/magnollum.png';

function BoticariumProvider({children}) {
  const [user, setUser] = useState();
  const [ingrediente, setIngrediente] = useState();
  const [quantidade, setQuantidade] = useState();
  const [caldeirao, setCaldeirao] = useState([]);
  const [erva, setErva] = useState([]);

  const setIngredientes = (novoIngrediente) => {
    localStorage.setItem('ervas', JSON.stringify(novoIngrediente));
  };

  const setPocao = (novaPocao) => {
    localStorage.setItem('pocoes', JSON.stringify(novaPocao));
  };

  const setUserInfo = (xp) => {
    localStorage.setItem('user', JSON.stringify(xp));
  }

  const getUserInfo = JSON.parse(localStorage.getItem('user')) || {};
  const getIngredientes = JSON.parse(localStorage.getItem('ervas')) || [];
  const getPocao = JSON.parse(localStorage.getItem('pocoes')) || [];

  const ordenar = (array) => {
    const ordenaArmario = array.sort(function (a, b) {
      if (a.nome > b.nome) {
        return 1;
      }
      if (a.nome < b.nome) {
        return -1;
      }
      return 0;
    });
    return ordenaArmario;
  }

//   function embaralhar (palavra){
//     let palavraEmbaralhada = '';
//     palavra = palavra.split('');
//     while (palavra.length > 0) {
//       palavraEmbaralhada +=  palavra.splice(palavra.length * Math.random() << 0, 1);
//     }
//     return palavraEmbaralhada;
// }

const stringToArray = (string) => {
  return string.split(' ');
}

function embaralhar(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle???
  while (m) {

    // Pick a remaining element???
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

  const receitasIniciais = {
    receitas: [
      {
        id: 1,
        nome: "Po????o de cura (fraco)",
        valorMin: 2,
        valorMax: 4,
        preco: 10,
        xp: 100,
      },
      {
        id:4,
        nome: "Veneno (fraco)",
        valorMin: -4,
        valorMax: -2,
        preco: 10,
        xp: 100,
      },
    ],
  };

  const grimorio = {
    receitas: [
      {
        id: 1,
        nome: "Po????o de cura (fraco)",
        valorMin: 2,
        valorMax: 4,
        preco: 10,
        xp: 100,
      },
      {
        id: 2,
        nome: "Po????o de cura (m??dio)",
        valorMin: 4.1,
        valorMax: 4.5,
        preco: 50,
        xp: 200,
      },
      {
        id:3,
        nome: "Po????o de cura (forte)",
        valorMin: 4.51,
        valorMax: 4.52,
        preco: 100,
        xp: 300
      },
      {
        id:4,
        nome: "Veneno (fraco)",
        valorMin: -4,
        valorMax: -2,
        preco: 10,
        xp: 100,
      },
      {
        id:4,
        nome: "Veneno (m??dio)",
        valorMin: -4.5,
        valorMax: -4.1,
        preco: 50,
        xp: 200,
      },
      {
        id:4,
        nome: "Veneno (forte)",
        valorMin: -4.52,
        valorMax: -4.51,
        preco: 100,
        xp: 300,
      },
    ],  
  };

  const jardim = [
    { 
      id: 1,
      nome: "Amrita",
      descricao: "Planta herb??cea conhecida por estar sempre pr??xima a um formigueiro. As formigas constroem seus ninhos pr??ximos ?? amrita, pois quando outros insetos se alimentam das folhas dessa erva, ficam anestesiados. Tornando-se um alvo f??cil para as formigas. Parte utilizada: Folhas.",
      efeitos: ["Anest??sico"],
      valor: 0.1,
      img: amrita,
      conhecida: false,
    },
    { 
      id: 2,
      nome: "Acallentum",
      descricao: "Planta arb??rea de pequeno porte com conforma????o tortuosa e esgalhada. Seu caule apresenta casca delgada e lisa, que se solta conforme a planta se desenvolve. Suas cascas podem ser utilizadas em infus??es. Seus efeitos reduzem os batimentos card??acos, acalmando os ??nimos de quem a consome. Parte utilizada: Casca",
      efeitos: ["Calmante"],
      valor: 0.3,
      img: acallentum,
      conhecida: false,
    },
    { 
      id: 3,
      nome: "Kopheum",
      descricao: "Planta de h??bito arbustivo com folhas ovaladas e escuras. Suas flores exalam um cheiro doce que atrai insetos que se alimentam de seu n??ctar. O extrato das flores de Kopheum tem efeito estimulante. Parte utilizada: Flores.",
      efeitos: ["Estimulante"],
      valor: 0.5,
      img: kopheum,
      conhecida: false,
    },
    { 
      id: 4,
      nome: "Malorna",
      descricao: "Planta de h??bito semi-arbustivo, possui folhas largas e estreladas. Seus frutos apresentam formato redondo com proje????es pontiaguras. As sementes de Malorna maceradas e deixadas em infus??o liberam toxinas. Parte utilizada: Sementes.",
      efeitos: ["T??xico"],
      valor: 1,
      img: malorna,
      conhecida: true,
    },
    {
      id: 5,
      nome: "Ign??ria",
      descricao: "Planta herb??cea de cor vermelho-arroxeada. Exigente quanto ?? exposi????o ?? luz solar, produz frutos com cores que v??o do vermelho ao roxo, raramente preto. Os frutos de Ign??ria secos e ap??s, macerados em ??gua e deixado para fermentar por dias, produzem um ??leo superficial muito inflam??vel. O ??leo de Ign??ria ?? utilizado como estimulante, afrodis??aco. Tamb??m pode ser utilizado como tempero em culin??rias ex??ticas.",
      efeitos: ["Afrodis??aco", "Estimulante", "Inflam??vel"],
      valor: 2,
      img: ignaria,
      conhecida: false,
    },
    {
      id: 6,
      nome: "Umumbuia",
      descricao: "TESTE DE DESCRICAO",
      efeitos: ["T??xico"],
      valor: 5,
      img: umumbuia,
      conhecida: false,
    },
    {
      id: 7,
      nome: "Amen??ria",
      descricao: "Planta herb??cea de pequeno porte. Sua flores parecem plumas, que balan??am com o vento, carregando um agrad??vel aroma. As flores e folhas de Amen??ria maceradas com aux??lio de almofariz e pistilo, produzem um poderoso cataplasma que pode ser aplicado em escoria????es e ferimentos, auxiliando na cicatriza????o e redu????o da inflama????o.",
      efeitos: ["Cicatrizante, Anti-inflamat??rio"],
      valor: -0.1,
      img: amenaria,
      conhecida: false,
    },
    {
      id: 8,
      nome: "Empetrata",
      descricao: "Planta herb??cea de pequeno porte. Possui ra??zes t??o fortes que s??o capazer de perfurar a rocha. O ch?? de Petrata aumenta as resist??ncias do corpo. Diz-se que quem faz uso cont??nuo dessa erva, fica resistente como pedra.",
      efeitos: ["Resist??ncia"],
      valor: -0.3,
      img: empetrata,
      conhecida: false,
    },
    {
      id: 9,
      nome: "Triticatum",
      descricao: "Descricao.",
      efeitos: ["efeito"],
      valor: -0.5,
      img: triticatum,
      conhecida: false,
    },
    {
      id: 10,
      nome: "Witterina",
      descricao: "Descricao.",
      efeitos: ["efeito"],
      valor: -1,
      img: witterina,
      conhecida: true,
    },
    {
      id: 11,
      nome: "Glicin??lia",
      descricao: "descricao.",
      efeitos: ["efeito"],
      valor: -2,
      img: glicinolia,
      conhecida: false,
    },
    {
      id: 12,
      nome: "Magnollum",
      descricao: "descricao.",
      efeitos: ["efeito"],
      valor: -5,
      img: magnollum,
      conhecida: false,
    },
  ];

  // const progress??o = [
  //   { nivel: 1, xpMin: 0, xpMax: 100 },
  //   { nivel: 2, xpMin: 101, xpMax: 300 },
  //   { nivel: 3, xpMin: 301, xpMax: 600 },
  //   { nivel: 4, xpMin: 601, xpMax: 1000 },
  //   { nivel: 5, xpMin: 1001, xpMax: 1500 },
  //   { nivel: 6, xpMin: 1501, xpMax: 2100 },
  //   { nivel: 7, xpMin: 2101, xpMax: 2600 },
  //   { nivel: 8, xpMin: 2601, xpMax: 3300 },
  //   { nivel: 9, xpMin: 3301, xpMax: 4100 },
  //   { nivel: 10, xpMin: 4101, xpMax: 5000 },
  // ];

  const context =  {
    user,
    setUser,
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
    getIngredientes,
    setIngredientes,
    getPocao,
    setPocao,
    getUserInfo,
    setUserInfo,
    ordenar,
    stringToArray,
    embaralhar,
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
