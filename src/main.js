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
        data["pokemon"][i].candy_count,data["pokemon"][i].egg,data["pokemon"][i].spawn_chance)});
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
document.querySelector('#logo-lab').addEventListener('click', goLaboratoriaPage);

// //modal
const modal = document.querySelector('.modal-char');

function openModal() {
    modal.style.display= "block"
};

const closeModal = document.querySelector('.close').addEventListener("click", () => {
    modal.style.display= "none"
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display= "none"
    }
});


function clickCard (name,num,type,img,height,weight,candy,candy_count,egg,spawn_chance) {
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


//INICIANDO A IMPLEMENTAÇÃO DO CÓDIGO DE FILTRO

//Passos:
//PASSO1.Criar uma função para reconhecer o grupo de pokemon escolhido 
//Aqui estou simulando que o usuá"rio escolheu ‘fogo’. Falta implementar a lógica dessa função. Ju ficou de ver com a Palomita depois!
const ElementosOption= ["Filtar","Bug","Dark","Electric","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Steel","Water"];

const selectMenu = document.querySelector('.select')
console.log(selectMenu) 
selectMenu.addEventListener("click", () => {

    const optionMenu = document.getElementsByTagName('option')
    for (let i=0; i < optionMenu.length; i++){
        console.log(optionMenu)
    }

} )


///tentando obter a função debuscar os valores dos elementos clicados
// function selecionarTexto(elementId, cod) {
//     var elt = document.getElementById(elementId);
//     var opt = elt.getElementsByTagName("option");
//     for(var i = 0; i < opt.length; i++) {
//       if(opt[i].value == cod) {
//         alert(opt[i].text)


// const getTypeOption = () => "Fire";
// //PASSO2.Recuperar o nome desse grupo
// console.log(getTypeOption()); //retorna 'Fire' no console. Ok, funciona!

//PASSO3.Acessar o banco de dados +
//PASSO4.Localizar os pokemons que sao daquele tipo no banco de dados
//Criando a função de filtrar o tipo:
//Atenção: alguns pokemons tem mais de um tipo (lista de tipos). Por isso na busca você deve explicitamente mostrar que ele deve rastrear tanto o tipo que está na primeira posição da lista de tipos (pokemon.type[0]) quanto na segunda posição(pokemon.type[1])
// const filterType = (pokemon) => {
//    //capturando o valor escolhido pelo usuário
//    let optionUser = getTypeOption();
//    //implementando a busca
//    if (pokemon.type[0] === optionUser || pokemon.type[1] === optionUser) {
//        return pokemon
//    }
// };

//Aplicando a função de filtro no nosso banco
// function applyFilterType() {
//    return data["pokemon"].filter(filterType);
// }

//Chamando as funções para aplicar o filtro
// console.log(applyFilterType());
//Ou seja, a função applyFilterType está filtranbdo o banco de dados e usando o retorno da função filterType para passar pra ela qual o tipo a ser buscado no banco (no caso, fogo). Próximo passo, tornar a função escalável para filtrar por qualquer tipo, não só fogo

//5.Fazer com que apenas os cards localizados aparecem na tela: fazer
//6.O usuário deve conseguir voltar pra tela inicial: fazer




// function getOptionType (){
//     const fogo = document.getElementById("tipo-fire")
//     fogo.addEventListener("click", (event) => {
//     if (event.target == fogo){ 
//         console.log("funcionou")
//         }
//     })
// }
// getOptionType();


// // document.getElementById("value")[i].addEventListener("click", typefilter) 
// const fire = "Fire"
// function typefilter(dados,type) {
//     return (dados.type == type)
//     console.log(typefilter)
// }
