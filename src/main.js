import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

<<<<<<< HEAD

console.log(example, data);
=======
const pokemons = data.pokemon;

const card = (num, name, img) => {
    return `<figure class="card-pokemon"><p>${num}</p>
    <img src="${img}" alt="Miniatura do pokémon ${name}">
    <figcaption>${name}</figcaption>
    </figure>`
}

pokemons.map(pokemon => document.getElementById("root").innerHTML += card (pokemon.num, pokemon.name, pokemon.img));

>>>>>>> 7ef1f30d09b909759742315f40037a0395f06355
