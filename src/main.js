import {ordenarAZ, ordemQveio, ordenarZA, filtraAll, elements, buscador} from './data.js';

function inserirNoHtml(vetor) {
  let novaIsercao = "";
  novaIsercao += vetor.map((item) =>
    `<div class="cards">
      <img class="imagem" src="${item[1]}" alt"${item[0]}>
      <div id="name"> <strong>${item[0]}</strong></div>
      <p> <strong>Gender:</strong> ${item[2]}</p>
      <p> <strong>Status:</strong> ${item[3]}</p>
      <p> <strong>Species:</strong> ${item[4]}</p>
    </div>`
  ).join("");
  document.getElementById('root').innerHTML = novaIsercao;
}

const selectElement = document.querySelector('.drop-menu');
selectElement.addEventListener('change', seletor)

const search = document.querySelector('#busca')
search.addEventListener("keyup",() => inserirNoHtml(buscador(search, elements))); 

function seletor() {
  if (selectElement.value === 'A-Z') {
    return inserirNoHtml(ordenarAZ())
  } else if (selectElement.value === 'Z-A') {
    return inserirNoHtml(ordenarZA())
  } else if (selectElement.value === 'alive') {
    return inserirNoHtml(filtraAll(elements, "status", "Alive"))
  } else if (selectElement.value === 'dead') {
    return inserirNoHtml(filtraAll(elements, "status", "Dead"))
  } else if (selectElement.value === 'male') {
    return inserirNoHtml(filtraAll(elements, "gender", "Male"))
  } else if (selectElement.value === 'female') {
    return inserirNoHtml(filtraAll(elements, "gender", "Female"))
  } else {
    return inserirNoHtml(ordemQveio())
  }
}
seletor()