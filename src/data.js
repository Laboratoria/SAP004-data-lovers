import { pegaNameImage } from './functionsdata.js'
import data from './data/rickandmorty/rickandmorty.js'

export const ordenarAZ = () => {
  return pegaNameImage().sort()
};

export const ordemQveio = () => {
  return pegaNameImage();
};

export const ordenarZA = () => {
  return ordenarAZ().reverse();
};

const ordenadesgraça = (vetor) => {
  return vetor.map(function (item) {
    return [item.name, item.image, item.gender, item.status, item.species]
  })
};

export const elements = {
  characterOrder: data.results,
  statusA: "Alive",
  statusD: "Dead",
  statusU: "Unknown",
  genderM: "Male",
  genderF: "Female"
}

export function filtraStatus(lista, valor) {
  let ordenafdp = [];
  ordenafdp = lista.filter(function (item) {
    if (item.status === valor) {
      return item;
    }
  });
  return ordenadesgraça(ordenafdp);
}

export function filtraGender(lista, valor) {
  let ordenafdp = [];
  ordenafdp = lista.filter(function (item) {
    if (item.gender === valor) {
      return item;
    }
  });
  return ordenadesgraça(ordenafdp);
}



