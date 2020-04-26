import { searchFunc } from './data.js';
import data from './data/pokemon/pokemon.js';
const root = document.getElementById("root") // import div
const pokemons = data.pokemon // pokemons = array


const print = pokemons => { //função para imprimir os pokemons
    const card = document.createElement("div") // cria uma nova div
    const img = document.createElement("img"); //criar elemento img
    const cardInformation = document.createElement("div") //cria div das informações
    const typeZero = document.createElement("div")
    
    img.src = pokemons.img // coloca o endereço da imagem
    
    card.classList.add("card") // coloca uma clas na div
    img.classList.add("picture") // coloca uma classe na imagem
    cardInformation.classList.add("card-information")  
    cardInformation.innerHTML += `<br><h5>${pokemons.num}</h5>` //coloca o numero
    cardInformation.innerHTML += `<h4>${pokemons.name}</h4>` // coloca o nameInput
    cardInformation.innerHTML +=  `<h5>${pokemons.type[0]} ${pokemons.type[1] = pokemons.type[1] || ""}</h5>` // coloca o tipo
    card.appendChild(img) //coloca a imagem na nova div
    card.appendChild(cardInformation) // coloca informações no card
    root.appendChild(card) // coloca nova div dentro da div existente
}

const clearDisplay = () => root.innerHTML = ""



const searchName = ()=>{
clearDisplay()
const elementSearched = pokemons.filter(searchFunc)
elementSearched.map(print)
}

document.getElementById("search").addEventListener('input',searchName)

pokemons.map(print) // percorre o array e execulta a função print