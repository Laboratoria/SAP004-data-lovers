import data from './data/rickandmorty/rickandmorty.js'

export const elements = data.results

export const getInfo = (vector) => {
  return vector.map(function (item) {
    return [item.name, item.image, item.gender, item.status, item.species]
  })
};

export const naturalOrder = () => {
  return getInfo(elements);
};

export const orderAZ = () => {
  return getInfo(elements).sort()
};

export const orderZA = () => {
  return orderAZ().reverse();
};

export function filterAll(list, data, value) {
  let arrayAllFilter = [];
  arrayAllFilter = list.filter(item => {
    if (item[data] === value) {
      return item;
    }
  });
  return getInfo(arrayAllFilter);
}

export const searchName = (input, character) => {
  let transformInput = input.value.toLowerCase();
  let filter = character.filter((item) => {
    let transformData = item.name.toLowerCase();
    let characterName = transformData.substr(0, transformInput.length);
    return (characterName.includes(transformInput));
  });
  return getInfo(filter);
};
