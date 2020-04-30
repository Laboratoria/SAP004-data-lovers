import data from './data/rickandmorty/rickandmorty.js';

let newELement = document.createElement("div");
let myData = document.createTextNode(data.results.map(({name, status, species, image}) => `
Nome: ${name}
Status: ${status}
Espécie: ${species}`))
let gettingElement = newELement.appendChild(myData);
document.getElementById("listening").appendChild(gettingElement);

