///////---------Estudando para refatorar para fazer filtro
let data = {
    "type": "champion",
    "format": "standAloneComplex",
    "version": "6.24.1",
    "data": {
        "Lux0": {
        id: "Lux0",
        name: "Lux",
        title: "the Lady of Luminosity",
        info: {
          attack: 2,
          defense: 4,
          magic: 3,
          difficulty: 5
          },
        tags: ["Mage", "Support"],
        },

        "Lux1": {
        id: "Lux1",
        name: "Lux",
        title: "the Lady of Luminosity",
        info: {
          attack: 2,
          defense: 4,
          magic: 2,
          difficulty: 5
          },
        tags: ["Mage", "Support"],
        },

        "Lux2": {
        id: "Lux2",
        name: "Lux",
        title: "the Lady of Luminosity",
        info: {
          attack: 2,
          defense: 4,
          magic: 9,
          difficulty: 5
          },
        tags: ["Mage", "Support"],
        },
          }   
  };

const championsArray = Object.values(data.data);
//[ { }, { }, { } ] 
//console.log(championsArray);
let names = [];
let total = [];
for (let persona of championsArray) {
  total.push(persona.id);
  //console.log(persona.id);
  //console.log(persona.tags);
  //console.log(persona.info.magic);
if(persona.info.magic >= 5){
  names.push(persona.id);
  
  };
};
console.log(names.length);
console.log(total.length);

let porcentagem = (names.length * 100) / total.length;
console.log(parseInt(porcentagem));


  /*Quantos por cento tem:
    attack >= X
    defense >= X
    magic >= X
    difficulty >= X */


    //-----------------------------------------------------------------------------------------------------------------------

///////---------Estudando para refatorar para fazer filtro
let data = {
  "type": "champion",
  "format": "standAloneComplex",
  "version": "6.24.1",
  "data": {
      "Lux0": {
      id: "Lux0",
      name: "Lux",
      title: "the Lady of Luminosity",
      info: {
        attack: 2,
        defense: 4,
        magic: 3,
        difficulty: 5
        },
      tags: ["Mage", "Support"],
      },

      "Lux1": {
      id: "Lux1",
      name: "Lux",
      title: "the Lady of Luminosity",
      info: {
        attack: 2,
        defense: 4,
        magic: 2,
        difficulty: 5
        },
      tags: ["Mage", "Support"],
      },

      "Lux2": {
      id: "Lux2",
      name: "Lux",
      title: "the Lady of Luminosity",
      info: {
        attack: 2,
        defense: 4,
        magic: 9,
        difficulty: 5
        },
      tags: ["Mage", "Support"],
      },
        }   
};

const championsArray = Object.values(data.data);

let numNivel = prompt('Numero de 1 ate 10');
let tipoDeInfo = prompt('Escolha uma info: "attack", "defense", "magic, "difficulty"');
//5  > 33%

let names = [];
let total = [];
for (let persona of championsArray) {
total.push(persona.id);

if(persona.info.tipoDeInfo >= numNivel){
names.push(persona.id);

};
};
//console.log(names.length);
//console.log(total.length);

let porcentagem = (names.length * 100) / total.length;
//console.log(parseInt(porcentagem));

