import datum from '../data/rickandmorty/rickandmorty.js';

const createCharacter = (character) => `
<li class="cards-box">
  <img src="${character.image}"/>
  <p>${character.name}</p>
  <p>${character.species}</p>
  <p>${character.status}</p>
  <p>${character.gender}</p>
  <p>${character.type}</p>
  <p>${character.origin.name}</p>
  <p>${character.location.name}</p>
  <p>${character.episode.length}</p>
</li>
`;

function buildHTML() {
  let cardsList = document.querySelector('#cards-list');
  let html = '';
  for (let i of datum.results) {
    html += createCharacter(i);
  }
  cardsList.innerHTML = html;
}

export default buildHTML;
