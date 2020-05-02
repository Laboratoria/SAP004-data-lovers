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
    const powerTypeZero = document.createElement("div")
    const power = document.createElement("div")
    img.src = pokemons.img // coloca o endereço da imagem


    powerTypeZero.classList = (pokemons.type[0])
    card.classList.add("card")
    powerTypeZero.classList.add("power")
    img.classList.add("picture") // coloca uma classe na imagem
    cardInformation.classList.add("card-information")
    cardInformation.innerHTML += `<br><h5>${pokemons.num}</h5>` //coloca o numero
    cardInformation.innerHTML += `<h3>${pokemons.name}</h4>` // coloca o nameInput
    powerTypeZero.innerHTML += `<h5>${pokemons.type[0]}</h5>` //${pokemons.type[1] = pokemons.type[1] || ""}</h5>` // coloca o tipo

    power.appendChild(powerTypeZero)
    if (pokemons.type[1] != undefined) {
        const powerTypeOne = document.createElement("div")
        powerTypeOne.classList = (pokemons.type[1])
        powerTypeOne.classList.add("power")
        powerTypeOne.innerHTML += `<h5>${pokemons.type[1]}</h5>`
        power.appendChild(powerTypeOne)
    }

    cardInformation.appendChild(power)
    card.appendChild(cardInformation) // coloca informações no card
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
    const funcMain = (pokemons) => Number(pokemons.num) < 8
    const elementMain = pokemons.filter(funcMain)
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
const filters = () =>
    filtersMenu.style.display == "none" ? filtersMenu.style.display = "block" : filtersMenu.style.display = "none"



/*Função que verifica quais checkboxs estão selecionados*/
const checkType = (a) => {
    const newArray = []
    for (let i in a) {
        if (a[i].checked )
            newArray.push(a[i].value)
    }
    return newArray
}

/*Função de verificar checkbox repetidos*/
const concat = (checkboxType, checkboxWeakness) => {
    const newArray = []
    for (let i in checkboxType) {
        for (let j in checkboxWeakness) {
            if (checkboxWeakness[j] == checkboxType[i])
                newArray.push(checkboxWeakness[j])
        }
    } return newArray

}
/*Função que subtrai os os checkboxs marcados duas vezes */
const subtraction = (checkboxType, checkboxWeakness, parameter) => {

    console.log("checkboxType in subtration" + checkboxType)
    console.log("checkboxType" + checkboxWeakness)
    console.log("checkboxType" + parameter)


        const newArray = concat(checkboxType, checkboxWeakness)
        if (newArray.length != 0) {
        const result = []
        for (let i in parameter) {
            for (let j in newArray) {
                if (parameter[i] != newArray[j])
                    result.push(parameter[i])
            }
        }
        console.log("re" + result)
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
     for (let i in result) {
         if( p.type[0] == result[i] || p.type[1] == result[i])
         return true
     }
    /*Verifica as fraquezas */

    for (let i in resultWeakness) {
        for (let j in p.weaknesses) {
            if( p.weaknesses[j] == resultWeakness[i])
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
function myFunctionClear(a) {
    if(a.length !=0){
    for (let i in a){
      if (a[i].checked)
        a[i].checked = false;
    }
}
}
//Função que reseta o menu avançado
const resetSearch = () =>{
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
