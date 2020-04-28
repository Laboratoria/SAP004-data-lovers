import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//document.getElementById('root').innerHTML = data.results.map((item) => item.name)
document.getElementById('root').innerHTML = data.results.map((item) => `
  <aside>
    <img src="${item.image}" alt="${item.name}">
  </aside>
`)