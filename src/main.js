import { searchPokemon, sortOrder, filterByType, porcentPokemon } from './data.js';
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

// **** Card **************

// card do pokémon
const card = (num, name, img, type) => {

  let icon = type.map(function(name){
    if (name === "Stell"){
      return name.replace("Stell", `<span class="icon-aco stell"></span>`);
    } else if (name === "Water"){
      return name.replace("Water", `<span class="icon-agua water"></span>`);
    } else if (name === "Dragon"){
      return name.replace("Dragon", `<span class="icon-dragao dragon"></span>`);
    } else if (name === "Electric"){
      return name.replace("Electric", `<span class="icon-eletrico eletric"></span>`);
    } else if (name === "Fairy"){
      return name.replace("Fairy", `<span class="icon-fada fairy"></span>`);
    } else if (name === "Ghost"){
      return name.replace("Ghost", `<span class="icon-fantasma ghost"></span>`);
    } else if (name === "Fire"){
      return name.replace("Fire", `<span class="icon-fogo fire"></span>`);
    } else if (name === "Ice"){
      return name.replace("Ice", `<span class="icon-fada ice"></span>`);
    } else if (name === "Bug"){
      return name.replace("Bug", `<span class="icon-inseto bug"></span>`);
    } else if (name === "Fighting"){
      return name.replace("Fighting", `<span class="icon-lutador fighting"></span>`);
    } else if (name === "Normal"){
      return name.replace("Normal", `<span class="icon-normal normal"></span>`);
    } else if (name === "Dark"){
      return name.replace("Dark", `<span class="icon-noturno dark"></span>`);
    } else if (name === "Rock"){
      return name.replace("Rock", `<span class="icon-pedra rock"></span>`);
    } else if (name === "Grass"){
      return name.replace("Grass", `<span class="icon-planta grass"></span>`);
    } else if (name === "Psychic"){
      return name.replace("Psychic", `<span class="icon-psiquico psychic"></span>`);
    } else if (name === "Ground"){
      return name.replace("Ground", `<span class="icon-terrestre ground"></span>`);
    } else if (name === "Poison"){
      return name.replace("Poison", `<span class="icon-venenoso poison"></span>`);
    } else if (name === "Flying"){
      return name.replace("Flying", `<span class="icon-voador flying"></span>`);
    }
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
        if (name === "Stell"){
          return name.replace("Stell", `<span class="icon-aco stell"></span>`);
        } else if (name === "Water"){
          return name.replace("Water", `<span class="icon-agua water"></span>`);
        } else if (name === "Dragon"){
          return name.replace("Dragon", `<span class="icon-dragao dragon"></span>`);
        } else if (name === "Electric"){
          return name.replace("Electric", `<span class="icon-eletrico eletric"></span>`);
        } else if (name === "Fairy"){
          return name.replace("Fairy", `<span class="icon-fada fairy"></span>`);
        } else if (name === "Ghost"){
          return name.replace("Ghost", `<span class="icon-fantasma ghost"></span>`);
        } else if (name === "Fire"){
          return name.replace("Fire", `<span class="icon-fogo fire"></span>`);
        } else if (name === "Ice"){
          return name.replace("Ice", `<span class="icon-gelo ice"></span>`);
        } else if (name === "Bug"){
          return name.replace("Bug", `<span class="icon-inseto bug"></span>`);
        } else if (name === "Fighting"){
          return name.replace("Fighting", `<span class="icon-lutador fighting"></span>`);
        } else if (name === "Normal"){
          return name.replace("Normal", `<span class="icon-normal normal"></span>`);
        } else if (name === "Dark"){
          return name.replace("Dark", `<span class="icon-noturno dark"></span>`);
        } else if (name === "Rock"){
          return name.replace("Rock", `<span class="icon-pedra rock"></span>`);
        } else if (name === "Grass"){
          return name.replace("Grass", `<span class="icon-planta grass"></span>`);
        } else if (name === "Psychic"){
          return name.replace("Psychic", `<span class="icon-psiquico psychic"></span>`);
        } else if (name === "Ground"){
          return name.replace("Ground", `<span class="icon-terrestre ground"></span>`);
        } else if (name === "Poison"){
          return name.replace("Poison", `<span class="icon-venenoso poison"></span>`);
        } else if (name === "Flying"){
          return name.replace("Flying", `<span class="icon-voador flying"></span>`);
        }
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
  const percent = porcentPokemon(filterSteel).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonWater.addEventListener("click", () => { 
  const filterWater = filterByType("Water", "type", pokemonData);
  displayPokemons(filterWater);
  const percent = porcentPokemon(filterWater).toFixed(0);
  Kanto.innerHTML = `${percent}% dos pokémons de Kanto`; 
});

buttonDragon.addEventListener("click", () => {
  const filterDragon = filterByType("Dragon", "type", pokemonData);
  displayPokemons(filterDragon);
  const percent = porcentPokemon(filterDragon).toFixed(0);
  Kanto.innerHTML = `${percent}% dos pokémons de Kanto`;
});

buttonEletric.addEventListener("click", () => {
  const filterElectric = filterByType("Electric", "type", pokemonData);
  displayPokemons(filterElectric);
  const percent = porcentPokemon(filterElectric).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonFairy.addEventListener("click", () => {
  const filterFairy = filterByType("Fairy", "type", pokemonData);
  displayPokemons(filterFairy);
  const percent = porcentPokemon(filterFairy).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonGhost.addEventListener("click", () => {
  const filterGhost = filterByType("Ghost", "type", pokemonData);
  displayPokemons(filterGhost);
  const percent = porcentPokemon(filterGhost).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonFire.addEventListener("click", () => {
  const filterFire = filterByType("Fire", "type", pokemonData);
  displayPokemons(filterFire);
  const percent = porcentPokemon(filterFire).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonIce.addEventListener("click", () => {
  const filterIce = filterByType("Ice", "type", pokemonData);
  displayPokemons(filterIce);
  const percent = porcentPokemon(filterIce).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonBug.addEventListener("click", () => {
  const filterBug = filterByType("Bug", "type", pokemonData);
  displayPokemons(filterBug);
  const percent = porcentPokemon(filterBug).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonFighting.addEventListener("click", () => {
  const filterFighting = filterByType("Fighting", "type", pokemonData);
  displayPokemons(filterFighting);
  const percent = porcentPokemon(filterFighting).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonNormal.addEventListener("click", () => {
  const filterNormal = filterByType("Normal", "type", pokemonData);
  displayPokemons(filterNormal);
  const percent = porcentPokemon(filterNormal).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonDark.addEventListener("click", () => {
  const filterDark = filterByType("Dark", "type", pokemonData);
  displayPokemons(filterDark);
  const percent = porcentPokemon(filterDark).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonRock.addEventListener("click", () => {
  const filterRock = filterByType("Rock", "type", pokemonData);
  displayPokemons(filterRock);
  const percent = porcentPokemon(filterRock).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonGrass.addEventListener("click", () => {displayPokemons(filterByType("Grass", "type", pokemonData))
  const filterGrass = filterByType("Grass", "type", pokemonData);
  displayPokemons(filterGrass);
  const percent = porcentPokemon(filterGrass).toFixed(0);
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
  const percent = porcentPokemon(filterPsychic).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonGround.addEventListener("click", () => {
  const filterGround = filterByType("Ground", "type", pokemonData);
  displayPokemons(filterGround);
  const percent = porcentPokemon(filterGround).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonPoison.addEventListener("click", () => {
  const filterPoison = filterByType("Poison", "type", pokemonData);
  displayPokemons(filterPoison);
  const percent = porcentPokemon(filterPoison).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

buttonFlying.addEventListener("click", () => {
  const filterFlying = filterByType("Flying", "type", pokemonData);
  displayPokemons(filterFlying);
  const percent = porcentPokemon(filterFlying).toFixed(0);
  Kanto.innerHTML= `${percent}% dos pokémons de Kanto`;
});

/*
templateHTML(titulo, paragrafo, porcentagem, type, percent) 
    return `<div>
    <h2 class="${type}"><span class="icon-{${nome}}"></span>${titulo}</h2>
    <p>${paragrafo}</p>
    <p><span class="num ${type}">${percent}%</span> dos pokémons de Kanto.<p>
    </div>`
  };
*/