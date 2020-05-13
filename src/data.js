// função de Busca pura
export const searchPokemon = (typedString, name, pokemonData) => {
    let searchString = typedString.value.toLowerCase();
    let filteredPokemons = pokemonData.filter(pokemon => {
      let pokemonString = pokemon[name].toLowerCase();
      let beginOfString = pokemonString.substr(0,searchString.length);
    return (beginOfString.includes(searchString));
  });
  return filteredPokemons;
};

// função de Ordem pura
export const sortOrder = (byOrder, order, pokemonData) => {
  const direction = (byOrder === "az" || byOrder === "cresc")? 1: -1;
  return pokemonData.sort((start, end) => (end[order] < start[order]? direction: -direction));
};


// função de Filtro pura
export const filterByType = (pokemonType, arrayType, pokemonData) => pokemonData.filter(pokemon => pokemon[arrayType].includes(pokemonType));




//