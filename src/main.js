import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//import { searchFunc } from './data.js';
const pokemons = data.pokemon; 

function compare (a, b) {
 console.log( a.name - b.name)
}
const searchBar = document.querySelector('#searchBar');
const btnorder = document.querySelector("#btn-od")

//apenas mostra personagens na tela
/*const card = (num, name, img,type) => {
    return `<figure class="card-pokemon"><p>${num}</p>
    <img src="${img}" alt="Miniatura do pokémon ${name}">
    <figcaption class="pokemon-name">${name}</figcaption>
    </figure>`
}

pokemons.map(pokemon => document.getElementById("root").innerHTML += card (pokemon.num, pokemon.name, pokemon.img, pokemon.type));*/

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
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = pokemons.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) //|| character.type.toLowerCase().includes(searchStringS)
                   
        );
    }); 
    displayCharacters(filteredCharacters);  
}); 

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

*/
//lidando com erros
const loadCharacters = async () => {
    try {
       
      
        displayCharacters(pokemons);
    } catch (err) {
        console.error(err);
    }
};
//mostrar pokemons na tela
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