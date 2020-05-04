import buildHTML from './createCard.js'
import data from '../data/rickandmorty/rickandmorty.js';
import { allCharacters, gendersFilter, search, speciesFilter, sortByNameUp, sortByNameDown, statusFilter } from './selectors.js'
import { createFilter, getOptions } from './createFilters.js';
import { filterExact, filterLike, sortByProp } from './data.js';

buildHTML(data.results);

allCharacters.addEventListener('click', buildSort.bind(null, 'id', true));
sortByNameUp.addEventListener('click', buildSort.bind(null, 'name', true));
sortByNameDown.addEventListener('click', buildSort.bind(null, 'name', false));

search.addEventListener('input', (event) => {
  let listCharacters = filterLike(data.results, 'name', event.target.value);
  buildHTML(listCharacters);
})

function buildFilter(parentElement, type) {
  const options = getOptions(data.results, type);

  createFilter(parentElement, options, (option) => {
    let characterFiltered = filterExact(data.results, type, option);
    buildHTML(characterFiltered);
  })
}

function buildSort(prop, upOrDown) {
  let sorted = sortByProp(data.results, prop, upOrDown);
  buildHTML(sorted);
}

buildFilter(speciesFilter, 'species');
buildFilter(gendersFilter, 'gender');
buildFilter(statusFilter, 'status');


