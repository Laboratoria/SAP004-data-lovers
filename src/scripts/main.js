import buildHTML from './createCard.js'
import data from '../data/rickandmorty/rickandmorty.js';
import { allCharacters, gendersFilter, speciesFilter, sortFilter, statusFilter } from './selectors.js'
import { createFilter, getOptions } from './createFilters.js';


allCharacters.addEventListener('click', () => buildHTML(data.results))

function buildFilter(parentElement, type) {
  const options = getOptions(data.results, type);

  createFilter(parentElement, options, (option) => {
    let characterFiltered = data.results.filter((character) => character[type] === option);
    buildHTML(characterFiltered);
  })

}

buildFilter(speciesFilter, 'species');
buildFilter(gendersFilter, 'gender');
buildFilter(statusFilter, 'status');

buildHTML(data.results);
