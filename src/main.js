import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
console.log(data)



//Variáveis globais: configuração
const colorTypeList = {
    Bug: "#1E6DE3",
    Electric: "#D7DB1E",
    Fighting: "#FEC807",
    Fire: "#FF8C00",
    Flying: "#0E8AA5",
    Ghost: "#F6D7F6",
    Grass: "#59B539",
    Ground: "#976B36",
    Ice: "#DBDDDD",
    Normal: "#DE2626",
    Poison: "#9D9F25",
    Psychic: "#D91CD1",
    Rock: "#484848",
    Steel: "#DAA520",
    Water: "#87CEEB",
};

// ---------------- Estruturação dos cards ------------------------//

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

//Função para carregar cards com as informações dos pokemons
const loadCards = (dataset) => {
    for (let i = 0; i < dataset.length; i++) {
        cloneCards();
        setInfosOnCard('.name-pok', i, data["pokemon"], 'name')
        setInfosOnCard('.number-pok', i, data["pokemon"], 'num')
        setInfosOnCard('.type-pok', i, data["pokemon"], 'type')
        setInfosOnCard('.img-pok', i, data["pokemon"], 'img');
        setCardColor(i);
        document.querySelectorAll('.container-card')[i].addEventListener("click", () => {
            clickCard(data["pokemon"][i].name, data["pokemon"][i].num, data["pokemon"][i].type,
                data["pokemon"][i].img, data["pokemon"][i].height, data["pokemon"][i].weight, data["pokemon"][i].candy,
                data["pokemon"][i].candy_count, data["pokemon"][i].egg, data["pokemon"][i].spawn_chance)
        });
    }
    document.querySelector('.container-deck').removeChild(document.querySelectorAll('.container-card')[dataset.length]);
}
loadCards(data["pokemon"]);

//Configurações do modal (card estendido)
function clickCard(name, num, type, img, height, weight, candy, candy_count, egg, spawn_chance) {
    // const changingInfo = () => {
    //     if (name === "Nidoran ♀ (Female)") {
    //         name = "Nidoran ♀";    
    //     }  else  if (name === "Nidoran ♂ (Male)") {
    //         name = "Nidoran ♂";
    //     } else if (type === "type[0],type[1]"){
    //         type = `${type[0]} - ${type[1]}`;
    //     } else (candy_count === ""){
    //         candy_count = 0;
    //     }
    // }
    // changingInfo();
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
        //Abrir modal
    openModal();
}

const modal = document.querySelector('.modal-char');

function openModal() {
    modal.style.display = "block"
};

const closeModal = document.querySelector('.close').addEventListener("click", () => {
    modal.style.display = "none"
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
});


// ----------- Filtragem e Ordenação de dados -------------//

//Recuperação da escolha dos usuários
function getUserOption(SelectIndex) {
    const select = document.getElementsByClassName('select')[SelectIndex];

    const optionValue = select.options[select.selectedIndex].value;
    console.log(`O valor do do option selecionado foi ${optionValue}`)
    return optionValue;
    };
        
    

//Filtro:
const createfilterType = (pokemon) => {
    //Objetivo: esconder pokemons não selecionados
    let optionUser = getUserOption(0);
    if (pokemon.type[0] !== optionUser && pokemon.type[1] !== optionUser) {
        return pokemon;
    }
};

const applyFilterTypeOnCards = (data) => {
    //Recuperar exibição dos cards ocultos em filtros anteriores
    let cardList = document.querySelectorAll('.container-card');
    cardList.forEach((card) => card.style.display = "block");

    //Lista de cards não selecionados que serão ocultos
    let dataFiltered = data.filter(createfilterType);
    console.log(dataFiltered);

    //Lista de elementos html que contém o núm dos pokemons
    let numberNodeList = document.querySelectorAll('.number-pok');
    //Para cada polemon não selecionado:
    for (let item of dataFiltered) {
        //Pegue o número deste pokemon
        let pokemonNotFilteredNumber = item.num;
        //Para cada elemento html com o n° dos pokemons:
        for (let item of numberNodeList) {
            //Verifique se o número do pokemon não selecionado é igual ao número que está inscrito dentro desse elemento:
            if (pokemonNotFilteredNumber === item.textContent) {
                //se sim, apague o seu nó avô (.container-card)
                item.parentNode.parentNode.style.display = "none"
            };
        }
    };
};

//Ordenação:
function sortData(orderBy) {
    //recuperar escolha do usuário sobre que tipo de ordem
    const optionOrderUser = getUserOption(1);
    //Declaração da variável a ser manipulada dentro da função, dependendo da esolha do usuário
    let ordenado
    if (optionOrderUser === "Menor-nº" || optionOrderUser === "A-Z") {
        ordenado = data["pokemon"].sort((a, b) => a[orderBy] > b[orderBy] ? 1 : -1)
    }
    if (optionOrderUser === "Maior-nº" || optionOrderUser === "Z-A") {
        ordenado = data["pokemon"].sort((a, b) => a[orderBy] > b[orderBy] ? -1 : 1)
    }
    console.log(ordenado);
    loadCards(ordenado);
    };

//Voltar para home page
const goHomePage = () => window.location.reload()
const goLaboratoriaPage = () => window.location.href = "https://www.laboratoria.la/"

//Atribuição de eventos
document.querySelector('#home').addEventListener('click', goHomePage);
document.querySelector('#logo-lab').addEventListener('click', goLaboratoriaPage)
document.getElementsByClassName('select')[0].addEventListener("change", () => {
    getUserOption(0);

    applyFilterTypeOnCards(data.pokemon);
});

document.getElementsByClassName('select')[1].addEventListener("change", () => {

    if (getUserOption(1) === "Menor-nº" || getUserOption(1) === "Maior-nº") {
        sortData("id")
    } else if (getUserOption(1) === "A-Z" || getUserOption(1) === "Z-A") {
        sortData("name")
    }
});

