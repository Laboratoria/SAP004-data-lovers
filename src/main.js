import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//import { searchFunc } from './data.js';
const pokemons = data.pokemon;
const search = document.querySelector('#searchBar');
const btnSrc = document.querySelector("#btn-src")
const card = (num, name, img,type) => {
    return `<figure class="card-pokemon"><p>${num}</p>
    <img src="${img}" alt="Miniatura do pokémon ${name}">
    <figcaption class="pokemon-name">${name}</figcaption>
    </figure>`
}

pokemons.map(pokemon => document.getElementById("root").innerHTML += card (pokemon.num, pokemon.name, pokemon.img, pokemon.type));

let showBtn = document.querySelector('#btn-src');
// função mostrar barra de pesquisa
 showBtn.addEventListener("click", function () {
        document.querySelector("#searchBar").style.visibility = "visible"; 
        document.querySelector("#btn-od").style.visibility = "hidden";
        document.querySelector("#btn-fl").style.visibility = "hidden";
        document.querySelector('#btn-src').style.visibility = "hidden";

    });

    //função tela inicial 
//let botaor = document.querySelector("#reset")
//botaor.addEventListener("click", function(event){ 
    //    event.preventDefault()   ;
    //    searchWrapper.reset(); 
  //      }
 //    );
    


//função pesquisar
const charactersList = document.getElementById('root');
let pCharacters = [];
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = pCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) //|| character.type.toLowerCase().includes(searchStringS)
           
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
       
        pCharacters = pokemons
        displayCharacters(pCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `<figure class="character"><p class="poke-num">${character.num}</p>
            <img src="${character.img}" alt="Miniatura do pokémon ${character.name}">
            <figcaption class="pokemon-name">${character.name}</figcaption>
            </figure>`;    
            




        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();