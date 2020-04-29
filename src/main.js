import { example } from "./data.js";
//import {filtrar} from './data.js';
import data from "./data/pokemon/pokemon.js";

let arrayPokemon = data["pokemon"];
let ul = document.querySelector("#lista-pokemon");

card(arrayPokemon);

function card(arrayPokemon) {
  ul.innerHTML = "";
  for (let i = 0; i < arrayPokemon.length; i++) {
    let dadoImagem = arrayPokemon[i].img;
    let dadoNome = arrayPokemon[i].name;
    let dadoTipo = arrayPokemon[i].type;
    let dadoFraqueza = arrayPokemon[i].weaknesses;

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
    tipo.textContent += dadoTipo;
    li.appendChild(tipo);

    let fraqueza = document.createElement("p");
    fraqueza.classList.add("lista-fraqueza");
    fraqueza.textContent += dadoFraqueza;
    li.appendChild(fraqueza);
  }
}

let botaoOk = document.querySelector("#botao-ok");
botaoOk.addEventListener("click", function filtrar() {
  let campoFiltro = document.querySelector(".filtrar-pokemon").value;
  const filtrado = arrayPokemon.filter((item) =>
    item.type.includes(campoFiltro)
  );
  card(filtrado);
});

let botaoLimpar = document.querySelector("#botao-limpar");
botaoLimpar.addEventListener("click", card(arrayPokemon));
