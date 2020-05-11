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

// função de Ordem
export const sortOrder = (pokemon, order, byOrder) => {
  const direction = (byOrder === "az" || byOrder === "cresc")?1:-1;
  return pokemon.sort( (start, end) => {
  if( end[order] < start[order]) return direction;
    else if(start[order] < end[order]) return -direction;
    else return 0;
    })
};

// função de Filtro
export const filterByType = (pokemonType, pokemon) => pokemon.filter(pkm => pkm.type.includes(pokemonType));

