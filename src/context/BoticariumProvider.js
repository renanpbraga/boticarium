import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoticariumContext from './BoticariumContext';

function BoticariumProvider({children}) {
  const [ingrediente, setIngrediente] = useState();
  const [quantidade, setQuantidade] = useState();
  const [caldeirao, setCaldeirao] = useState([]);
  const [erva, setErva] = useState([]);
  
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
      {
        id: 4,
        nome: "Veneno (fraco)",
        ingredientes: [{
          nome: "Riccinum",
          qtd: 5,
        }],
        receita:"5 unidades de Riccinum."
      },
      {
        id: 7,
        nome: "Chá de Acalentum (fraco)",
        ingredientes: [{
          nome: "Acalentum",
          qtd: 2,
        }],
        receita:"2 unidades de Acalentum"
      },
    ],
  };

  const grimorio = {
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
      {
        id: 2,
        nome: "Tintura de Amenária (médio)",
        ingredientes: [{
          nome: "Amenária",
          qtd: 4,
        },
        {
          nome: "Phormicum",
          qtd: 2,
        }],
        receita:"4 unidades de Amenária, 2 unidades de Phormicum."
      },
      {
        id: 3,
        nome: "Elixir de Amenária (forte)",
        ingredientes: [{
          nome: "Amenária",
          qtd: 8,
        },
        {
          nome: "Phormicum",
          qtd: 4,
        }],
        receita:"8 unidades de Amenária, 4 unidades de Phormicum."
      },
      {
        id: 4,
        nome: "Veneno (fraco)",
        ingredientes: [{
          nome: "Riccinum",
          qtd: 5,
        }],
        receita:"5 unidades de Riccinum."
      },
      {
        id: 5,
        nome: "Veneno (médio)",
        ingredientes: [{
          nome: "Riccinum",
          qtd: 5,
        },
        {
          nome: "Umumbuia",
          qtd: 2,
        }],
        receita:"5 unidades de Riccinum, 2 unidades de Umumbuia."
      },
      {
        id: 6,
        nome: "Veneno (forte)",
        ingredientes: [{
          nome: "Riccinum",
          qtd: 10,
        },
        {
          nome: "Umumbuia",
          qtd: 5,
        }],
        receita:"10 unidades de Riccinum, 5 unidades de Umumbuia."
      },
      {
        id: 7,
        nome: "Chá de Acalentum (fraco)",
        ingredientes: [{
          nome: "Acallentum",
          qtd: 2,
        }],
        receita:"2 unidades de Acalentum"
      },
      {
        id: 8,
        nome: "Chá de Acalentum (médio)",
        ingredientes: [{
          nome: "Acalentum",
          qtd: 6,
        }],
        receita:"6 unidades de Acalentum."
      },
      {
        id: 9,
        nome: "Chá de Acalentum (forte)",
        ingredientes: [{
          nome: "Acalentum",
          qtd: 10,
        }],
        receita:"10 unidades de Acalentum"
      },
      {
        id: 10,
        nome: "Chá Estimulante (fraco)",
        ingredientes: [{
          nome: "Kopheum",
          qtd: 2,
        }],
        receita:"2 unidades de Kopheum"
      },
      {
        id: 11,
        nome: "Tintura Estimulante (médio)",
        ingredientes: [{
          nome: "Kopheum",
          qtd: 5,
        }],
        receita:"5 unidades de Kopheum"
      },
      {
        id: 12,
        nome: "Extrato Estimulante (forte)",
        ingredientes: [{
          nome: "Kopheum",
          qtd: 10,
        }],
        receita:"10 unidades de Kopheum"
      },
      {
        id: 13,
        nome: "Colônia do romance(fraco)",
        ingredientes: [{
          nome: "Kopheum",
          qtd: 2,
        },
        {
          nome: "Ignária",
          qtd: 1,
        }],
        receita:"2 unidades de Kopheum, 1 unidade de Ignária."
      },
      {
        id: 14,
        nome: "Fragrância do Atração(médio)",
        ingredientes: [{
          nome: "Kopheum",
          qtd: 5,
        },
        {
          nome: "Ignária",
          qtd: 5,
        }],
        receita:"5 unidades de Kopheum, 5 unidades de Ignária."
      },
      {
        id: 15,
        nome: "Perfume do Amor(forte)",
        ingredientes: [{
          nome: "Kopheum",
          qtd: 10,
        },
        {
          nome: "Ignária",
          qtd: 8,
        }],
        receita:"10 unidades de Kopheum, 8 unidades de Ignária."
      },
      {
        id: 16,
        nome: "Óleo de Ignária (fraco)",
        ingredientes: [{
          nome: "Ignária",
          qtd: 10,
        }],
        receita:"10 unidades de Ignária."
      },
      {
        id: 17,
        nome: "Óleo de Ignária (médio)",
        ingredientes: [{
          nome: "Ignária",
          qtd: 20,
        }],
        receita:"20 unidades de Ignária."
      },
      {
        id: 18,
        nome: "Óleo de Ignária (forte)",
        ingredientes: [{
          nome: "Ignária",
          qtd: 30,
        }],
        receita:"30 unidades de Ignária."
      },
    ],
  };

  const jardim = [
    { 
      id: 1,
      nome: "Phormicum",
      descricao: "Planta herbácea conhecida por estar sempre próxima a um formigueiro. As formigas constroem seus ninhos próximos à Phormicum, pois quando outros insetos se alimentam das folhas dessa erva, ficam anestesiados. Tornando-se um alvo fácil para as formigas. Parte utilizada: Folhas.",
      efeitos: ["Anestésico"],
    },
    { 
      id: 2,
      nome: "Acallentum",
      descricao: "Planta arbórea de pequeno porte com conformação tortuosa e esgalhada. Seu caule apresenta casca delgada e lisa, que se solta conforme a planta se desenvolve. Suas cascas podem ser utilizadas em infusões. Seus efeitos reduzem os batimentos cardíacos, acalmando os ânimos de quem a consome. Parte utilizada: Casca",
      efeitos: ["Calmante"]
    },
    { 
      id: 3,
      nome: "Kopheum",
      descricao: "Planta de hábito arbustivo com folhas ovaladas e escuras. Suas flores exalam um cheiro doce que atrai insetos que se alimentam de seu néctar. O extrato das flores de Kopheum tem efeito estimulante. Parte utilizada: Flores.",
      efeitos: ["Estimulante"],
    },
    { 
      id: 4,
      nome: "Riccinum",
      descricao: "Planta de hábito semi-arbustivo, possui folhas largas e estreladas. Seus frutos apresentam formato redondo com projeções pontiaguras. As sementes de Riccinum maceradas e deixadas em infusão liberam toxinas. Parte utilizada: Sementes.",
      efeitos: ["Tóxico"],
    },
    {
      id: 5,
      nome: "Ignária",
      descricao: "Planta herbácea de cor vermelho-arroxeada. Exigente quanto à exposição à luz solar, produz frutos com cores que vão do vermelho ao roxo, raramente preto. Os frutos de Ignária secos e após, macerados em água e deixado para fermentar por dias, produzem um óleo superficial muito inflamável. O óleo de Ignária é utilizado como estimulante, afrodisíaco. Também pode ser utilizado como tempero em culinárias exóticas.",
      efeitos: ["Afrodisíaco", "Estimulante", "Inflamável"],
    },
    {
      id: 6,
      nome: "Umumbuia",
      descricao: "Planta herbácea e robusta com folhas verde-escuro alternadas, comumente com manchas variegadas de cor branco-creme, em formato oblongo a elíptico. O extrato de Umumbuia macerada com auxílio de almofariz e pistilo e embebidas em álcool produzem um forte veneno. Parte utilizada: Folha.",
      efeitos: ["Tóxico"]
    },
    {
      id: 7,
      nome: "Amenária",
      descricao: "Planta herbácea de pequeno porte. Sua flores parecem plumas, que balançam com o vento, carregando um agradável aroma. As flores e folhas de Amenária maceradas com auxílio de almofariz e pistilo, produzem um poderoso cataplasma que pode ser aplicado em escoriações e ferimentos, auxiliando na cicatrização e redução da inflamação.",
      efeitos: ["Cicatrizante, Anti-inflamatório"]
    },
    {
      id: 8,
      nome: "Empetrata",
      descricao: "Planta herbácea de pequeno porte. Possui raízes tão fortes que são capazer de perfurar a rocha. O chá de Petrata aumenta as resistências do corpo. Diz-se que quem faz uso contínuo dessa erva, fica resistente como pedra.",
      efeitos: ["Resistência"]
    },
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
