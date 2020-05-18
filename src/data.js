export const apllyAscendingOrder = (pokemonGo) => pokemonGo.sort((a, b) =>
  (((a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)));

export const applyDescendingOrder = (pokemonGo) => pokemonGo.sort((a, b) =>
  (((a.name > b.name) ? -1 : (a.name < b.name) ? 1 : 0)));

export const applySearchType = (pokemonGo, filterType) => pokemonGo.filter((search) =>
  (search.type.includes(filterType)));

<<<<<<< HEAD
export const resultCalcType = (pokemonGo, filterType) => 
=======
export const resultCalcType = (pokemonGo, filterType) =>
>>>>>>> 45286cac1febcc38558771890678311c85213da0
  ((pokemonGo.length) / 100) * (filterType.length).toFixed(2);

export const applySearchName = (pokemonGo, filterName) => pokemonGo.filter((search) =>
  (search.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1));