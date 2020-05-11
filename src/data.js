import data from './data/rickandmorty/rickandmorty.js'

export const elements = data.results

const ordenadesgraça = (vetor) => {
  return vetor.map(function (item) {
    return [item.name, item.image, item.gender, item.status, item.species]
  })
};

export const ordemQveio = () => {
  return ordenadesgraça(elements);
};

export const ordenarAZ = () => {
  return ordenadesgraça(elements).sort()
};

export const ordenarZA = () => {
  return ordenarAZ().reverse();
};

export function filtraAll(lista, dados, valor) {
  let ordenafdp = [];
  ordenafdp = lista.filter(item => {
    if (item[dados] === valor) {
      return item;
    }
  });
  return ordenadesgraça(ordenafdp);
}

export const buscador = (input, personagem) => {
  let transformaInput = input.value.toLowerCase();
  let filtro = personagem.filter((item) => {
    let transformaData = item.name.toLowerCase();
    let caracteresNome = transformaData.substr(0, transformaInput.length);
    return (caracteresNome.includes(transformaInput));
  });
  return ordenadesgraça(filtro);
};
