import { apllyAscendingOrder, applyDescendingOrder, applySearchType, applySearchName } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemonGo = data.pokemon;
const cards = document.getElementById("cards");

function allList(list) {
    document.getElementById("cards").innerHTML = "";
    for (let obj of list) {

        let cardItem = document.createElement("div"); //criando pequenos cards dentro da div maior do html
        cardItem.className = "div-child"; //criei essa cGlasse apenas para teste no css

        cardItem.innerHTML += `<img src = ${obj.img} class = "img-item"><h5>${obj.num}</h5>
        <h2>${obj.name.replace("(Female)", "").replace("(Male)", "")}</h2>
        <p>Tipo: ${obj.type.join(", ")}</p><p>Ovo: ${obj.egg}</p>
        <h3>Fraquezas:</h3><p>${obj.weaknesses.join(", ")}</p>`;

        cards.appendChild(cardItem);
    }
}
allList(pokemonGo);

document.getElementById("A-Z").addEventListener("click", ascendingOrder);

function ascendingOrder(poke) {
    const orderResult = pokemonGo.sort(function (a, b) {
        return apllyAscendingOrder(a, b);
    });

    allList(orderResult);
}

document.getElementById("Z-A").addEventListener("click", descendingOrder);

function descendingOrder(poke) {
    const orderResult = pokemonGo.sort(function (a, b) {
        return applyDescendingOrder(a, b);
    });

    allList(orderResult);
}

document.getElementById("select-type").addEventListener("change", searchType)

function searchType() {
    const filterType = document.getElementById("select-type").value;
    const listType = pokemonGo.filter(function (search) {
        return applySearchType(search, filterType);
    });
    allList(listType);
};

document.getElementById("filter-name").addEventListener("keyup", searchName);

function searchName(search) {
    const filterName = document.getElementById("filter-name").value;
    const newList = pokemonGo.filter(function (search) {
        return applySearchName(search, filterName);
    })
    allList(newList);
};
/*function searchName(search) {
    const filterName = document.getElementById("filter-name").value;
    const newList = pokemonGo.filter(function (search) {
        return search.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1;
    });
    allList(newList);
}*/
