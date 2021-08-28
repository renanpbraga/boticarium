import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoticariumContext from './BoticariumContext';

function BoticariumProvider({children}) {
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
  
  const getIngredientes = JSON.parse(localStorage.getItem('ervas')) || [];
  const getArmarioDeErvas = JSON.parse(localStorage.getItem('ervas')) || [];
  const getPocao = JSON.parse(localStorage.getItem('pocoes')) || [];
  
  const receitasIniciais = {
    receitas: [
      {
        id: 1,
        nome: "Cataplasma de Amenária (fraco)",
        ingredientes: [{
          nome: "Amenária",
          qtd: 2,
        }],
        receita:"2 unidades de Amenária."
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
      },
      {
        id: 2,
        nome: "Veneno (fraco)",
        valorMin: -4,
        valorMax: -2,
        preco: 10
      },
      {
        id:3,
        nome: "Óleo alquímico inflamável (fraco)",
        valorMin: 5,
        valorMax: 7,
      },
      {
        id:4,
        nome: "Elixir congelante (fraco)",
        valorMin: -7,
        valorMax: -5,
      },
      {
        id:5,
        nome: "Poção do crescimento (fraco)",
        valorMin: 8,
        valorMax: 10,
      },
      {
        id:6,
        nome: "Fertilizante Alquímico (fraco)",
        valorMin: -10,
        valorMax: -8,
      },
      {
        id:7,
        nome: "Tônico capilar (fraco)",
        valorMin: 11,
        valorMax: 13,
      },
      {
        id:8,
        nome: "Essência do Amor (fraco)",
        valorMin: -15,
        valorMax: -11,
      },
    ],  
  };

  const jardim = [
    { 
      id: 1,
      nome: "Phormicum",
      descricao: "Planta herbácea conhecida por estar sempre próxima a um formigueiro. As formigas constroem seus ninhos próximos à Phormicum, pois quando outros insetos se alimentam das folhas dessa erva, ficam anestesiados. Tornando-se um alvo fácil para as formigas. Parte utilizada: Folhas.",
      efeitos: ["Anestésico"],
      valor: -10,
    },
    { 
      id: 2,
      nome: "Acallentum",
      descricao: "Planta arbórea de pequeno porte com conformação tortuosa e esgalhada. Seu caule apresenta casca delgada e lisa, que se solta conforme a planta se desenvolve. Suas cascas podem ser utilizadas em infusões. Seus efeitos reduzem os batimentos cardíacos, acalmando os ânimos de quem a consome. Parte utilizada: Casca",
      efeitos: ["Calmante"],
      valor: -8,
    },
    { 
      id: 3,
      nome: "Kopheum",
      descricao: "Planta de hábito arbustivo com folhas ovaladas e escuras. Suas flores exalam um cheiro doce que atrai insetos que se alimentam de seu néctar. O extrato das flores de Kopheum tem efeito estimulante. Parte utilizada: Flores.",
      efeitos: ["Estimulante"],
      valor: -6,
    },
    { 
      id: 4,
      nome: "Riccinum",
      descricao: "Planta de hábito semi-arbustivo, possui folhas largas e estreladas. Seus frutos apresentam formato redondo com projeções pontiaguras. As sementes de Riccinum maceradas e deixadas em infusão liberam toxinas. Parte utilizada: Sementes.",
      efeitos: ["Tóxico"],
      valor: -4
    },
    {
      id: 5,
      nome: "Ignária",
      descricao: "Planta herbácea de cor vermelho-arroxeada. Exigente quanto à exposição à luz solar, produz frutos com cores que vão do vermelho ao roxo, raramente preto. Os frutos de Ignária secos e após, macerados em água e deixado para fermentar por dias, produzem um óleo superficial muito inflamável. O óleo de Ignária é utilizado como estimulante, afrodisíaco. Também pode ser utilizado como tempero em culinárias exóticas.",
      efeitos: ["Afrodisíaco", "Estimulante", "Inflamável"],
      valor: -2,
    },
    {
      id: 6,
      nome: "Umumbuia",
      descricao: "Planta herbácea e robusta com folhas verde-escuro alternadas, comumente com manchas variegadas de cor branco-creme, em formato oblongo a elíptico. O extrato de Umumbuia macerada com auxílio de almofariz e pistilo e embebidas em álcool produzem um forte veneno. Parte utilizada: Folha.",
      efeitos: ["Tóxico"],
      valor: -1,
    },
    {
      id: 7,
      nome: "Amenária",
      descricao: "Planta herbácea de pequeno porte. Sua flores parecem plumas, que balançam com o vento, carregando um agradável aroma. As flores e folhas de Amenária maceradas com auxílio de almofariz e pistilo, produzem um poderoso cataplasma que pode ser aplicado em escoriações e ferimentos, auxiliando na cicatrização e redução da inflamação.",
      efeitos: ["Cicatrizante, Anti-inflamatório"],
      valor: 1,
    },
    {
      id: 8,
      nome: "Empetrata",
      descricao: "Planta herbácea de pequeno porte. Possui raízes tão fortes que são capazer de perfurar a rocha. O chá de Petrata aumenta as resistências do corpo. Diz-se que quem faz uso contínuo dessa erva, fica resistente como pedra.",
      efeitos: ["Resistência"],
      valor: 2,
    },
    {
      id: 9,
      nome: "Triticatum",
      descricao: "Descricao.",
      efeitos: ["efeito"],
      valor: 4,
    },
    {
      id: 10,
      nome: "Witterina",
      descricao: "Descricao.",
      efeitos: ["efeito"],
      valor: 6,
    },
    {
      id: 11,
      nome: "Glicinólia",
      descricao: "descricao.",
      efeitos: ["efeito"],
      valor: 8,
    },
    {
      id: 8,
      nome: "Oripteria",
      descricao: "descricao",
      efeitos: ["efeito"],
      valor: 10,
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
    getArmarioDeErvas,
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
