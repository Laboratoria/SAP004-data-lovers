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

document.getElementById("A-Z").onclick = () => {
    const orderResult = apllyAscendingOrder(pokemonGo)
    allList(orderResult);
}

document.getElementById("Z-A").onclick = () => {
    const orderResult = applyDescendingOrder(pokemonGo)
    allList(orderResult);
}

/*document.getElementById("select-type").onchange = () => {
    const filterType = document.getElementById("select-type").value;
    const listType = (applySearchType(pokemonGo, filterType))
    allList(listType);
}*/

document.getElementById("select-type").onchange = () => {
    const filterType = document.getElementById("select-type").value;
    const listType = (applySearchType(pokemonGo, filterType));

    document.getElementById("statistics") = () => {
        const statisticsType = pokemonGo.filterType.innerHTML;
        alert (statisticsType, "ola");
        //statisticsType = pokemonGo.filterType / pokemonGo.type.length * 100;
    }

    allList(listType, statisticsType);
}

document.getElementById("filter-name").onkeyup = () => {
    const filterName = document.getElementById("filter-name").value;
    const newList = (applySearchName(pokemonGo, filterName))
    allList(newList);
}