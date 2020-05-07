import data from './data/rickandmorty/rickandmorty.js';

export const pegaNameImage = () => {
  return data.results.map(function (item) {
    return [item.name, item.image, item.gender, item.status, item.species]
  })
};


