import { searchPokemon, sortOrder, filterByType } from './data.js';
import data from './data/pokemon/pokemon.js';

// banco de dados
const pokemonData = data.pokemon;


// **** ids HTML *********

// ids do Nav 
const searchBar = document.querySelector("#searchBar");
//const buttonOrder = document.querySelector("#buttonOrder");
//const buttonType = document.querySelector("#buttonType");
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
pokemonData.map(pokemon => pokemonsList.innerHTML += card (pokemon.num, pokemon.name, pokemon.img, pokemon.type));


// cards filtrados
searchBar.addEventListener("keyup",() => displayPokemons(searchPokemon(searchBar.value.toLowerCase(), "name", pokemonData)));

const displayPokemons = (pokemon) => {
  const cards = pokemon
    .map((pokemon) => {
      return `<div class="pokemon-info" ><figure class="card-pokemon"><p class="pokemon-num">${pokemon.num}</p>
      <img class="pokemon-image" src="${pokemon.img}" alt="Miniatura do pokémon ${pokemon.name} do tipo ${pokemon.type}">
</figure> <p><figcaption class="pokemon-name">${pokemon.name}</figcaption> </p></div>`;
    })
    .join('');
  pokemonsList.innerHTML = cards;
};

// ************************



// **** Botões Ordem ******

buttonAZ.addEventListener("click", () => displayPokemons(sortOrder("az", "name", pokemonData)));
buttonZA.addEventListener("click", () => displayPokemons(sortOrder("za", "name", pokemonData)));
buttonCresc.addEventListener("click", () => displayPokemons(sortOrder("cresc", "id", pokemonData)));
buttonDecre.addEventListener("click", () => displayPokemons(sortOrder("decre", "id", pokemonData)));

// ************************



// **** Botões Tipo *******

buttonSteel.addEventListener("click", () => displayPokemons(filterByType("Steel", "type", pokemonData)));
buttonWater.addEventListener("click", () => displayPokemons(filterByType("Water", "type", pokemonData)));
buttonDragon.addEventListener("click", () => displayPokemons(filterByType("Dragon", "type", pokemonData)));
buttonEletric.addEventListener("click", () => displayPokemons(filterByType("Electric", "type", pokemonData)));
buttonFairy.addEventListener("click", () => displayPokemons(filterByType("Fairy", "type", pokemonData)));
buttonGhost.addEventListener("click", () => displayPokemons(filterByType("Ghost", "type", pokemonData)));
buttonFire.addEventListener("click", () => displayPokemons(filterByType("Fire", "type", pokemonData)));
buttonIce.addEventListener("click", () => displayPokemons(filterByType("Ice", "type", pokemonData)));
buttonBug.addEventListener("click", () => displayPokemons(filterByType("Bug", "type", pokemonData)));
buttonFighting.addEventListener("click", () => displayPokemons(filterByType("Fighting", "type", pokemonData)));
buttonNormal.addEventListener("click", () => displayPokemons(filterByType("Normal", "type", pokemonData)));
buttonDark.addEventListener("click", () => displayPokemons(filterByType("Dark", "type", pokemonData)));
buttonRock.addEventListener("click", () => displayPokemons(filterByType("Rock", "type", pokemonData)));
buttonGrass.addEventListener("click", () => displayPokemons(filterByType("Grass", "type", pokemonData)));
buttonPsychic.addEventListener("click", () => displayPokemons(filterByType("Psychic", "type", pokemonData)));
buttonGround.addEventListener("click", () => displayPokemons(filterByType("Ground", "type", pokemonData)));
buttonPoison.addEventListener("click", () => displayPokemons(filterByType("Poison", "type", pokemonData)));
buttonFlying.addEventListener("click", () => displayPokemons(filterByType("Flying", "type", pokemonData)));

// ************************
