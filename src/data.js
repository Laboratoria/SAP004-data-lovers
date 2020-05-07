// função de Busca
export const searchPokemon = (search, pokemon) => {
    let searchString = search.value.toLowerCase();
    let filteredPokemons = pokemon.filter( pkm => {
      let pkmString = pkm.name.toLowerCase();
      let beginOfString = pkmString.substr(0,searchString.length);
    return (beginOfString.includes(searchString));
  });
  return filteredPokemons;
};


// função de Ordenar AZ e ZA
export const sortAlphaOrder = (pokemon, name, alfaOrder) => {
  if (alfaOrder == "az") {
    return pokemon.sort( (start, end) => {
    if( end[name] < start[name]) return 1;
      else if(start[name] < end[name]) return -1;
      else return 0;
    })
  }
  if (alfaOrder == "za") {
    return pokemon.sort((start, end) => {
      if( end[name] > start[name]) return 1;
      else if(start[name] > end[name]) return -1;
      else return 0;
    })
  } 
};

// função de Ordenar 1-151 e 151-1
export const sortNumOrder = (pokemon, id, alfaOrder) => {
  if ( alfaOrder == "cresc") {
    return pokemon.sort((start, end) => {
      if (end[id] < start[id]) return 1;
      else if (start[id]< end[id]) return -1;
      else return 0;
    })
  }  
  if ( alfaOrder == "drecre"); {
    return pokemon.sort((start, end) =>{
      if (end[id] > start[id]) return 1;
      else if (start[id]> end[id]) return -1;
      else return 0;
    })
  }
};





/*
//função z-a
 const sortedZ = pokemons.sort( (a, b) => {
    if( b.name > a.name) return 1;
    else if(a.name > b.name) return -1;
    else return 0;
} );
console.log( sortedZ );
/*
// função id
const sortedId = pokemons.sort((a, b)=> {
    if (b.id > a.id) return 1;
    else if (a.id > b.id) return -1;
    else return 0
});console.log( sortedId);




/*
loadCharacters();

const loadCharacters = async () => {
  try {
     
    
      displayCharacters(pokemons);
  } catch (err) {
      console.error(err);
  }
};
*/

/*
//função Dri&Mi
export const searchPokemons = searchBar.addEventListener("keyup", (string) => {
  let searchString = string.target.value.toLowerCase();

  const filteredPokemons = pokemons.filter( pokemon => {
    return (pokemon.name.toLowerCase().includes(searchString));
  displayPokemons(filteredPokemons);
});
*/