import { getCharacters } from '../data/rickandmorty.js'
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


