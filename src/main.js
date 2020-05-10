import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemonGo = data.pokemon;
const cards = document.getElementById("cards");

function allList(list) {
    document.getElementById("cards").innerHTML = "";
    for (let obj of list) {

        let cardItem = document.createElement("div"); //criando pequenos cards dentro da div maior do html
        cardItem.className = "div-child"; //criei essa cGlasse apenas para teste no css
        
        let imgItem = document.createElement("img"); //criando div imagem dentro da div peq card
        imgItem.src = obj.img;  //setando qual valor do objeto aparecerá na div imagem
        imgItem.className = "img-item";
        cardItem.appendChild(imgItem); //colocando a div de img dentro da pequena div

        let spaceTextCard = document.createElement("div");
        
        spaceTextCard.innerHTML += `<h5>${obj.num}</h5>
        <h2>${obj.name.replace("(Female)", "").replace("(Male)", "")}</h2>
        <p>Tipo: ${obj.type.join(", ")}</p><p>Ovo: ${obj.egg}</p>
        <p>Fraquezas:</p><p>${obj.weaknesses.join(", ")}</p>`;
               
        spaceTextCard.className = "div-inside"
        cardItem.appendChild(spaceTextCard);

       /* let numberItem = document.createElement("h5");
        numberItem.className = "text-card";
        numberItem.innerHTML = obj.num;
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
        //weaknessesItem.textContent = `Fraquezas: ${obj.weaknesses}`;  
        weaknessesItem.textContent = obj.weaknesses.join(", ");
        cardItem.appendChild(weaknessesItem);*/

        cards.appendChild(cardItem);
    }
}
allList(pokemonGo);

document.getElementById("filter-name").addEventListener("keyup", searchName);

function searchName(search) {
    const filterName = document.getElementById("filter-name").value;
    const newList = pokemonGo.filter(function (search) {
        return search.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1;
    });
    allList(newList);
}

document.getElementById("A-Z").addEventListener("click", ascendingOrder);

function ascendingOrder(poke) {
    const orderResult = pokemonGo.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });

    allList(orderResult);
}

document.getElementById("Z-A").addEventListener("click", descendingOrder);

function descendingOrder(poke) {
    const orderResult = pokemonGo.sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    });

    allList(orderResult);
}

document.getElementById("select-type").addEventListener("change", searchType)

function searchType() {
    console.log("teste");
    const filterType = document.getElementById("select-type").value;
    const listType = pokemonGo.filter(function (search) {
        return search.type.includes(filterType);
    });
    allList(listType);
}