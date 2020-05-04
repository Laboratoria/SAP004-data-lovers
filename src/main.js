/*Bloco de configurações*/
import { searchFunc } from './data.js';
import data from './data/pokemon/pokemon.js';
const root = document.getElementById("root") // import div
const pokemons = data.pokemon // pokemons = array
const filtersMenu = document.getElementById("filters")
filtersMenu.style.display = "none"

/*Bloco de impressão dos pokemons*/
const print = pokemons => { //função para imprimir os pokemons
    const card = document.createElement("div") // cria uma nova div
    const img = document.createElement("img") //criar elemento img
    const cardInformation = document.createElement("div") //cria div das informações
    const power = document.createElement("div")
    img.src = pokemons.img // coloca o endereço da imagem

    card.classList.add("card")
    img.classList.add("picture") // coloca uma classe na imagem
    cardInformation.innerHTML += `<br><h5>${pokemons.num}</h5><br><h3>${pokemons.name}</h4>` // coloca o nameInput
    pokemons.type.forEach(a => { 
        const powerType = document.createElement("div")
        powerType.classList = (a)
        powerType.classList.add("power")
        powerType.innerHTML += `<h5>${a}</h5>` //${pokemons.type[1] = pokemons.type[1] || ""}</h5>` // coloca o tipo
        power.appendChild(powerType)
    });
    
    cardInformation.appendChild(power)
    card.appendChild(cardInformation, img) // coloca informações no card
    card.appendChild(img) //coloca a imagem na nova div
    root.appendChild(card) // coloca nova div dentro da div existente
}

/*Limpa a raiz*/
const clearDisplay = () => root.innerHTML = ""

/*Cria botão para mostrar mais e mostrar menos*/
const creatButtonView = () => {
    const card = document.createElement("div") // cria uma nova div
    const viewAll = document.createElement("div")

    card.classList.add("view-all-class")
    card.classList.add("card") // coloca uma clas na div

    card.appendChild(viewAll)
    root.appendChild(card) // coloca nova div dentro da div existente

    return viewAll
}

/*Tela inicial*/
const main = () => {
    clearDisplay()
    const elementMain = pokemons.filter((pokemons) => Number(pokemons.num) < 8)
    elementMain.map(print)
    const viewAll = creatButtonView()
    viewAll.innerHTML = "<h3>Ver Tudo</h3>"
    viewAll.addEventListener('click', viewAllElement)
}
/*Função que mostra todos elementos */
const viewAllElement = () => {
    clearDisplay()
    pokemons.map(print)
    const viewAll = creatButtonView()
    viewAll.innerHTML = "<h3>Ver Menos</h3>"
    viewAll.addEventListener('click', main)
}

/*Função que pesquisa os nomes*/
const searchName = () => {
    clearDisplay()
    const elementSearched = pokemons.filter(searchFunc)
    elementSearched.map(print)
}
/*Função de abrir e fechar menu avançado*/
const filters = () =>{
    const filterMenuDysplay = filtersMenu.style.display
    filtersMenu.style.display = filterMenuDysplay == "block" ?  "none" : "block"
}


/*Função que verifica quais checkboxs estão selecionados*/
const checkType = (a) => {
    const newArray = []
    for (let i of a) {
        if (i.checked)
            newArray.push(i.value)
    }
    return newArray
}

/*Função de verificar checkbox repetidos*/
const concat = (checkboxType, checkboxWeakness) => {
    const newArray = []
    for (let i of checkboxType) {
        for (let j of checkboxWeakness) {
            if (j == i)
                newArray.push(j)
        }
    } return newArray

}
/*Função que subtrai os os checkboxs marcados duas vezes */
const subtraction = (checkboxType, checkboxWeakness, parameter) => {

    const newArray = concat(checkboxType, checkboxWeakness)
    if (newArray.length != 0) {
        const result = []
        for (let i of parameter) {
            for (let j of newArray) {
                if (i != j)
                    result.push(i)
            }
        }
        return result
    }
    else
        return parameter
}
/*Funcao que verifica os tipos e fraquezas*/
const typeFunction = (p) => {
    /*Puxa os checkboxs */
    const checkbox = document.getElementById("checkbox-types")
    const checkboxWeakness = checkType(checkbox.weakness)
    const checkboxType = checkType(checkbox.option)
    let result = []
    let resultWeakness = []
    /*subtrai os checkboxs repetidos*/
    if (checkboxWeakness.length != 0 && checkboxType.length != 0) {
        result = subtraction(checkboxType, checkboxWeakness, checkboxType)
        resultWeakness = subtraction(checkboxType, checkboxWeakness, checkboxWeakness)
    }
    else {
        result = checkboxType
        resultWeakness = checkboxWeakness
    }
    // /*Verifica os tipos*/
    for (let i of result) {
        if (p.type[0] == i || p.type[1] == i)
            return true
    }
    /*Verifica as fraquezas */

    for (let i of resultWeakness) {
        for (let j of p.weaknesses) {
            if (j == i)
                return true
        }
    }
}

/*Função que filtra os checkboxs*/
const advancedSearch = () => {
    clearDisplay()
    const pokemonsFiltred = pokemons.filter(typeFunction).map(print)
    resetSearch()
    filters()
}
//Limpar filtro
const myFunctionClear = (a) =>{
    if (a.length != 0) {
        for (let i of a) {
            if (i.checked)
                i.checked = false;
        }
    }
  }
/*Função que reseta o menu avançado*/
const resetSearch = () => {
    const checkbox = document.getElementById("checkbox-types")
    myFunctionClear(checkbox.weakness)
    myFunctionClear(checkbox.option)
}

/*Verifica eventos*/
document.getElementById("search").addEventListener('input', searchName)
document.getElementById("menu-filter").addEventListener('click', filters)
document.getElementById("home").addEventListener('click', main)
document.getElementById("advanced-search").addEventListener('click', advancedSearch)
document.getElementById("reset-search").addEventListener('click', resetSearch)
 main()

