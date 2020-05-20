export const applyAscendingOrder = (pokemonGo) => pokemonGo.sort((a, b) =>
  ((a.name > b.name) ? 1 : -1));

export const applyDescendingOrder = (pokemonGo) => pokemonGo.sort((a, b) =>
  ((a.name > b.name) ? -1 : 1));

export const applySearchType = (pokemonGo, filterType) => pokemonGo.filter((search) =>
  (search.type.includes(filterType)));

export const resultCalcType = (pokemonGo, filterType) =>
  ((filterType) / (pokemonGo) * 100);

export const applySearchName = (pokemonGo, filterName) => pokemonGo.filter((search) =>
  (search.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1));