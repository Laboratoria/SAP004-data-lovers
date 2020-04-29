import data from './data/lol/lol.js';


const lol = data.data

const lolList = document.getElementById("lol-list")
const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-bnt")
const noResultFound = document.getElementById("no-results-found")

const renderLol = (lol) => {
    console.log(lol)
    const template = document.getElementById("lol-template")
    const card = template.content.querySelector(".card")
    const championsName = card.querySelector(".name")
    const championsImage = card.querySelector(".img")
    const championsArmor = card.querySelector(".armor")
    const championsMP = card.querySelector(".MP")
    const championsHP = card.querySelector(".HP")

    championsName.textContent = lol.name
    championsArmor.textContent = "Armor:" + lol.stats.armor
    championsMP.textContent = "MP:" + lol.stats.mp
    championsHP.textContent = "HP:" + lol.stats.hp
    championsImage.setAttribute("src", lol.img)
    const clonedTemplate = document.importNode(template.content, true)
    lolList.appendChild(clonedTemplate)

}
var resp = Object.keys(lol);
console.log(lol);
console.log(resp);
resp.forEach(element => {
    renderLol(lol[element]);
});
const clearChampionsList = () => {
    championsList.innerHTML = ""
}