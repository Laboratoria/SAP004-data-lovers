import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let cards = document.querySelector('#cards');

function createTemplateString(keyCharacter) {
  const datum = data.results[keyCharacter];
  let constructorTemplateString =  `
    <section class="cards-box">
      <img src="${datum.image}"/>
      <p>${datum.name}</p>
      <p>${datum.species}</p>
      <p>${datum.status}</p>
      <p>${datum.gender}</p>
      <p>${datum.type}</p>
      <p>${datum.origin.name}</p>
      <p>${datum.location.name}</p>
      <p>${datum.episode.length}</p>
    </section>
  `;
  return constructorTemplateString;
}

function sendKey() {
  let html = '';
  for(let i = 0; i < data.results.length; i++){
    html += createTemplateString(i)
  }
  cards.innerHTML = html;
}

sendKey();
