import { ordenarAZ, ordemQveio, ordenarZA, filtraGender, filtraStatus, elements } from './data.js';

function inserirNoHtml(vetor) {
  let novaIsercao = "";
  novaIsercao += vetor.map((item) =>
    `<div class="cards">
      <img class="imagem" src="${item[1]}">
      <div id="nome"> ${item[0]}</div>
      <p> Gender: ${item[2]}</p>
      <p> Status: ${item[3]}</p>
      <p> Species: ${item[4]}</p>
    </div>`
  ).join("");
  document.getElementById('root').innerHTML = novaIsercao;
};

const selectElement = document.querySelector('.drop-menu');
selectElement.addEventListener('change', seletor)

function seletor() {
  if (selectElement.value === 'A-Z') {
    return inserirNoHtml(ordenarAZ())
  } else if (selectElement.value === 'Z-A') {
    return inserirNoHtml(ordenarZA())
  } else if (selectElement.value === 'alive') {
    return inserirNoHtml(filtraStatus(elements.characterOrder, elements.statusA))
  } else if (selectElement.value === 'dead') {
    return inserirNoHtml(filtraStatus(elements.characterOrder, elements.statusD))
  } else if (selectElement.value === 'male') {
    return inserirNoHtml(filtraGender(elements.characterOrder, elements.genderM))
  } else if (selectElement.value === 'female') {
    return inserirNoHtml(filtraGender(elements.characterOrder, elements.genderF))
  } else {
    return inserirNoHtml(ordemQveio())
  }
}
seletor()


