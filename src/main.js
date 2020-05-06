import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';



//Variáveis globais: configuração
const colorTypeList = {
    Fire: "#FF8C00",
    Ice: "#DBDDDD",
    Flying: "#0E8AA5",
    Psychic: "#D91CD1",
    Grass: "#59B539",
    Fighting: "#FEC807",
    Ground: "#976B36",
    Steel: "#DAA520",
    Bug: "#1E6DE3",
    Ghost: "#F6D7F6",
    Dark: "#000000",
    Electric: "#D7DB1E",
    Rock: "#484848",
    Poison: "#9D9F25",
    Normal: "#DE2626",
    Water: "#87CEEB",
};

const cloneCards = () => document.querySelector('.container-deck').appendChild(document.querySelector('.container-card').cloneNode(true));

const setInfosOnCard = (node, index, data, attribute) => {
    let parentNode = document.querySelectorAll(node)[index]
    parentNode.textContent = data[index][attribute];

    //Tratando as exceções nas informações
    const fixInfosDetails = () => {
        switch (attribute) {
            case 'name':
                if (data[index][attribute] === "Nidoran ♀ (Female)") {
                    parentNode.textContent = 'Nidoran ♀';
                }
                if (data[index][attribute] === "Nidoran ♂ (Male)") {
                    parentNode.textContent = 'Nidoran ♂';
                }
                break;
            case 'img':
                parentNode.src = data[index][attribute];
                break;
            case 'type':
                parentNode.style.width = "150px";
                if (data[index][attribute].length > 1) {
                    parentNode.textContent = `${data[index][attribute][0]} - ${data[index][attribute][1]}`;
                }
                break;
        }
    }
    fixInfosDetails();

}

const setCardColor = (index) => document.querySelectorAll('.container-card')[index].style.backgroundColor = colorTypeList[data["pokemon"][index]["type"][0]];

const loadCards = () => {
    for (let i = 0; i < data["pokemon"].length; i++) {
        cloneCards();
        setInfosOnCard('.name-pok', i, data["pokemon"], 'name')
        setInfosOnCard('.number-pok', i, data["pokemon"], 'num')
        setInfosOnCard('.type-pok', i, data["pokemon"], 'type')
        setInfosOnCard('.img-pok', i, data["pokemon"], 'img');
        setCardColor(i);
        document.querySelectorAll('.container-card')[i].addEventListener("click", () => {
        clickCard(data["pokemon"][i].name,data["pokemon"][i].num,data["pokemon"][i].type,
        data["pokemon"][i].img,data["pokemon"][i].height,data["pokemon"][i].weight,data["pokemon"][i].candy,
        data["pokemon"][i].candy_count,data["pokemon"][i].egg,data["pokemon"][i].spawn_chance)})
        
    }
    removeTemplateCard();
}

const removeTemplateCard = () => document.querySelector('.container-deck').removeChild(document.querySelectorAll('.container-card')[data["pokemon"].length]);


//Chamada das funções
loadCards();

//Voltar para home page
const goHomePage = () => window.location.reload()
const goLaboratoriaPage = () => window.location.href = "https://www.laboratoria.la/"

//Atribuição de eventos
document.querySelector('#home').addEventListener('click', goHomePage);
document.querySelector('#logo-lab').addEventListener('click', goLaboratoriaPage)

// //modal
const modal = document.querySelector('.modal-char')

function openModal() {
    modal.style.display= "block"
}

// const modal = () => {
//     document.querySelector('.modal-char')
//     modal.style.display= "block"
// }

const closeModal = document.querySelector('.close').addEventListener("click", () => {
    modal.style.display= "none"
})

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display= "none"
        }
    })



function clickCard (name,num,type,img,height,weight,candy,candy_count,egg,spawn_chance) {
    console.log(name,num,type,img,height,weight,candy,candy_count,egg,spawn_chance)
    document.getElementById("char-name").textContent = name
    document.getElementById("char-num").textContent = num
    document.getElementById("char-type").textContent = type
    document.getElementById("char-img").src = img
    document.getElementById("char-height-value").textContent = height
    document.getElementById("char-weight-value").textContent = weight
    document.getElementById("char-cand-value").textContent = candy
    document.getElementById("char-cand-count-value").textContent = candy_count
    document.getElementById("Char-egg-value").textContent = egg
    document.getElementById("char-spawn-chance-value").textContent = spawn_chance
    openModal();
}


