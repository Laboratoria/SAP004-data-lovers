import data from './data/rickandmorty/rickandmorty.js'

export const elements = data.results

export const ordenadesgraça = (vetor) => {
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


/* google.charts.load('current', {'packages' : ['corechart']});

function desenharGrafico () {
  const objectSize = Object.getOwnPropertyNames(data).length
let statusA = elements.map(statusInfo => (statusInfo['status', 'Alive'])).reduce((a, b) => a + b) / objectSize;
  let tabela = new google.visualization.DataTable();
  tabela.addRows([
    ['Alive', statusA],
  ]);

  let chart = new google.visualization.PieChart(document.getElementById('grafico'))
  chart.draw(tabela)
}

google.charts.setOnLoadCallback(desenharGrafico); */