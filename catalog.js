'use strict';
const artworks = {
  "101": {
    "file": "folhas-em-silencio",
    "name": "Folhas em Silêncio",
    "width": 1060,
    "height": 1484
  },
  "102": {
    "file": "magnolias-de-marfim",
    "name": "Magnólias de Marfim",
    "width": 1060,
    "height": 1484
  },
  "103": {
    "file": "entre-aguas",
    "name": "Entre Águas",
    "width": 1060,
    "height": 1484
  },
  "104": {
    "file": "duna-dourada",
    "name": "Duna Dourada",
    "width": 1060,
    "height": 1484
  },
  "105": {
    "file": "mare-mansa",
    "name": "Maré Mansa",
    "width": 1060,
    "height": 1484
  },
  "106": {
    "file": "canto-do-mar",
    "name": "Canto do Mar",
    "width": 1484,
    "height": 1060
  },
  "107": {
    "file": "barro-e-ramo",
    "name": "Barro e Ramo",
    "width": 1060,
    "height": 1484
  },
  "108": {
    "file": "raizes-do-tempo-v2",
    "name": "Raízes do Tempo",
    "width": 1060,
    "height": 1484
  },
  "109": {
    "file": "ultima-luz",
    "name": "Última Luz",
    "width": 1060,
    "height": 1484
  },
  "113": {
    "file": "encontro-das-carpas",
    "name": "Encontro das Carpas",
    "width": 1060,
    "height": 1484
  },
  "114": {
    "file": "presenca-do-campo",
    "name": "Presença do Campo",
    "width": 1060,
    "height": 1484
  },
  "115": {
    "file": "azul-de-rio",
    "name": "Azul de Rio",
    "width": 1060,
    "height": 1484
  },
  "116": {
    "file": "sol-dos-montes",
    "name": "Sol dos Montes",
    "width": 1060,
    "height": 1484
  },
  "117": {
    "file": "lua-do-lago",
    "name": "Lua do Lago",
    "width": 1060,
    "height": 1484
  }
};
const products = [
  {
    "id": 113,
    "name": "Encontro das Carpas",
    "category": "Natureza Viva",
    "price": 269,
    "color": "carpas peixe peixes água lago azul petróleo laranja branco animais",
    "room": [
      "Sala",
      "Quarto",
      "Escritório"
    ],
    "description": "Duas carpas desenham um movimento circular na água. Os tons claros e alaranjados encontram o azul profundo em uma cena de ritmo e equilíbrio.",
    "art": 113,
    "tag": "NOVIDADE",
    "pieces": 1
  },
  {
    "id": 114,
    "name": "Presença do Campo",
    "category": "Natureza Viva",
    "price": 269,
    "color": "cavalo castanho animal campo pasto verde terra marrom",
    "room": [
      "Sala",
      "Escritório",
      "Hall"
    ],
    "description": "Um cavalo castanho repousa no campo aberto. A luz revela sua pelagem e encontra o verde da relva, entre pinceladas amplas e um céu suave.",
    "art": 114,
    "tag": "NOVIDADE",
    "pieces": 1
  },
  {
    "id": 115,
    "name": "Azul de Rio",
    "category": "Natureza Viva",
    "price": 259,
    "color": "martim-pescador martim pescador ave pássaro azul laranja rio animais",
    "room": [
      "Sala",
      "Quarto",
      "Hall"
    ],
    "description": "Um martim-pescador observa a água do alto de um ramo. Azuis intensos e laranjas aquecidos dão vida ao pássaro, cercado pela leveza da paisagem.",
    "art": 115,
    "tag": "NOVIDADE",
    "pieces": 1
  },
  {
    "id": 116,
    "name": "Sol dos Montes",
    "category": "Ciclos de Luz",
    "price": 249,
    "color": "sol montes montanha paisagem ocre areia dourado terra dia",
    "room": [
      "Sala",
      "Quarto",
      "Hall"
    ],
    "description": "O sol se aproxima dos montes e espalha uma luz macia pelas encostas. Areia, ocre e terra se sobrepõem em uma paisagem de formas amplas e presença tranquila.",
    "art": 116,
    "tag": "NOVIDADE",
    "pieces": 1
  },
  {
    "id": 117,
    "name": "Lua do Lago",
    "category": "Ciclos de Luz",
    "price": 249,
    "color": "lua lago montes água paisagem bege ocre terra noite",
    "room": [
      "Sala",
      "Quarto",
      "Hall"
    ],
    "description": "Uma lua crescente ilumina o lago entre montes silenciosos. O reflexo atravessa a água e aproxima os tons de areia e terra, em uma cena que parece suspender o tempo.",
    "art": 117,
    "tag": "NOVIDADE",
    "pieces": 1
  },
  {
    "id": 118,
    "name": "Dupla Ciclos de Luz",
    "category": "Ciclos de Luz",
    "price": 459,
    "art": 116,
    "arts": [
      116,
      117
    ],
    "color": "dupla sol lua montes lago areia ocre terra conjunto dia noite",
    "room": [
      "Sala",
      "Quarto",
      "Hall"
    ],
    "tag": "2 QUADROS",
    "pieces": 2,
    "description": "Sol dos Montes e Lua do Lago: duas paisagens unidas pelos tons de areia e terra. O sol e a lua se alternam em uma composição serena, pensada para acompanhar os ritmos da casa."
  },
  {
    "id": 101,
    "name": "Folhas em Silêncio",
    "category": "Jardim Interior",
    "price": 239,
    "art": 101,
    "color": "verde petróleo sálvia creme botânica folhas",
    "room": [
      "Sala",
      "Quarto",
      "Hall"
    ],
    "tag": "O INÍCIO DE TUDO",
    "pieces": 1,
    "description": "Um ramo em movimento, entre verdes profundos e folhas claras. As marcas da pintura acompanham cada curva, criando uma presença delicada e cheia de vida."
  },
  {
    "id": 104,
    "name": "Duna Dourada",
    "category": "Costa Serena",
    "price": 249,
    "art": 104,
    "color": "areia dourado ocre azul praia paisagem",
    "room": [
      "Sala",
      "Quarto",
      "Escritório"
    ],
    "tag": "COSTA SERENA",
    "pieces": 1,
    "description": "A luz percorre a crista da duna e encontra o azul do mar. Uma paisagem de poucos elementos, com calor, movimento e horizontes abertos."
  },
  {
    "id": 102,
    "name": "Magnólias de Marfim",
    "category": "Jardim Interior",
    "price": 249,
    "art": 102,
    "color": "flor flores marfim bege verde magnólia",
    "room": [
      "Sala",
      "Quarto",
      "Hall"
    ],
    "tag": "",
    "pieces": 1,
    "description": "Pétalas luminosas se abrem entre folhas escuras. O contraste suave e as pinceladas encorpadas dão às magnólias uma beleza acolhedora."
  },
  {
    "id": 109,
    "name": "Última Luz",
    "category": "Terra e Tempo",
    "price": 279,
    "art": 109,
    "color": "sol monte montanha entardecer laranja dourado verde",
    "room": [
      "Sala",
      "Escritório",
      "Hall"
    ],
    "tag": "HORIZONTES",
    "pieces": 1,
    "description": "O sol encontra o cume e desenha uma encosta de luz. Dourados, verdes e sombras azuladas guardam o instante em que o dia desacelera."
  },
  {
    "id": 105,
    "name": "Maré Mansa",
    "category": "Costa Serena",
    "price": 249,
    "art": 105,
    "color": "mar praia onda azul areia dourado",
    "room": [
      "Sala",
      "Quarto"
    ],
    "tag": "",
    "pieces": 1,
    "description": "Uma onda baixa chega à areia sob a luz dourada. A espuma e os azuis se encontram em uma pintura que convida a respirar mais devagar."
  },
  {
    "id": 103,
    "name": "Entre Águas",
    "category": "Natureza Viva",
    "price": 269,
    "art": 103,
    "color": "garça ave pássaro lagoa verde branco natureza",
    "room": [
      "Sala",
      "Escritório",
      "Hall"
    ],
    "tag": "NATUREZA VIVA",
    "pieces": 1,
    "description": "A garça branca repousa diante do verde profundo da lagoa. A luz nas penas e os reflexos quebrados na água criam uma cena de quietude e presença."
  },
  {
    "id": 107,
    "name": "Barro e Ramo",
    "category": "Terra e Tempo",
    "price": 239,
    "art": 107,
    "color": "vaso barro terracota bege ramo cerâmica",
    "room": [
      "Sala",
      "Quarto",
      "Hall"
    ],
    "tag": "",
    "pieces": 1,
    "description": "Um vaso de barro, dois ramos e a luz da tarde. As curvas da cerâmica e sua sombra revelam a beleza das coisas simples, vistas com atenção."
  },
  {
    "id": 108,
    "name": "Raízes do Tempo",
    "category": "Terra e Tempo",
    "price": 269,
    "art": 108,
    "color": "oliveira árvore oliva verde dourado terra",
    "room": [
      "Sala",
      "Escritório",
      "Hall"
    ],
    "tag": "",
    "pieces": 1,
    "description": "O tronco se torce e a copa se espalha sobre um fundo de tons terrosos. Verdes de oliva, barro e luz suave aproximam esta árvore da simplicidade de Barro e Ramo."
  },
  {
    "id": 106,
    "name": "Canto do Mar",
    "category": "Costa Serena",
    "price": 279,
    "art": 106,
    "color": "mar oceano pedras azul onda espuma praia",
    "room": [
      "Sala",
      "Quarto",
      "Escritório"
    ],
    "tag": "HORIZONTAL",
    "pieces": 1,
    "orientation": "horizontal",
    "description": "A água contorna as pedras e se abre em espuma. Uma vista ampla do litoral, com azuis frescos e pinceladas que acompanham o movimento do mar."
  },
  {
    "id": 110,
    "name": "Dupla Costa Serena",
    "category": "Costa Serena",
    "price": 459,
    "art": 104,
    "arts": [
      104,
      105
    ],
    "color": "dupla duna mar areia azul dourado conjunto",
    "room": [
      "Sala",
      "Quarto"
    ],
    "tag": "2 QUADROS",
    "pieces": 2,
    "scene": "quarto-costa",
    "description": "Duna Dourada e Maré Mansa: duas vistas de uma mesma costa. A luz, o horizonte e os tons de areia aproximam as obras em uma composição pensada para ficar lado a lado."
  },
  {
    "id": 111,
    "name": "Dupla Jardim Interior",
    "category": "Jardim Interior",
    "price": 449,
    "art": 101,
    "arts": [
      101,
      102
    ],
    "color": "dupla folhas magnólias botânica flores verde marfim conjunto",
    "room": [
      "Sala",
      "Quarto",
      "Hall"
    ],
    "tag": "2 QUADROS",
    "pieces": 2,
    "scene": "sala-jardim",
    "description": "Folhas em Silêncio e Magnólias de Marfim compartilham verdes, tons claros e gestos de pintura. Folhas e flores se equilibram em uma dupla com leveza e personalidade."
  }
];
