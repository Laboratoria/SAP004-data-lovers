//import { example } from './data.js';

import data from "./data/lol/lol.js";
import lol from "./data/lol/lol.js";

const aboutGameButton = document.getElementById("about-game");
aboutGameButton.addEventListener("click", showAboutGame);

const showChampionsButton = document.getElementById("show-champions");
showChampionsButton.addEventListener("click", showChampions);

const compareChampionButton = document.getElementById("compare-champ-but");
compareChampionButton.addEventListener("click", showCompChan);

const youtubeButton = document.getElementById("but-youtube");
youtubeButton.addEventListener("click", showYoutubers);

const charactersDiv = document.getElementById("characters-div");
const lolToolIntro = document.getElementById("lol-too-intro");
const aboutTheGameDiv = document.getElementById("about-the-game-div");
const compareChampion = document.getElementById("compare-champions");
const youtubeMedia = document.getElementById("youtube-media");
// DECLAREI VARIÁVEIS PARA OS BOTÕES PARA FICAR MAIS FÁCIL DE TRABALHAR, AO INVÉS DE SEMPRE CHAMAR COM getElementeById
function showChampions() {
  charactersDiv.style.visibility = "visible";
  charactersDiv.style.display = "block";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

  aboutTheGameDiv.style.visibility = "hidden";
  aboutTheGameDiv.style.display = "none";

  compareChampion.style.visibility = "hidden";
  compareChampion.style.display = "none";

  youtubeMedia.style.visibility = "hidden";
  youtubeMedia.style.display = "none";

  for (let persona in data.data) {
    document.getElementById("see-characters-here").innerHTML += `
    <hr>
    <div>
    <img src="${data.data[persona].img}"> <br>
    Name: ${persona} <br>    
    ${data.data[persona].title} <br>
    Role: ${data.data[persona].tags} <br>
    </div>
    <hr>
    `;
<<<<<<< HEAD
    };

    // Escrevendo Ordenação do Personagens
    const selectElement = document.getElementById("sort-characters");

    selectElement.addEventListener('change', (event) => {

    document.getElementById("see-characters-here").style.visibility = "hidden"; 
    document.getElementById("see-characters-here").style.display = "none";

    const result = document.getElementById("see-characters-sort-here");
    if (event.target.value = "AZ"){

    }else{

    }   

    });    
};

function showAboutGame(){
    document.getElementById("characters-div").style.visibility = "hidden"; 
    document.getElementById("characters-div").style.display = "none";

    document.getElementById("lol-too-intro").style.visibility = "hidden"; 
    document.getElementById("lol-too-intro").style.display = "none"; 
=======
  }
} 
var texto = document.getElementById("aba-per").innerHTML;
texto = texto.replace("→", "<br/>");
>>>>>>> 4a5a32862e355d7c9c0e8c64fe147d3ddc4669bb

function showAboutGame() {
  charactersDiv.style.visibility = "hidden";
  charactersDiv.style.display = "none";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

  aboutTheGameDiv.style.visibility = "visible";
  aboutTheGameDiv.style.display = "block";

  compareChampion.style.visibility = "hidden";
  compareChampion.style.display = "none";

  youtubeMedia.style.visibility = "hidden";
  youtubeMedia.style.display = "none";
}

function showCompChan() {
  charactersDiv.style.visibility = "hidden";
  charactersDiv.style.display = "none";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

  aboutTheGameDiv.style.visibility = "hidden";
  aboutTheGameDiv.style.display = "none";

  compareChampion.style.visibility = "visible";
  compareChampion.style.display = "block";

  youtubeMedia.style.visibility = "hidden";
  youtubeMedia.style.display = "none";
}

function showYoutubers() {
  charactersDiv.style.visibility = "hidden";
  charactersDiv.style.display = "none";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

<<<<<<< HEAD
    document.getElementById("youtube-media").style.visibility = "visible"; 
    document.getElementById("youtube-media").style.display = "block";
};
=======
  aboutTheGameDiv.style.visibility = "hidden";
  aboutTheGameDiv.style.display = "none";

  compareChampion.style.visibility = "hidden";
  compareChampion.style.display = "none";

  youtubeMedia.style.visibility = "visible";
  youtubeMedia.style.display = "block";
}
>>>>>>> 4a5a32862e355d7c9c0e8c64fe147d3ddc4669bb
