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
const search = searchPokemon; ()=> {
    return card;
}; console.log(search)












    //função tela inicial 
//let botaor = document.querySelector("#reset")
//botaor.addEventListener("click", function(event){ 
    //    event.preventDefault()   ;
    //    searchWrapper.reset(); 
  //      }
 //    );
    
