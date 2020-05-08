import { searchPokemon, sortAlphaOrder, sortNumOrder } from './data.js';
import data from './data/pokemon/pokemon.js';

// banco de dados
const pokemons = data.pokemon;

// ids do HTML
const searchBar = document.querySelector("#searchBar");
//const buttonOrder = document.querySelector("#buttonOrder");
//const buttonFilter = document.querySelector("#buttonFilter");
//const buttonSearch = document.querySelector("#buttonSearch");
const pokemonsList = document.querySelector("#root");
const buttonAZ = document.querySelector("#buttonAZ")
const buttonZA = document.querySelector("#buttonZA")
const buttonCresc = document.querySelector("#buttonCresc")
const buttonDecre = document.querySelector("#buttonDecre")

// card do pokémon
const card = (num, name, img, type) => {
  return `<figure class="card-pokemon"><p class="pokemon-num">${num}</p>
  <img src="${img}" alt="Miniatura do pokémon ${name} do tipo ${type}">
  <figcaption class="pokemon-name">${name}</figcaption>
  </figure>`
};

// mapping para gerar o card
pokemons.map(pkm => pokemonsList.innerHTML += card (pkm.num, pkm.name, pkm.img, pkm.type));

// cards filtrados
searchBar.addEventListener("keyup",() => displayPokemons(searchPokemon(searchBar, pokemons)));

const displayPokemons = (pkm) => {
  const cards = pkm
    .map((pkm) => {
      return `<figure class="card-pokemon"><p class="pokemon-num">${pkm.num}</p>
      <img src="${pkm.img}" alt="Miniatura do pokémon ${pkm.name} do tipo ${pkm.type}">
      <figcaption class="pokemon-name">${pkm.name}</figcaption>
      </figure>`;
    })
    .join('');
  pokemonsList.innerHTML = cards;
};

// botão a-z 
buttonAZ.addEventListener("click", () => {
  const az = sortAlphaOrder(pokemons, "name", "az");
  displayPokemons (az);
});

// botão z-a
buttonZA.addEventListener("click", () => {
  const za = sortAlphaOrder(pokemons, "name", "za");
  displayPokemons(za);
})

// botão 1-151
buttonCresc.addEventListener("click", () => {
  const cresc = sortNumOrder(pokemons, "id", "cresc");
  displayPokemons(cresc);
})

// botão 151-1
buttonDecre.addEventListener("click", () => {
  const decre = sortNumOrder(pokemons, "id", "decre");
  displayPokemons(decre);
})



/* 
// função para mostrar barra de pesquisa
buttonSearch.addEventListener("click", function () {
    searchBar.style.visibility = "visible"; 
    buttonOrder.style.visibility = "hidden";
    buttonFilter.style.visibility = "hidden";
    buttonSearch.style.visibility = "hidden";
});
*/


/*
    //função tela inicial 
let botaor = document.querySelector("#reset")
botaor.addEventListener("click", function(event){ 
        event.preventDefault()   ;
        searchWrapper.reset(); 
        }
    );
    */
