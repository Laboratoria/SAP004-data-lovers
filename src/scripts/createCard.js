import datum from '../data/rickandmorty/rickandmorty.js';

const createCharacter = (character) => `
<li class="cards-list">
  <figure class="front-card">
    <img src="${character.image}"/>
    <figcaption>${character.name}</figcaption>
  </figure>
  <section class="back-card">
    <p>${character.species}</p>
    <p>${character.status}</p>
    <p>${character.gender}</p>
    <p>${character.type}</p>
    <p>${character.origin.name}</p>
    <p>${character.location.name}</p>
    <p>${character.episode.length}</p>
  <section>
</li>
`;

function buildHTML() {
  let cardsBox = document.querySelector('#cards-box');
  let html = '';
  for (let i of datum.results) {
    html += createCharacter(i);
  }
  cardsBox.innerHTML = html;
}

export default buildHTML;
