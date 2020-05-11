import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
import pokemon from './data/pokemon/pokemon.js';
console.log(data)


//Variáveis globais: configuração
const colorTypeList = {
    Bug: "#1E6DE3",
    Dark: "#000000",
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
    }
    removeCard(dataset.length);
}

//Função para remover template
const removeCard = (index) => document.querySelector('.container-deck').removeChild(document.querySelectorAll('.container-card')[index]);

//Chamada
loadCards(data["pokemon"]);

//Função para recuperar escolha de filtro do usuário
const getTypeChoosedfunction = () => {
    const select = document.getElementsByClassName('select')[0];
    const optionValue = select.options[select.selectedIndex].value;
    return optionValue;
};


//Implementação do filtro por tipo
//Refatorar depois e tirar comments
const createfilterType = (pokemon) => {
    console.log(pokemon)
        //recuperando o valor escolhido pelo usuário
    let optionUser = getTypeChoosedfunction();
    console.log(optionUser)
        //criando a lógica de busca
    if (pokemon.type[0] !== optionUser && pokemon.type[1] !== optionUser) {
        return pokemon
    }
};


const applyFilterTypeOnCards = () => {
    let cardList = document.querySelectorAll('.container-card');
    // console.log(cardList);
    cardList.forEach(function(card) {
        card.style.display = "block"
    });
    // cardList.map(card => card.style.display = "block");
    let dataFiltered = data["pokemon"].filter(createfilterType);
    console.log(dataFiltered);

    //como fazer o array diff?Quero usá-lo para sumir com os cards não selecionados na tela inicial
    //simulando um array diff qualquer
    // let [a, b, , , c, d, e, , f, g, h, , i, j] = data["pokemon"];
    // let dataNotFiltered = [a, b, c, d, e, f, g, h, i, j];
    // console.log(dataNotFiltered);


    // //sumir com cards não selecionados:
    //1.Pegar os nós html que contém o número dos pokemons
    let numberNodeList = document.querySelectorAll('.number-pok');

    // //Para cada polemon não selecionado:
    for (let item of dataFiltered) {
        //Pegue o número deste pokemon
        let pokemonNotFilteredNumber = item.num;

        //Para cada container de número de pokemons:
        for (let item of numberNodeList) {
            //Verifique se o número do pokemon não selecionado é igual ao número que está inscrito dentro desse container:
            if (pokemonNotFilteredNumber === item.textContent) {
                //se sim, apague o seu nó avô (.container-card)
                item.parentNode.parentNode.style.display = "none"
            };
        }
    };
};

//Voltar para home page
const goHomePage = () => window.location.reload()
const goLaboratoriaPage = () => window.location.href = "https://www.laboratoria.la/"

//Atribuição de eventos
document.querySelector('#home').addEventListener('click', goHomePage);
document.querySelector('#logo-lab').addEventListener('click', goLaboratoriaPage)
document.getElementsByClassName('select')[0].addEventListener("change", () => {
    getTypeChoosedfunction();
    applyFilterTypeOnCards();
});
// document.getElementsByClassName('select')[0].addEventListener("click", applyFilterTypeOnCards);