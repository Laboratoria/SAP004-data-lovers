import { searchPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

// banco de dados
const pokemons = data.pokemon;

// variáveis do HTML
const searchBar = document.querySelector("#searchBar");
const buttonOrder = document.querySelector("#buttonOrder");
const buttonFilter = document.querySelector("#buttonFilter");
const buttonSearch = document.querySelector("#buttonSearch");
const pokemonsList = document.querySelector("#root");

/* 
// função para mostrar barra de pesquisa
buttonSearch.addEventListener("click", function () {
    searchBar.style.visibility = "visible"; 
    buttonOrder.style.visibility = "hidden";
    buttonFilter.style.visibility = "hidden";
    buttonSearch.style.visibility = "hidden";
});
*/


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

const displayPokemons = (characters) => {
    const cards = characters
        .map((character) => {
            return `<figure class="card-pokemon"><p class="pokemon-num">${character.num}</p>
            <img src="${character.img}" alt="Miniatura do pokémon ${character.name} do tipo ${character.type}">
            <figcaption class="pokemon-name">${character.name}</figcaption>
            </figure>`;    
        })
        .join('');
    pokemonsList.innerHTML = cards;
  };
  
  //função a-z 
/*btnorder.addEventListener("click", () => {
    const sortedA = pokemons.sort( (a, b) => {
    if( a.name > b.name) {return 1}
    else if(b.name > a.name) { -1}
    else { 0};})
} );
//console.log( sortedA );

/*função z-a
const sortedZ = pokemons.sort( (a, b) => {
    if( b.name > a.name) return 1;
    else if(a.name > b.name) return -1;
    else return 0;
} );
//console.log( sortedZ );

// função id
const sortedId = pokemons.sort((a, b)=> {
    if (b.id > a.id) return 1;
    else if (a.id > b.id) return -1;
    else return 0
});console.log( sortedId);






    //função tela inicial 
//let botaor = document.querySelector("#reset")
//botaor.addEventListener("click", function(event){ 
    //    event.preventDefault()   ;
    //    searchWrapper.reset(); 
  //      }
 //    );
    
