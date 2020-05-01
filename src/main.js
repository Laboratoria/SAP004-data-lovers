import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemonGo = data.pokemon;
/*let box = `<img src=${pokemonGo.img}>`;
document.getElementById("cards").innerHTML = box;

console.log(box);*/

for (let obj of pokemonGo) {
    console.log(obj);

    let cardItem = document.createElement("div"); //criando pequenos cards dentro da div maior do html
    cardItem.className = "div-child" //criei essa cGlasse apenas para teste no css
    let imgItem = document.createElement("img"); //criando div imagem dentro da div peq card
    imgItem.src = obj.img;  //setando qual valor do objeto aparecerá na div imagem
    imgItem.className = "img-item"
    cardItem.appendChild(imgItem); //colocando a div de img dentro da pequena div

    let numberItem = document.createElement("h5");
    numberItem.className = "text-card";
    numberItem.textContent = obj.num;
    cardItem.appendChild(numberItem);

    let nameItem = document.createElement("h2"); //criando div para colocar o nome do pokemon
    nameItem.className = "text-card";
    nameItem.textContent = obj.name; //indicando qual valor do objeto é o nome
    cardItem.appendChild(nameItem); //colocando a div nome dentro do pequeno card

    let typeItem = document.createElement("p");
    typeItem.className = "text-card";
    typeItem.textContent = `Tipo: ${obj.type}`;
    cardItem.appendChild(typeItem);

    let eggItem = document.createElement("p");
    eggItem.className = "text-card";
    eggItem.textContent = `Ovo: ${obj.egg}`;
    cardItem.appendChild(eggItem);

    let weaknessesItem = document.createElement("p");
    weaknessesItem.className = "text-card";
    weaknessesItem.textContent = `Fraquezas: ${obj.weaknesses}`;
    cardItem.appendChild(weaknessesItem);

    cards.appendChild(cardItem);

}

