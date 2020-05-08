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

// usar nomes genéricos para usar o sortOrder para ambos. ex: name ou id = order, "az" ou "za" = cres e desc
// simplesmente ter um multiplicador, não precisa usar dois ifs, no return multiplicando a 
// estudar ternários, SE for isso será isso SE for aquilo será aquilo
// estudar reverse com a Ale e a Thali


// função de Ordenar - Dani e Palomita
export const sortAlphaOrder = (pokemon, name, alfaOrder) => {
  const direction = (alfaOrder === "az")?1:-1;
  return pokemon.sort( (start, end) => {
  if( end[name] < start[name]) return direction;
    else if(start[name] < end[name]) return -direction;
    else return 0;
    })
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
  if ( alfaOrder == "decre"); {
    return pokemon.sort((start, end) =>{
      if (end[id] > start[id]) return 1;
      else if (start[id]> end[id]) return -1;
      else return 0;
    })
  }
};

// função de Tipo
export const filterType = 



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