import { showAboutGame,
         showCompChan, 
         showYoutubers, 
         showChampionsInCards,
         searchChampionsByName, 
         sortCharactersAZ,
         sortCharactersZA,
         showChampionsInCardsForSort
         } from './data.js';

import data from "./data/lol/lol.js";

const champion = data.data; // OBJETO COM VARIOS OBJETOS   { A:{}, D:{}, B:{} }
const championsArray = Object.values(data.data);  // ARRAY DE OBJETOS  [{},{},{}]

const aboutGameButton = document.getElementById("about-game");
const compareChampionButton = document.getElementById("compare-champ-but");
const youtubeButton = document.getElementById("but-youtube");
const buttonShowChampions = document.getElementById("show-champions");
const searchButton =document.getElementById('search-button');
const radioAZ = document.getElementById("AZ");
const radioZA = document.getElementById("ZA");

aboutGameButton.addEventListener("click", showAboutGame);
compareChampionButton.addEventListener("click", () => showCompChan(championsArray));
youtubeButton.addEventListener("click", showYoutubers);

buttonShowChampions.addEventListener("click", () => showChampionsInCards(championsArray)); // RECEBE ARRAY DE OBJETOS

searchButton.addEventListener('click', () => {
  let inputValueToSearch = document.getElementById("search-entry").value;
  showChampionsInCards(searchChampionsByName(championsArray, inputValueToSearch))
});

radioAZ.addEventListener("click", () => showChampionsInCardsForSort(sortCharactersAZ(champion), champion));
radioZA.addEventListener("click", () => showChampionsInCardsForSort(sortCharactersZA(champion), champion));






























/*









const champion = data.data;

function showChampions() {
  

  let template = "";
  for (let persona in champion) {
    template += `
    <div class="champions-card">
    <p class="image-splash"><img class="image common" src="${champion[persona].splash}"></p>
    <p class="name common">Name: ${persona}</p>
    <p class="title common">${champion[persona].title}</p>
    <p class="role common">Role: ${champion[persona].tags}</p>
    <p class="info-champ common">Attack: ${champion[persona].info.attack}</p>
    <p class="info-champ common">Defense: ${champion[persona].info.defense}</p>
    <p class="info-champ common">Magic: ${champion[persona].info.magic}</p>
    <p class="info-champ common">Difficulty: ${champion[persona].info.difficulty}</p>
    </div>
    `;
  };
  document.getElementById("see-characters-here").innerHTML = template;
};

document.getElementById("send-ordination").addEventListener("click", sortCharacters);

    
function sortCharacters() {

    if (document.getElementById("AZ").checked){
          
      let arrayPersonas = [];
      for (let persona in data.data){    
      arrayPersonas.push(persona);   
      };

      let template = "";
      for (let persona of arrayPersonas.sort()) {
      template += `
      <div class="champions-card">
      <p class="image-splash"><img class="image common" src="${champion[persona].splash}"></p>
      <p class="name common">Name: ${persona}</p>
      <p class="title common">${champion[persona].title}</p>
      <p class="role common">Role: ${champion[persona].tags}</p>
      <p class="info-champ common">Attack: ${champion[persona].info.attack}</p>
      <p class="info-champ common">Defense: ${champion[persona].info.defense}</p>
      <p class="info-champ common">Magic: ${champion[persona].info.magic}</p>
      <p class="info-champ common">Difficulty: ${champion[persona].info.difficulty}</p>
      </div>
      `;
      };
      document.getElementById("see-characters-sort-here-AZ").innerHTML = template;
      
    }else if(document.getElementById("ZA").checked){

      let arrayPersonas = [];
      for (let persona in data.data){    
      arrayPersonas.push(persona);   
      };

      let template = "";
      for (let persona of arrayPersonas.sort().reverse()) {
      template += `
      <div class="champions-card">
      <p class="image-splash"><img class="image common" src="${champion[persona].splash}"></p>
      <p class="name common">Name: ${persona}</p>
      <p class="title common">${champion[persona].title}</p>
      <p class="role common">Role: ${champion[persona].tags}</p>
      <p class="info-champ common">Attack: ${champion[persona].info.attack}</p>
      <p class="info-champ common">Defense: ${champion[persona].info.defense}</p>
      <p class="info-champ common">Magic: ${champion[persona].info.magic}</p>
      <p class="info-champ common">Difficulty: ${champion[persona].info.difficulty}</p>
      </div>
      `;
      };
      document.getElementById("see-characters-sort-here-ZA").innerHTML = template;

    };
};
*/