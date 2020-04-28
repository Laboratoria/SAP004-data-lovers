import data from './data/rickandmorty/rickandmorty.js';
import {filterData, sortData} from './data.js';

//recebe lista de character) 
function renderCharacters(characters) {
    const characterContainer = document.getElementById('characters');
    let template = "";

    // for(let i=0; i < characters.length; i++) {
    //  const character = characters[i]
    //  template += `<div class="character">
    //         <img src="${character.image}" alt="${character.name}">
    //         <span>Nome: ${character.name}</span>
    //     </div>`
    // }
    
    characters.forEach((character) => {
        template += `<div class="character">
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <span> ${character.name}</span>
        </div>`
    })
    characterContainer.innerHTML = template;
}

function addStatusFilter() {
    const statusFilter=document.querySelectorAll(".status");
    const statuFilter = (event) => {
        const currentStatus = event.target.value;
        const filteredCharacters = filterData(data.results,"status", currentStatus);
        renderCharacters(filteredCharacters);
    }
    statusFilter.forEach((button) => {
        button.addEventListener("click", statuFilter)
    })
}

function addSpeciesFilter() {
    //pega todos os botoes .specie//
    const speciesFilter=document.querySelectorAll(".species");
    //funcao botao especifico//
    const specieFilter = (event) => {
        const currentSpecie = event.target.value;
        //todos os personagens da especie q eu passei//
        const filteredCharacters = filterData(data.results, "species", currentSpecie);
        //mostra qualquer lista de personagens//
        renderCharacters(filteredCharacters);
    }
    //forEach passou por todos//
    speciesFilter.forEach((button) => {
        button.addEventListener("click", specieFilter)
    })
}
function addGenderFilter() {
    const gendersFilter=document.querySelectorAll(".gender");
    const genderFilter = (event) => {
        const currentGenders = event.target.value;
        const filteredCharacters = filterData(data.results,"gender", currentGenders);
        renderCharacters(filteredCharacters);
    }
    gendersFilter.forEach((button) => {
        button.addEventListener("click", genderFilter)
    })
}

function addSortByName() {
const sortElement = document.querySelectorAll(".sort");
const sortByName = (event) => {
    const currentSort = event.target.value;
    const sortedCharacters = sortData(data.results, "name", currentSort);
    renderCharacters(sortedCharacters);
}
sortElement.forEach((input) => {
    input.addEventListener("click", sortByName)
}) 
}

renderCharacters(data.results)
addSpeciesFilter()
addStatusFilter()
addSortByName()
addGenderFilter()
