import data from './data/lol/lol.js';
import { orderByza } from './data.js';
import { orderByaz } from './data.js';

const lol = data.data

const lolList = document.getElementById("lol-list")
const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-bnt")
const noResultFound = document.getElementById("no-results-found")

const renderLol = (lol) => {
    const template = document.getElementById("lol-template") //pegando a referencia no DOM
    const card = template.content.querySelector(".card")
    const championsName = card.querySelector(".name")
    const championsImage = card.querySelector(".img")
    const championsArmor = card.querySelector(".armor")
    const championsMP = card.querySelector(".MP")
    const championsHP = card.querySelector(".HP")

    championsName.textContent = lol.name //populando informacoes
    championsArmor.textContent = "Armor:" + lol.stats.armor
    championsMP.textContent = "MP:" + lol.stats.mp
    championsHP.textContent = "HP:" + lol.stats.hp
    championsImage.setAttribute("src", lol.img)
    const clonedTemplate = document.importNode(template.content, true)
    lolList.appendChild(clonedTemplate)

}
var resp = Object.keys(lol); //pegando as chaves do mapa para passar para a funcao

resp.forEach(element => {
    renderLol(lol[element]);
});
const clearChampionsList = () => {
    championsList.innerHTML = ""
}
const getFilter = () => { // para filtrar/ordenar de a-z/z-a
    let option = document.getElementById("ordenar").value;
    console.log(option);
    
    if(option == "z-a"){
        console.log("|Entrou");
        console.log(lolList.childNodes);
        lolList.innerHTML = "";
       let dados = orderByza();
       dados.forEach(element =>{
           renderLol(lol[element]);
       });

       console.log(dados);
    } else{ 
        lolList.innerHTML = "";
        let dados = orderByaz ();
        dados.forEach(element =>{
            renderLol(lol[element]);
        });
    }
}
document.getElementById("ordenar").addEventListener("change",getFilter);
