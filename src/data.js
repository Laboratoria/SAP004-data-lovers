import data from './data/rickandmorty/rickandmorty.js'

export const elements = data.results

export const getInfo = (vector) => {
  return vector.map(function (item) {
    return [item.name, item.image, item.gender, item.status, item.species]
  })
};

export const naturalOrder = (item) => {
  return getInfo(item);
};

export const orderAZ = (item) => {
  return getInfo(item).sort()
};

export const orderZA = (item) => {
  return orderAZ(item).reverse();
};

export const filterAll = (list, data, value) => {
  let arrayAllFilter = [];
  arrayAllFilter = list.filter(item => {
    if (item[data] === value) {
      return item;
    }
  });
  return getInfo(arrayAllFilter);
}

export const searchName = (input, character) => {
  const filter = character.filter(item => {
    return item.name.toLowerCase().substr(0, input.length).includes(input);
  });
  return getInfo(filter);
};

export const countGender = (list) => {
  const data = list.map(function (item) {
    return item.gender
  })
  const countedNames = data.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  return [["Female", countedNames.Female],
  ["Male", countedNames.Male],
  ["Unknown", countedNames.unknown],
  ["Genderless", countedNames.Genderless]]
}
export const countStatus = (list) => {
  const data = list.map(function (item) {
    return item.status
  })
  const countedNames = data.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  return [["Alive", countedNames.Alive],
  ["Dead", countedNames.Dead],
  ["Unknown", countedNames.unknown]]
}