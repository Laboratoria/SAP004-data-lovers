
export const apllyAscendingOrder = (pokemonGo) => pokemonGo.sort((a, b) =>
  (((a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)));

export const applyDescendingOrder = (pokemonGo) => pokemonGo.sort((a, b) =>
  (((a.name > b.name) ? -1 : (a.name < b.name) ? 1 : 0)));

export const applySearchType = (pokemonGo, filterType) => pokemonGo.filter((search) =>
  (search.type.includes(filterType)));

export const applySearchName = (pokemonGo, filterName) => pokemonGo.filter((search) =>
  (search.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1));


