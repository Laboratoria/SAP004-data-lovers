import { searchPokemon, sortOrder, filterByType, porcentPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';
import icons from './icons.js';

const pokemonData = data.pokemon;

if (pokemonData.pokemon.name == "Nidoran ♀ (Female)" ) {
  pokemonData.pokemon.name.replace("(Female)", "")
}



// banco de dados


// **** ids HTML *********

// ids do Nav 
const searchBar = document.querySelector("#searchBar");
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

// **** Card **************

// card do pokémon
const card = (num, name, img, type) => {
  let icon = type.map(function(name){
  const iconName = name.toLowerCase();
    return`<span class="${icons[iconName]}"></span>`
  }).join(' ')

    
  return `<figure class="card-pokemon"><p class="pokemon-num">${num}</p>
  <img src="${img}" alt="Miniatura do pokémon ${name}">
  <p class="pokemon-type">${icon}</p>
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

    let type = pokemon.type.map(function(name){
      const iconName = name.toLowerCase();
      return`<span class="${icons[iconName]}"></span>`
    }).join(' ')
    
    return `<figure class="card-pokemon"><p class="pokemon-num">${pokemon.num}</p>
    <img src="${pokemon.img}" alt="Miniatura do pokémon ${pokemon.name}">
    <p class="pokemon-type">${type}</p>
    <figcaption class="pokemon-name">${pokemon.name}</figcaption>
    </figure>`;
  })
  .join('');
  pokemonsList.innerHTML = cards;
};

// **** Botões Ordem ******
buttonAZ.addEventListener("click", () => displayPokemons(sortOrder("az", "name", pokemonData)));
buttonZA.addEventListener("click", () => displayPokemons(sortOrder("za", "name", pokemonData)));
buttonCresc.addEventListener("click", () => displayPokemons(sortOrder("cresc", "id", pokemonData)));
buttonDecre.addEventListener("click", () => displayPokemons(sortOrder("decre", "id", pokemonData)));

// **** Botões Tipo *******
const Kanto = document.querySelector("#textTypes")

buttonSteel.addEventListener("click", () => { 
  const filterSteel = filterByType("Steel", "type", pokemonData);
  displayPokemons(filterSteel);
  const percent = porcentPokemon(filterSteel.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonWater.addEventListener("click", () => { 
  const filterWater = filterByType("Water", "type", pokemonData);
  displayPokemons(filterWater);
  const percent = porcentPokemon(filterWater.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML = `${percent}% dos pokémons de Kanto`; 
});

buttonDragon.addEventListener("click", () => {
  const filterDragon = filterByType("Dragon", "type", pokemonData);
  displayPokemons(filterDragon);
  const percent = porcentPokemon(filterDragon.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML = `${percent}% dos pokémons de Kanto`;
});

buttonEletric.addEventListener("click", () => {
  const filterElectric = filterByType("Electric", "type", pokemonData);
  displayPokemons(filterElectric);
  const percent = porcentPokemon(filterElectric.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonFairy.addEventListener("click", () => {
  const filterFairy = filterByType("Fairy", "type", pokemonData);
  displayPokemons(filterFairy);
  const percent = porcentPokemon(filterFairy.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonGhost.addEventListener("click", () => {
  const filterGhost = filterByType("Ghost", "type", pokemonData);
  displayPokemons(filterGhost);
  const percent = porcentPokemon(filterGhost.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonFire.addEventListener("click", () => {
  const filterFire = filterByType("Fire", "type", pokemonData);
  displayPokemons(filterFire);
  const percent = porcentPokemon(filterFire.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonIce.addEventListener("click", () => {
  const filterIce = filterByType("Ice", "type", pokemonData);
  displayPokemons(filterIce);
  const percent = porcentPokemon(filterIce.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonBug.addEventListener("click", () => {
  const filterBug = filterByType("Bug", "type", pokemonData);
  displayPokemons(filterBug);
  const percent = porcentPokemon(filterBug.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonFighting.addEventListener("click", () => {
  const filterFighting = filterByType("Fighting", "type", pokemonData);
  displayPokemons(filterFighting);
  const percent = porcentPokemon(filterFighting.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonNormal.addEventListener("click", () => {
  const filterNormal = filterByType("Normal", "type", pokemonData);
  displayPokemons(filterNormal);
  const percent = porcentPokemon(filterNormal.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonDark.addEventListener("click", () => {
  const filterDark = filterByType("Dark", "type", pokemonData);
  displayPokemons(filterDark);
  const percent = porcentPokemon(filterDark.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonRock.addEventListener("click", () => {
  const filterRock = filterByType("Rock", "type", pokemonData);
  displayPokemons(filterRock);
  const percent = porcentPokemon(filterRock.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonGrass.addEventListener("click", () => {displayPokemons(filterByType("Grass", "type", pokemonData))
  const filterGrass = filterByType("Grass", "type", pokemonData);
  displayPokemons(filterGrass);
  const percent = porcentPokemon(filterGrass.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= 
  `<div>
      <h2 class="grass"><span class="icon-planta"></span> Planta</h2>
      <p>
        Costumam viver em campos e gramados, os típicos ataques que este tipo possui, 
        são ataques que paralisam, envenenam e adormecem. A maioria dos golpes não são ofensivos, 
        e sim de atordoar o adversário. É o tipo que mais tem fraqueza a outros, mas são difíceis de serem derrotados por elétricos.
      </p>
      <p><span class="num grass">${percent}%</span> dos pokémons de Kanto.<p>
  </div>`;
});

/* 
objetos pra cada texto
função pro template do tipo
*/


buttonPsychic.addEventListener("click", () => {
  const filterPsychic = filterByType("Psychic", "type", pokemonData);
  displayPokemons(filterPsychic);
  const percent = porcentPokemon(filterPsychic.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonGround.addEventListener("click", () => {
  const filterGround = filterByType("Ground", "type", pokemonData);
  displayPokemons(filterGround);
  const percent = porcentPokemon(filterGround.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonPoison.addEventListener("click", () => {
  const filterPoison = filterByType("Poison", "type", pokemonData);
  displayPokemons(filterPoison);
  const percent = porcentPokemon(filterPoison.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonFlying.addEventListener("click", () => {
  const filterFlying = filterByType("Flying", "type", pokemonData);
  displayPokemons(filterFlying);
  const percent = porcentPokemon(filterFlying.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

/*
templateHTML(titulo, paragrafo, porcentagem, type, percent) 
    return `<div>
    <h2 class="${type}"><span class="icon-{${nome}}"></span>${titulo}</h2>
    <p>${paragrafo}</p>
    <p><span class="num ${type}">${percent}%</span> dos pokémons de Kanto.<p>
    </div>`
;*/
