import { buildHTML } from './createCard.js'
import { allCharacters, gendersFilter, search, speciesFilter, sortByNameUp, sortByNameDown, statusFilter, cardsBox } from './selectors.js'
import { createFilter, getOptions } from './createFilters.js';
import { filterExact, filterLike, sortByProp } from './data.js';

function buildFilter(data, parentElement, type) {
  const options = getOptions(data, type);

  createFilter(parentElement, options, (option) => {
    let characterFiltered = filterExact(data, type, option);
    buildHTML(cardsBox, characterFiltered);
  })
}

function sortCharacter(data, prop, upOrDown) {
  let sorted = sortByProp(data, prop, upOrDown);
  buildHTML(cardsBox, sorted);
}

function searchCharacter(data) {
  let listCharacters = filterLike(data, 'name', event.target.value);
  buildHTML(cardsBox, listCharacters);
}

async function getCharacters() {
  const characters = [];
  const promises = [];
  const getPage = (i) => fetch(`https://rickandmortyapi.com/api/character/?page=${i}`).then(response => response.json());

  const firstPage = await getPage(1);

  for (let i = 2; i < firstPage.info.pages; i++) {
    promises.push(getPage(i));
  }

  characters.push(...firstPage.results);

  // eslint-disable-next-line no-undef
  (await Promise.all(promises)).forEach((responses) => characters.push(...responses.results));

  return characters;
}

getCharacters().then(characters => {
  search.addEventListener('input', searchCharacter.bind(null, characters));
  allCharacters.addEventListener('click', sortCharacter.bind(null, characters, 'id', true));
  sortByNameUp.addEventListener('click', sortCharacter.bind(null, characters, 'name', true));
  sortByNameDown.addEventListener('click', sortCharacter.bind(null, characters, 'name', false));

  buildFilter(characters, speciesFilter, 'species');
  buildFilter(characters, gendersFilter, 'gender');
  buildFilter(characters, statusFilter, 'status');

  buildHTML(cardsBox, characters);
});


