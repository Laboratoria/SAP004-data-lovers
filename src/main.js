import { orderAZ, naturalOrder, orderZA, filterAll, elements, searchName } from './data.js';

function insertHtml(vector) {
  let newInsertion = "";
  newInsertion += vector.map((item) =>
    `<div class="cards">
      <img id="imagem" src="${item[1]}" alt"${item[0]}>
      <div id="name"> <strong>${item[0]}</strong></div>
      <p class="info"> <strong>Gender:</strong> ${item[2]}
       <br><strong>Status:</strong> ${item[3]}
      <br><strong>Species:</strong> ${item[4]}</p>
    </div>`
  ).join("");
  document.getElementById('root').innerHTML = newInsertion;
}

const selectElement = document.querySelector('.drop-menu');
selectElement.addEventListener('change', selector)

const search = document.querySelector('#searchName')
search.addEventListener("keyup", () => insertHtml(searchName(search, elements)));

function selector() {
  if (selectElement.value === 'A-Z') {
    return insertHtml(orderAZ())
  } else if (selectElement.value === 'Z-A') {
    return insertHtml(orderZA())
  } else if (selectElement.value === 'alive') {
    return insertHtml(filterAll(elements, "status", "Alive"))
  } else if (selectElement.value === 'dead') {
    return insertHtml(filterAll(elements, "status", "Dead"))
  } else if (selectElement.value === 'male') {
    return insertHtml(filterAll(elements, "gender", "Male"))
  } else if (selectElement.value === 'female') {
    return insertHtml(filterAll(elements, "gender", "Female"))
  } else {
    return insertHtml(naturalOrder())
  }
}
selector()