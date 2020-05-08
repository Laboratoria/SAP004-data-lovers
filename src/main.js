/*Bloco de configurações*/
import { searchFunc } from './data.js';
import { order } from './data.js';
import { typeFunctionConcat } from './data.js';
import { checkType } from './data.js';
import { height } from './data.js';
import { concatFilters } from './data.js';
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
    let namePokemons = pokemons.name.replace("(Female)", "")
    namePokemons = namePokemons.replace("(Male)", "")
    cardInformation.innerHTML += `<br><h5>${pokemons.num}</h5><br><h3>${namePokemons}</h4>` // coloca o nameInput
    pokemons.type.map(a => {
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
const searchName = (p) => {
    clearDisplay()
    let nameInput = document.getElementById("search").value
    nameInput = nameInput.toUpperCase()
    const elementSearched = searchFunc(p, nameInput)
    return elementSearched
}

/*Função de abrir e fechar menu avançado*/
const filters = () => {
    const filterMenuDysplay = filtersMenu.style.display
    filtersMenu.style.display = filterMenuDysplay == "block" ? "none" : "block"
}


/*Funcao que verifica os tipos e fraquezas*/
const typeFunction = (p) => {
    /*Puxa os checkboxs */
    const checkbox = document.getElementById("checkbox-types")
    const checkboxWeakness = checkType(checkbox.weakness)
    const checkboxType = checkType(checkbox.option)
    return typeFunctionConcat(checkboxWeakness, checkboxType, p)
}

/*Função que reseta o menu avançado*/
const resetSearch = () => {
    document.querySelectorAll("input[type=checkbox]").forEach(check => check.checked = false)
advancedSearch()
}


//função que pega os doms
const getHeight = () => {
    const checkboxHeight = document.getElementById("checkbox-height") // checkbox de altura
    let heigthChecked = checkType(checkboxHeight.heights)
    let resultArrays = []
    for (let i of heigthChecked) {
        resultArrays = resultArrays.concat(height(i, pokemons))
    }
    return resultArrays
}

/*Função que filtra os checkboxs*/
const advancedSearch = () => {
    clearDisplay()
    const pokemonsType = pokemons.filter(typeFunction)//.map(print)
    const heightArray = getHeight()//.map(print)
    const orderBy = document.getElementById("browsers").value
    const resultFilters = concatFilters(pokemonsType, heightArray, pokemons)
    const nameArray = searchName(resultFilters)
    order(orderBy, nameArray)
    nameArray.map(print)
}

document.querySelectorAll('form').forEach(form => form.addEventListener('input', advancedSearch))
document.getElementById("menu-filter").addEventListener('click', filters)
document.getElementById("home").addEventListener('click', main)
document.getElementById("reset-search").addEventListener('click', resetSearch)


main()

