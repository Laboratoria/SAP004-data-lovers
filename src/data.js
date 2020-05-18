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
  const filter = character.filter(item => {
  const transformData = item.name.toLowerCase();
  const characterName = transformData.substr(0, input.length);
    return (characterName.includes(input));
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

  const legend = [["Female", countedNames.Female],
  ["Male", countedNames.Male],
  ["Unknown", countedNames.unknown],
  ["Genderless", countedNames.Genderless]]


  return legend
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

  const legend = [["Alive", countedNames.Alive],
  ["Dead", countedNames.Dead],
  ["Unknown", countedNames.unknown]]
  return legend
}