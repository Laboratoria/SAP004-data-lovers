import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


console.log(example, data);

   let dado = document.querySelector("#lista-pokemon");
   dado.innerHTML = "";

   for (let i = 0; i < data.pokemon.length; i++){
   
    let dadoImagem = data.pokemon[i].img;       
    let dadoNome = data.pokemon[i].name;
    let dadoTipo = data.pokemon[i].type;
        
    let li = document.createElement("li");
    li.classList.add("lista-pokedex-link");
    li.textContent += dadoNome;
    dado.appendChild(li);  
    console.log(li);

    let img = document.createElement("img");
    img.classList.add("lista-img");
    img.src += dadoImagem;
    li.appendChild(img);

    let tipo = document.createElement("tipo");
    tipo.classList.add("lista-tipo");
    tipo.textContent += dadoTipo;
    li.appendChild(tipo);
   } 
  
 
