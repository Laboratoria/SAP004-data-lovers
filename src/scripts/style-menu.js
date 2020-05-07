import { listIcon, listSearch, searchNave, search } from './selectors.js'

listSearch.addEventListener('click', () => {
  openSearch();
});

function openSearch () {
  listIcon.style.display = 'none';
  listSearch.style.width = '100%';
  search.style.display = 'block';
  searchNave.style.display = 'block';
  searchNave.classList.add('nave--fly');
  search.focus();
}

search.addEventListener('blur', () => {
  listIcon.style.display = 'block';
  search.style.display = 'none';
  searchNave.style.display = 'none';
  listSearch.style.width = '0%';
});
