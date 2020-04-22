import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


//const pokes = document.getElementById("pokes");
//console.log(data.pokemon);
//console.log(data.pokemon[0].name);


function pokemonImage (numeroDoIdDoPersonagem){
//let caminho = data.pokemon[numeroDoIdDoPersonagem];
let box =`
      <img src=${data.pokemon.img}>
      <p>${data.pokemon.caminho.type}</p>
`;
//let photo= `<img src=${caminho.img}>`;
//let name=  `<p>${caminho.name}</p>`;
document.getElementById("pokes").innerHTML+= box;

//console.log(name);
//document.getElementById("pokes").innerHTML= nome;
}
//console.log(nome);
//pokemonImage();// executar a fucntion
 //console.log(pokemonImage);

function criaImagemEinsereId(){
   for (let i = 0; i<data.pokemon.length; i++){
      pokemonImage(i);
}
}

criaImagemEinsereId();
console.log(example, data);