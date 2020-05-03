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

//Criar estrutura dos 151 cards
let loadCards = () => {
    for (let i = 0; i < data["pokemon"].length; i++) {
        let cloneCard = document.querySelector('.container-card').cloneNode(true)
        '.container-card';
        document.querySelector('.container-deck').appendChild(cloneCard);
    }
    setInfosOnCard()
}

//Carregar informações nos cards
let setInfosOnCard = () => {
    for (let i = 0; i < data["pokemon"].length; i++) {
        //Modificar nome
        document.querySelectorAll('.name-pok')[i].textContent = data["pokemon"][i]["name"];
        //Encurtando nomes muito extensos
        if (data["pokemon"][i]["name"] == "Nidoran ♀ (Female)") {
            document.querySelectorAll('.name-pok')[i].textContent = "Nidoran ♀"
        }
        if (data["pokemon"][i]["name"] === "Nidoran ♂ (Male)") {
            document.querySelectorAll('.name-pok')[i].textContent = "Nidoran ♂"
        }
        //Modificar número
        document.querySelectorAll('.number-pok')[i].textContent = `#${data["pokemon"][i]["num"]}`;

        //Modificar tipo
        if (data["pokemon"][i]["type"].length < 2) {
            document.querySelectorAll('.type-pok')[i].textContent = data["pokemon"][i]["type"];
        } else {
            document.querySelectorAll('.type-pok')[i].style.width = "150px"

            document.querySelectorAll('.type-pok')[i].textContent = `${data["pokemon"][i]["type"][0]} - ${data["pokemon"][i]["type"][1]}`;

        }
        //Modificar imagem
        document.querySelectorAll('.img-pok')[i].src = data["pokemon"][i]["img"];

        //Modificar cor
        document.querySelectorAll('.container-card')[i].style.backgroundColor = colorTypeList[data["pokemon"][i]["type"][0]];
    }
}



//Remover card que serviu de modelo
let removeTemplateCard = () => document.querySelector('.container-deck').removeChild(document.querySelectorAll('.container-card')[151]);

//Manipulando pokemons com mais de um tipo:
// let cloneTypeBox = (element) => {
//     document.querySelectorAll(".flex-pok-type")[element].appendChild(document.querySelectorAll(".type-pok")[element].cloneNode(true))
// }
// let doubleTypePokList = () => {
//     let list = [];
//     for (let i = 0; i < data["pokemon"].length; i++) {
//         if (data["pokemon"][i]["type"].length > 1) {
//             list.push(data["pokemon"][i])
//         }
//     }
//     list.forEach(cloneTypeBox)
// }



//Chamada das funções (manter essa ordem pror causa das regras de precedência)
loadCards();
removeTemplateCard();