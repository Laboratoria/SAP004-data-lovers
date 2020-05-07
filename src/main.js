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


//Implementando lógica dos filtros
//Algoritmo para filtar os dados por tipo de pokemon
//Objetivo: selecionar um tipo de pokemon no botão filtrar e na tela inicial visualizar apenas os pokemons daquiele tipo


//Passos: *****CÓDIGO REFATORADO V1 *****
//PASSO1.Criar uma função para reconhecer o grupo de pokemon escolhido do menu
const getTypeChoosed = () => "Fire";
//PASSO2.Recuperar o nome desse grupo
console.log(getTypeChoosed()) //exemplo: retorna no console

//PASSO3.Implementação do filtro de tipo
//Refatorar depois pra não repetir as variáveis
const filterType = (pokemon) => {
    //recuperando o valor escolhido pelo usuário
    let optionUser = getTypeChoosed();
    //criando a lógica de busca
    if (pokemon.type[0] === optionUser || pokemon.type[1] === optionUser) {
        return pokemon
    }
};

//
function applyFilterType(dataset) {
    console.log(dataset.filter(filterType))
};
applyFilterType(data["pokemon"])


//Chamando as funções para aplicar o filtro: Ou seja, a função applyFilterType está filtranbdo o banco de dados e usando o retorno da função filterType para passar pra ela qual o tipo a ser buscado no banco
//ANTES: console.log(applyFilterType());
//DEPOIS: 
// console.log(applyFilterType(data["pokemon"]));



//5.Fazer com que apenas os cards localizados aparecem na tela
//Depois: 
// const loadCards = (dataset) => {
//     for (let i = 0; i < dataset.length; i++) {
//         ...mesma declaração de antes
//     }
//     removeTemplateCard();
// }
//Chamada: loadCards(data["pokemon"])

//Função para carregar os cards filtrados:
//Passo1: sumir com o primeiro deck de cards
//Passo2: fazer os cards de interesse aparecerem no segundo deck

//1.Função para remover todos os cards da tela inicial


//6.O usuário deve conseguir voltar pra tela inicial

//Voltar para home page
const goHomePage = () => window.location.reload()
const goLaboratoriaPage = () => window.location.href = "https://www.laboratoria.la/"

//Atribuição de eventos
document.querySelector('#home').addEventListener('click', goHomePage);
document.querySelector('#logo-lab').addEventListener('click', goLaboratoriaPage)