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


// refatorar e pensar no reverse
// função de Ordenar - Dani e Palomita
export const sortOrder = (pokemon, order, alfaNumOrder) => {
  const direction = (alfaNumOrder === "orderdirection")?1:-1;
  return pokemon.sort( (start, end) => {
  if( end[order] < start[order]) return direction;
    else if(start[order] < end[order]) return -direction;
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

/*
// fazer a função de Tipo
// função de Tipo
export const filterByType = pokemon.reduce(filteredTypes(displayByType, pokemonType){
  const typeForButton = 
  const allPokemons = pokemonType.type ===0 ; 
  
})
*/
