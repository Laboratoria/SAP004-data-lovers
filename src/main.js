import {filtrar, ordemNomes, buscarNome} from './data.js';
import data from "./data/pokemon/pokemon.js";

let arrayPokemon = data["pokemon"];
let ul = document.querySelector("#lista-pokemon");


card(arrayPokemon);

let campoFiltro = document.querySelector(".filtrar-pokemon")
campoFiltro.addEventListener("input", function filtrados(){
 card(filtrar(campoFiltro.value, arrayPokemon));
});
  
let botaoLimpar = document.querySelector("#botao-limpar");
botaoLimpar.addEventListener("click", function limparFiltro(){
  let campoFiltro = document.querySelector(".filtrar-pokemon");
  campoFiltro.value="";
  card(arrayPokemon);
});

let campoOrdem = document.querySelector("#campo-ordenacao-pokemon");
campoOrdem.addEventListener("input", function(){
  card(ordemNomes(campoOrdem.value, arrayPokemon));
})

let botaoLimparOrdem = document.querySelector("#limpar-ordem-pokemon");
botaoLimparOrdem.addEventListener("click", function limparOrdem(){
  let campoOrdem = document.querySelector("#campo-ordenacao-pokemon");
  campoOrdem.value="";
  card(arrayPokemon);
})


let campoBusca = document.querySelector("#campo-busca");
campoBusca.addEventListener("input", function Buscado(){
  let campoBuscado = document.querySelector("#campo-busca").value;
  campoBuscado = campoBuscado.substring(0,1).toUpperCase().concat(campoBuscado.substring(1));
  card(buscarNome(campoBuscado, arrayPokemon));
});



function card(array) {
  ul.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let dadoImagem = array[i].img;
    let dadoNome = array[i].name;
    let dadoTipo = array[i].type;

    let li = document.createElement("li");
    li.classList.add("lista-pokedex-link");
    li.textContent += dadoNome;
    ul.appendChild(li);

    let img = document.createElement("img");
    img.classList.add("lista-img");
    img.src += dadoImagem;
    li.appendChild(img);

    let tipo = document.createElement("tipo");
    tipo.classList.add("lista-tipo");
    tipo.textContent += dadoTipo.join(" e ");
    li.appendChild(tipo);

  }
}