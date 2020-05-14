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

export const searchName = (list, letters) => {
  let filter = list.filter(item => item.name.toLowerCase().includes(letters.toLowerCase()));
  return getInfo(filter);
};

/*   export const searchName = (input, character) => {
    let transformInput = input.value.toLowerCase();
    let filter = character.filter((item) => {
      let transformData = item.name.toLowerCase();
      let characterName = transformData.substr(0, transformInput.length);
      return (characterName.includes(transformInput));
    });
    return getInfo(filter);
  }; */

export const countGender = (list) => {
  let data = list.map(function (item) {
    return item.gender
  })
  let countedNames = data.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  let legend = [["Gender Female", countedNames.Female],
  ["Gender Male", countedNames.Male],
  ["Unknown", countedNames.unknown],
  ["Genderless", countedNames.Genderless]]


  return legend
}
export const countStatus = (list) => {
  let data = list.map(function (item) {
    return item.status
  })
  let countedNames = data.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  let legend = [["Alive", countedNames.Alive],
  ["Dead", countedNames.Dead],
  ["Unknown", countedNames.unknown]]
  return legend
}