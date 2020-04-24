import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
const root = document.getElementById("root") // import div

const pokemons = data.pokemon // pokemons = array


//  const searchName = p => p.name
// const nomesPokemons = pokemons.map(searchName)

const print = pokemons => { //função para imprimir os pokemons
    const div = document.createElement("div") // cria uma nova div
    div.classList.add("card") // coloca uma clas na div
    const img = document.createElement("img"); //criar elemento img
    img.src = pokemons.img // coloca o endereço da imagem
    img.classList.add("picture") // coloca uma classe na imagem
    div.appendChild(img) //coloca a imagem na nova div
    div.innerHTML += `<br><h5>${pokemons.num}</h5>` //coloca o numero
    div.innerHTML += `<h4>${pokemons.name}</h4>` // coloca o nome
    div.innerHTML +=  `<h5>${pokemons.type}</h5>` // coloca o tipo
    root.appendChild(div) // coloca nova div dentro da div existente
}
pokemons.map(print) // percorre o array e execulta a função print

