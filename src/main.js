import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//Código Mona
//Criar estrutura dos 151 cards

//Variáveis globais: configuração
//Tipos de pokemon
// const originalTypeList = [
//     { type: "Fire", color: "#FF8C00" },
//     { type: "Ice", color: "#DBDDDD" },
//     { type: "Flying", color: "#0E8AA5" },
//     { type: "Psychic", color: "#1E6DE3" },
//     { type: "Grass", color: "#59B539" },
//     { type: "Fighting", color: "#01D4AE" },
//     { type: "Ground", color: "#976B36" },
//     { type: "Steel", color: "#DAA520" },
//     { type: "Bug", color: "#B1D596" },
//     { type: "Ghost", color: "#F6D7F6" },
//     { type: "Dark", color: "#000000" },
//     { type: "Electric", color: "#D7DB1E" },
//     { type: "Rock", color: "#484848" },
//     { type: "Poison", color: "#A6A925" },
//     { type: "Normal", color: "#DE2626" },
// ]

//Carregar informaçoes dentro de cada card
function loadCards() {
    for (let i = 0; i < data["pokemon"].length; i++) {
        //Clonar estrutura dos cards
        let cloneCard = document.querySelector('.container-card').cloneNode(true)
        '.container-card';
        document.querySelector('.container-deck').appendChild(cloneCard);
        //Modificar nome
        document.querySelectorAll('.name-pok')[i].textContent = data["pokemon"][i]["name"];
        //Encurtando nomes muito extensos
        if (data["pokemon"][i]["name"] == "Nidoran ♀ (Female)") {
            document.querySelectorAll('.name-pok')[i].textContent = "Nidoran ♀"
        };
        if (data["pokemon"][i]["name"] === "Nidoran ♂ (Male)") {
            document.querySelectorAll('.name-pok')[i].textContent = "Nidoran ♂"
        };
        //Modificar número
        document.querySelectorAll('.number-pok')[i].textContent = `#${data["pokemon"][i]["num"]}`;
        //Modificar tipo
        //....

        //Modificar imagem
        document.querySelectorAll('.img-pok')[i].src = data["pokemon"][i]["img"];
    }
}

//Modificar cor do cartão de acordo com o tipo
//Atribuir cor do primeiro tipo
//Extrair primeiro tipo do banco de dados
//         let mainType = data["pokemon"][i]["type"][0];
//         //Extrair posição na lista de tipos
//         let index = originalTypeList.indexOf(mainType);
//         //
//         document.querySelectorAll('.container-card')[i].style.backgroundColor = `#${colorList[index]}`
//     }
// };
loadCards();