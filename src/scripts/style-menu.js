import { searchIcon, searchFilter, search } from './selectors.js'

searchIcon.addEventListener('click', () => search.focus());

search.addEventListener('focusin', () => searchFilter.classList.add('animate--show'));

search.addEventListener('blur', () => searchFilter.classList.remove('animate--show'));
