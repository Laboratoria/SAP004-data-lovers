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
const filters = () => {
    if (filtersMenu.style.display == "none")
        filtersMenu.style.display = "block"
    else
        filtersMenu.style.display = "none"
}

/*Função que verifica quais checkboxs estão selecionados*/
 const checkType = (a) => {
     const newArray = []
     for( let i in a){
         if(a[i].checked==true)
         newArray.push(a[i].value)
     }
     console.log(newArray)
     return newArray
 }

 /*Função que compara os pokemons com os checkboxs*/
const typeFunction = (p) =>{
    const checkbox = document.getElementById("checkbox-types")
     const checkboxType = checkType(checkbox.option)
    const checkboxWeakness = checkType(checkbox.weakness)
   console.log(checkboxType)
   for(let i in checkboxType){
       if(p.type[0] == checkboxType[i] || p.type[1] == checkboxType[i])
        return true
   }
   for(let j in checkboxWeakness){
       for(let k in p.type){
           if(p.weaknesses[k] == checkboxWeakness[j])
           return true
       }
   }
}

/*Função que chama a comparação do menu avançado*/
const advancedSearch = () => {
        const pokemonsFiltred = pokemons.filter(typeFunction)
        clearDisplay()
        pokemonsFiltred.map(print)
}

/*Verifica eventos*/
document.getElementById("search").addEventListener('input', searchName)
document.getElementById("menu-filter").addEventListener('click', filters)
document.getElementById("home").addEventListener('click', main)
document.getElementById("advanced-search").addEventListener('click', advancedSearch)
main()
