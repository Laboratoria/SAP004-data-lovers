import pokemon from "./data/pokemon/pokemon.js";

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

<<<<<<< HEAD
// usar nomes genéricos para usar o sortOrder para ambos. ex: name ou id = order, "az" ou "za" = cres e desc
// simplesmente ter um multiplicador, não precisa usar dois ifs, no return multiplicando a 
// estudar ternários, SE for isso será isso SE for aquilo será aquilo
// estudar reverse com a Ale e a Thali

// refatorar e fazer reverse
// função de Ordenar - Dani e Palomita
export const sortAlfaOrder = (pokemon, name, alfaOrder) => {
  const direction = (alfaOrder === "az" || alfaOrder === "cresc")?1:-1;
=======
// função de Ordem
export const sortOrder = (pokemon, order, byOrder) => {
  const direction = (byOrder === "az" || byOrder === "cresc")?1:-1;
>>>>>>> 56f45b80e576bfb0b6415cb939b7540933404902
  return pokemon.sort( (start, end) => {
  if( end[order] < start[order]) return direction;
    else if(start[order] < end[order]) return -direction;
    else return 0;
    })
};

<<<<<<< HEAD
// função de Ordenar 1-151 e 151-1
export const sortNumOrder = (pokemon, id, numOrder) => {
  const direction = (numOrder === "cresc")?1:-1;
    return pokemon.sort((start, end) => {
      if (end[id] < start[id]) return direction;
      else if (start[id]< end[id]) return -direction;
      else return 0;
    })
  }  
  ;

// função de Tipo

=======
// função de Filtro
export const filterByType = (pokemonType, pokemon) => pokemon.filter(pkm => pkm.type.includes(pokemonType));
>>>>>>> 56f45b80e576bfb0b6415cb939b7540933404902

