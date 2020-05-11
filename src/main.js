import { searchPokemon, sortOrder, filterByType } from './data.js';
import data from './data/pokemon/pokemon.js';

// banco de dados
const pokemons = data.pokemon;


// **** ids HTML *********

// ids do Nav 
const searchBar = document.querySelector("#searchBar");
//const buttonOrder = document.querySelector("#buttonOrder");
//const buttonFilter = document.querySelector("#buttonFilter");
//const buttonSearch = document.querySelector("#buttonSearch");
const pokemonsList = document.querySelector("#root");

// ids de Ordem
const buttonAZ = document.querySelector("#buttonAZ");
const buttonZA = document.querySelector("#buttonZA");
const buttonCresc = document.querySelector("#buttonCresc");
const buttonDecre = document.querySelector("#buttonDecre");

// ids de Tipo
const buttonSteel = document.querySelector("#buttonSteel");
const buttonWater = document.querySelector("#buttonWater");
const buttonDragon = document.querySelector("#buttonDragon");
const buttonEletric = document.querySelector("#buttonEletric");
const buttonFairy = document.querySelector("#buttonFairy");
const buttonGhost = document.querySelector("#buttonGhost");
const buttonFire = document.querySelector("#buttonFire");
const buttonIce = document.querySelector("#buttonIce");
const buttonBug = document.querySelector("#buttonBug");
const buttonFighting = document.querySelector("#buttonFighting");
const buttonNormal = document.querySelector("#buttonNormal");
const buttonDark = document.querySelector("#buttonDark");
const buttonRock = document.querySelector("#buttonRock");
const buttonGrass = document.querySelector("#buttonGrass");
const buttonPsychic = document.querySelector("#buttonPsychic");
const buttonGround = document.querySelector("#buttonGround");
const buttonPoison = document.querySelector("#buttonPoison");
const buttonFlying = document.querySelector("#buttonFlying");

// ************************



// **** Card **************

// card do pokémon
const card = (num, name, img, type) => {
  return `<figure class="card-pokemon"><p class="pokemon-num">${num}</p>
  <img src="${img}" alt="Miniatura do pokémon ${name} do tipo ${type}">
  <p class="pokemon-type">${type}</p>
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
// ************************



// **** Botões Ordem ******

// botão A-Z 
buttonAZ.addEventListener("click", () => displayPokemons(sortOrder(pokemons, "name", "az")));

// botão Z-A
buttonZA.addEventListener("click", () => displayPokemons(sortOrder(pokemons, "name", "za")));

// botão 1-151
buttonCresc.addEventListener("click", () => displayPokemons(sortOrder(pokemons, "id", "cresc")));

// botão 151-1
buttonDecre.addEventListener("click", () => displayPokemons(sortOrder(pokemons, "id", "decre")));

// ************************



// **** Botões Tipo *******

// botão Aço
buttonSteel.addEventListener("click", () => displayPokemons(filterByType("Steel", pokemons)));

// botão Água
buttonWater.addEventListener("click", () => displayPokemons(filterByType("Water", pokemons)));

// botão Dragão 
buttonDragon.addEventListener("click", () => displayPokemons(filterByType("Dragon", pokemons)));

// botão Elétrico
buttonEletric.addEventListener("click", () => displayPokemons(filterByType("Electric", pokemons)));

// botão Fada
buttonFairy.addEventListener("click", () => displayPokemons(filterByType("Fairy", pokemons)));

// botão Fantasma
buttonGhost.addEventListener("click", () => displayPokemons(filterByType("Ghost", pokemons)));

// botão Fogo
buttonFire.addEventListener("click", () => displayPokemons(filterByType("Fire", pokemons)));

// botão Gelo
buttonIce.addEventListener("click", () => displayPokemons(filterByType("Ice", pokemons)));

// Botão Inseto 
buttonBug.addEventListener("click", () => displayPokemons(filterByType("Bug", pokemons)));

// botão Lutador
buttonFighting.addEventListener("click", () => displayPokemons(filterByType("Fighting", pokemons)));

// botão Normal
buttonNormal.addEventListener("click", () => displayPokemons(filterByType("Normal", pokemons)));

// Botão Noturno
buttonDark.addEventListener("click", () => displayPokemons(filterByType("Dark", pokemons)));

// botão Pedra
buttonRock.addEventListener("click", () => displayPokemons(filterByType("Rock", pokemons)));

// botão Planta
buttonGrass.addEventListener("click", () => displayPokemons(filterByType("Grass", pokemons)));

// botão Psíquico 
buttonPsychic.addEventListener("click", () => displayPokemons(filterByType("Psychic", pokemons)));

// botão Terrestre
buttonGround.addEventListener("click", () => displayPokemons(filterByType("Ground", pokemons)));

// botão Venenoso
buttonPoison.addEventListener("click", () => displayPokemons(filterByType("Poison", pokemons)));

// botão Voador
buttonFlying.addEventListener("click", () => displayPokemons(filterByType("Flying", pokemons)));

// ************************
