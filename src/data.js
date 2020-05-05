// funções de exemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const searchFunc = p => {
  let nameInput = document.getElementById("searchtxt").value
  nameInput = nameInput.toUpperCase() 
return (nameInput == p.name.slice(0,-(p.name.length - nameInput.length)).toUpperCase()|| nameInput == p.name.toUpperCase()) 
};

const searchBar = document.querySelector("#searchBar");

// versão LAB baseada na função acima
export const searchCards = string => {
  let searchString = searchBar.value;
  searchString = searchString.toLowerCase(); 
  return (searchString == string.name.slice(0,-(string.name.length - searchString.length)).toLowerCase()()|| searchString == string.name.toLowerCase()()) 
};

// versão Mix
export const searchPokemon = string => {
  searchBar.addEventListener("keyup", letters => {
    let searchString = letters.value.toLowerCase();
    let filteredPokemons = pokemon.filter( pkm => {
    return (pkm.name.toLowerCase().includes(searchString));
  });
  return filteredPokemons;
  }
});


//função Dri&Mi
export const searchPokemons = searchBar.addEventListener("keyup", (string) => {
  const searchString = string.target.value.toLowerCase();
  const filteredPokemons = pokemons.filter( pokemon => {
    return (pokemon.name.toLowerCase().includes(searchString));
  displayPokemons(filteredPokemons);
});

/*
const displayPokemons = (characters) => {
  const cards = characters
      .map((character) => {
          return `<figure class="character"><p class="poke-num">${character.num}</p>
          <img src="${character.img}" alt="Miniatura do pokémon ${character.name}">
          <figcaption class="pokemon-name">${character.name}</figcaption>
          </figure>`;    
          
      })
      .join('');
  pokemonsList.innerHTML = cards;
};

loadCharacters();

const loadCharacters = async () => {
  try {
     
    
      displayCharacters(pokemons);
  } catch (err) {
      console.error(err);
  }
};
*/