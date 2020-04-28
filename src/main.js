import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemonGo = data.pokemon[0];
let box = `<img src=${pokemonGo.img}>`;
document.getElementById("cards").innerHTML = box;



console.log(box);
  