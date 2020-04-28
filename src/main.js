import { searchFunc } from './data.js';
import data from './data/pokemon/pokemon.js';
const root = document.getElementById("root") // import div
const pokemons = data.pokemon // pokemons = array


const print = pokemons => { //função para imprimir os pokemons
    const card = document.createElement("div") // cria uma nova div
    const img = document.createElement("img") //criar elemento img
    const cardInformation = document.createElement("div") //cria div das informações

    img.src = pokemons.img // coloca o endereço da imagem

    //card.classList.add("card") // coloca uma clas na div
    card.classList = (pokemons.type[0])
    card.classList.add("card")
    img.classList.add("picture") // coloca uma classe na imagem
    cardInformation.classList.add("card-information")
    cardInformation.innerHTML += `<br><h5>${pokemons.num}</h5>` //coloca o numero
    cardInformation.innerHTML += `<h3>${pokemons.name}</h4>` // coloca o nameInput
    cardInformation.innerHTML += `<h5>${pokemons.type}</h5>` //${pokemons.type[1] = pokemons.type[1] || ""}</h5>` // coloca o tipo
    card.appendChild(cardInformation) // coloca informações no card
    card.appendChild(img) //coloca a imagem na nova div
    root.appendChild(card) // coloca nova div dentro da div existente
}

const clearDisplay = () => root.innerHTML = ""
const creatButtonView = () => {
    const card = document.createElement("div") // cria uma nova div
    const viewAll = document.createElement("div")

    card.classList.add("view-all-class")
    card.classList.add("card") // coloca uma clas na div

    card.appendChild(viewAll)
    root.appendChild(card) // coloca nova div dentro da div existente

    return viewAll
}

const main = () => {
    clearDisplay()
    const funcMain = (pokemons) => Number(pokemons.num) < 8
    const elementMain = pokemons.filter(funcMain)
    elementMain.map(print)
    const viewAll = creatButtonView()
    viewAll.innerHTML = "Ver Tudo"
    viewAll.addEventListener('click', viewAllElement)
}
const viewAllElement = () => {
    clearDisplay()
    pokemons.map(print)
    const viewAll = creatButtonView()
    viewAll.innerHTML = "Ver Menos"
    viewAll.addEventListener('click', main)
}

const searchName = () => {
    clearDisplay()
    const elementSearched = pokemons.filter(searchFunc)
    elementSearched.map(print)
}

document.getElementById("search").addEventListener('input', searchName)

main()