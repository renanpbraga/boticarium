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

  const receitasIniciais = {
    receitas: [
      {
        id: 1,
        nome: "Poção de cura (fraco)",
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
        nome: "Poção de cura (fraco)",
        valorMin: 2,
        valorMax: 4,
        preco: 10,
        xp: 100,
      },
      {
        id: 2,
        nome: "Poção de cura (médio)",
        valorMin: 4.1,
        valorMax: 4.5,
        preco: 50,
        xp: 200,
      },
      {
        id:3,
        nome: "Poção de cura (forte)",
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
        nome: "Veneno (médio)",
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
      descricao: "Planta herbácea conhecida por estar sempre próxima a um formigueiro. As formigas constroem seus ninhos próximos à amrita, pois quando outros insetos se alimentam das folhas dessa erva, ficam anestesiados. Tornando-se um alvo fácil para as formigas. Parte utilizada: Folhas.",
      efeitos: ["Anestésico"],
      valor: 0.1,
      img: amrita,
    },
    { 
      id: 2,
      nome: "Acallentum",
      descricao: "Planta arbórea de pequeno porte com conformação tortuosa e esgalhada. Seu caule apresenta casca delgada e lisa, que se solta conforme a planta se desenvolve. Suas cascas podem ser utilizadas em infusões. Seus efeitos reduzem os batimentos cardíacos, acalmando os ânimos de quem a consome. Parte utilizada: Casca",
      efeitos: ["Calmante"],
      valor: 0.3,
      img: acallentum,
    },
    { 
      id: 3,
      nome: "Kopheum",
      descricao: "Planta de hábito arbustivo com folhas ovaladas e escuras. Suas flores exalam um cheiro doce que atrai insetos que se alimentam de seu néctar. O extrato das flores de Kopheum tem efeito estimulante. Parte utilizada: Flores.",
      efeitos: ["Estimulante"],
      valor: 0.5,
      img: kopheum,
    },
    { 
      id: 4,
      nome: "Malorna",
      descricao: "Planta de hábito semi-arbustivo, possui folhas largas e estreladas. Seus frutos apresentam formato redondo com projeções pontiaguras. As sementes de Malorna maceradas e deixadas em infusão liberam toxinas. Parte utilizada: Sementes.",
      efeitos: ["Tóxico"],
      valor: 1,
      img: malorna,
    },
    {
      id: 5,
      nome: "Ignária",
      descricao: "Planta herbácea de cor vermelho-arroxeada. Exigente quanto à exposição à luz solar, produz frutos com cores que vão do vermelho ao roxo, raramente preto. Os frutos de Ignária secos e após, macerados em água e deixado para fermentar por dias, produzem um óleo superficial muito inflamável. O óleo de Ignária é utilizado como estimulante, afrodisíaco. Também pode ser utilizado como tempero em culinárias exóticas.",
      efeitos: ["Afrodisíaco", "Estimulante", "Inflamável"],
      valor: 2,
      img: ignaria,
    },
    {
      id: 6,
      nome: "Umumbuia",
      descricao: "Planta herbácea e robusta com folhas verde-escuro alternadas, comumente com manchas variegadas de cor branco-creme, em formato oblongo a elíptico. O extrato de Umumbuia macerada com auxílio de almofariz e pistilo e embebidas em álcool produzem um forte veneno. Parte utilizada: Folha.",
      efeitos: ["Tóxico"],
      valor: 5,
      img: umumbuia,
    },
    {
      id: 7,
      nome: "Amenária",
      descricao: "Planta herbácea de pequeno porte. Sua flores parecem plumas, que balançam com o vento, carregando um agradável aroma. As flores e folhas de Amenária maceradas com auxílio de almofariz e pistilo, produzem um poderoso cataplasma que pode ser aplicado em escoriações e ferimentos, auxiliando na cicatrização e redução da inflamação.",
      efeitos: ["Cicatrizante, Anti-inflamatório"],
      valor: -0.1,
      img: amenaria,
    },
    {
      id: 8,
      nome: "Empetrata",
      descricao: "Planta herbácea de pequeno porte. Possui raízes tão fortes que são capazer de perfurar a rocha. O chá de Petrata aumenta as resistências do corpo. Diz-se que quem faz uso contínuo dessa erva, fica resistente como pedra.",
      efeitos: ["Resistência"],
      valor: -0.3,
      img: empetrata,
    },
    {
      id: 9,
      nome: "Triticatum",
      descricao: "Descricao.",
      efeitos: ["efeito"],
      valor: -0.5,
      img: triticatum,
    },
    {
      id: 10,
      nome: "Witterina",
      descricao: "Descricao.",
      efeitos: ["efeito"],
      valor: -1,
      img: witterina,
    },
    {
      id: 11,
      nome: "Glicinólia",
      descricao: "descricao.",
      efeitos: ["efeito"],
      valor: -2,
      img: glicinolia,
    },
    {
      id: 12,
      nome: "Magnollum",
      descricao: "descricao.",
      efeitos: ["efeito"],
      valor: -5,
      img: magnollum,
    },
  ];

  const progressão = [
    { nivel: 1, xpMin: 0, xpMax: 100 },
    { nivel: 2, xpMin: 101, xpMax: 300 },
    { nivel: 3, xpMin: 301, xpMax: 600 },
    { nivel: 4, xpMin: 601, xpMax: 1000 },
    { nivel: 5, xpMin: 1001, xpMax: 1500 },
    { nivel: 6, xpMin: 1501, xpMax: 2100 },
    { nivel: 7, xpMin: 2101, xpMax: 2600 },
    { nivel: 8, xpMin: 2601, xpMax: 3300 },
    { nivel: 9, xpMin: 3301, xpMax: 4100 },
    { nivel: 10, xpMin: 4101, xpMax: 5000 },
  ];

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
