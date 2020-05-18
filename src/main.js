import { apllyAscendingOrder, applyDescendingOrder, applySearchType, resultCalcType, applySearchName  } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemonGo = data.pokemon;
const cards = document.getElementById("cards");

function allList(list) {
    document.getElementById("cards").innerHTML = "";
    for (let obj of list) {

        let cardItem = document.createElement("div"); 
        cardItem.className = "div-child";

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
    allList(orderResult)
    document.getElementById("statistics").innerHTML = "";
}

document.getElementById("Z-A").onclick = () => {
    const orderResult = applyDescendingOrder(pokemonGo)
    allList(orderResult);
    document.getElementById("statistics").innerHTML = "";
}

document.getElementById("select-type").onchange = () => {
    const filterType = document.getElementById("select-type").value;
    const listType = (applySearchType(pokemonGo, filterType))
    const filterCalcType = (resultCalcType(pokemonGo, filterType))
    document.getElementById("statistics").innerHTML = `<p>Os Pokémons do tipo ${filterType} representam ${filterCalcType} % dos Pokémons da primeira geração.</p>`;
    allList(listType);
    statistics ()
} 

function statistics () {
    const filterType = document.getElementById("select-type").value;
    const filterCalcType = pokemonGo.filter (search => search.type.includes(filterType))
    const result = Math.round(((filterCalcType.length * 100) /pokemonGo.length) *100)/100
    document.getElementById("statistics").innerHTML = `Existem ${result} % dos Pokémons do tipo ${filterType}`;
} 

/*document.getElementById("select-type").addEventListener ("change", calcType);
    function calcType() {
        const infoToCalcType = document.getElementById("select-type").value;
        const filterToCalcType = pokemonGo.filter(function(search) {
            return search.type.includes(infoToCalcType);
        })
        const tipoSelecionado = infoToCalcType.length;
        const otherCalc = pokemonGo.length;
        const resultCalcType = ((tipoSelecionado*100) / otherCalc).toFixed(2);
        document.getElementById("statistics").innerHTML = `Os Pokémons do tipo ${infoToCalcType} representam ${resultCalcType} % dos Pokémons`;
    }

    allList(listType, statisticsType);*/


document.getElementById("filter-name").onkeyup = () => {
    const filterName = document.getElementById("filter-name").value;
    const newList = (applySearchName(pokemonGo, filterName))
    allList(newList);
    document.getElementById("statistics").innerHTML = "";
}