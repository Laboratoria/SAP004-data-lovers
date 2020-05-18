import { searchChampionsByName, 
         sortCharactersAZ,
         sortCharactersZA,
         percentageByTypeAndLevel,
         filterChampionsByTypeAndLevel
         } from './data.js';

import data from "./data/lol/lol.js";

const champion = data.data; // OBJETO COM VARIOS OBJETOS   { A:{}, D:{}, B:{} }
const championsArray = Object.values(data.data);  // ARRAY DE OBJETOS  [{},{},{}]
const charactersDiv = document.getElementById("characters-div");
const lolToolIntro = document.getElementById("lol-tool-intro");
const aboutTheGameDiv = document.getElementById("about-the-game-div");
const compareChampion = document.getElementById("compare-champions");
const youtubeMedia = document.getElementById("youtube-media");
const aboutGameButton = document.getElementById("about-game");
const compareChampionButton = document.getElementById("compare-champ-but");
const youtubeButton = document.getElementById("but-youtube");
const buttonShowChampions = document.getElementById("show-champions");
const searchButton =document.getElementById('search-button');
const radioAZ = document.getElementById("AZ");
const radioZA = document.getElementById("ZA");
const userInput = document.getElementById("search-entry");

aboutGameButton.addEventListener("click", showAboutGame);
compareChampionButton.addEventListener("click", () => showCompChan(championsArray));
youtubeButton.addEventListener("click", showYoutubers);
buttonShowChampions.addEventListener("click", () => showChampionsInCards(championsArray)); // RECEBE ARRAY DE OBJETOS
radioAZ.addEventListener("click", () => showChampionsInCardsForSort(sortCharactersAZ(champion), champion));
radioZA.addEventListener("click", () => showChampionsInCardsForSort(sortCharactersZA(champion), champion));
searchButton.addEventListener('click', () => {
  const inputValueToSearch = document.getElementById("search-entry").value;
  showChampionsInCards(searchChampionsByName(championsArray, inputValueToSearch))
});
userInput.addEventListener("keypress" , (event) => {
  if (event.keyCode === 13) {
    const inputValueToSearch = document.getElementById("search-entry").value;
    showChampionsInCards(searchChampionsByName(championsArray, inputValueToSearch))
  }
})


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

function showYoutubers() {
  charactersDiv.style.visibility = "hidden";
  charactersDiv.style.display = "none";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

  aboutTheGameDiv.style.visibility = "hidden";
  aboutTheGameDiv.style.display = "none";

  compareChampion.style.visibility = "hidden";
  compareChampion.style.display = "none";

  youtubeMedia.style.visibility = "visible";
  youtubeMedia.style.display = "block";
}

function championsInCards(arrayCharactersArg){

  let template = "";

  for (let persona of arrayCharactersArg) {
    template += `
    <div class="champions-card">
    <p class="image-splash"><img class="image common" src="${persona.splash}"></p>
    <p class="name common">Name: ${persona.name}</p>
    <p class="title common">${persona.title}</p>
    <p class="role common">Role: ${persona.tags}</p>
    <p class="info-champ common">Attack: ${persona.info.attack}</p>
    <p class="info-champ common">Defense: ${persona.info.defense}</p>
    <p class="info-champ common">Magic: ${persona.info.magic}</p>
    <p class="info-champ common">Difficulty: ${persona.info.difficulty}</p>
    </div>
    `;
  }

  return template;
} 

function showCompChan(arraycharacterForAggregateCalculation) {
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

  document.getElementById("see-data-here-button").addEventListener("click", showResultForTheInformationProvided);
  
  function showResultForTheInformationProvided() {

      var selectTypesOfInformation = document.getElementById("types-of-information");
      var selectedselectTypesOfInformation = selectTypesOfInformation.selectedIndex;
      var typeOfInfo = selectTypesOfInformation.options[selectedselectTypesOfInformation].value;


      var selectLevelOfInformation = document.getElementById("level-of-information");
      var selectedIndexOfLevelOfInformation = selectLevelOfInformation.selectedIndex;
      var levelValue = Number(selectLevelOfInformation.options[selectedIndexOfLevelOfInformation].value);
  
      let resultForTheInformationProvided = percentageByTypeAndLevel(typeOfInfo, levelValue, arraycharacterForAggregateCalculation);
  
      document.getElementById("see-data-here").innerHTML = resultForTheInformationProvided + "% dos Campeões tem " +typeOfInfo + " maior igual que " + levelValue + ". <br> Os campeões que tem " +typeOfInfo + " maior igual que " + levelValue + " são: <br>";
  
      document.getElementById("see-champions-with-corresponding-data").innerHTML = championsInCards(filterChampionsByTypeAndLevel(arraycharacterForAggregateCalculation, typeOfInfo, levelValue));

    }         
}

function showChampionsInCards(arrayCharacters) {     //MOSTRA PERSONAGENS EM FORMA DE CARDS DENTRO DA CHARACTERS-DIV
  document.getElementById("characters-div").style.visibility = "visible";
  document.getElementById("characters-div").style.display = "block";

  document.getElementById("lol-tool-intro").style.visibility = "hidden";
  document.getElementById("lol-tool-intro").style.display = "none";

  document.getElementById("about-the-game-div").style.visibility = "hidden";
  document.getElementById("about-the-game-div").style.display = "none";

  document.getElementById("compare-champions").style.visibility = "hidden";
  document.getElementById("compare-champions").style.display = "none";

  document.getElementById("youtube-media").style.visibility = "hidden";
  document.getElementById("youtube-media").style.display = "none";

  document.getElementById("see-characters-here").innerHTML = "";
 
  document.getElementById("see-characters-here").innerHTML = championsInCards(arrayCharacters);
  
}

function showChampionsInCardsForSort(arrayCharactersForShowSort, objectWithOtherObjectsInsideForSort) {

  document.getElementById("characters-div").style.visibility = "visible";
  document.getElementById("characters-div").style.display = "block";

  document.getElementById("lol-tool-intro").style.visibility = "hidden";
  document.getElementById("lol-tool-intro").style.display = "none";

  document.getElementById("about-the-game-div").style.visibility = "hidden";
  document.getElementById("about-the-game-div").style.display = "none";

  document.getElementById("compare-champions").style.visibility = "hidden";
  document.getElementById("compare-champions").style.display = "none";

  document.getElementById("youtube-media").style.visibility = "hidden";
  document.getElementById("youtube-media").style.display = "none";

  document.getElementById("see-characters-here").innerHTML = "";

  function championsInCardsForSort(arrayCharactersForSort, objectWithOtherObjectsInside){

      let template = "";
  
        for (let persona of arrayCharactersForSort) {
        template += `
        <div class="champions-card">
        <p class="image-splash"><img class="image common" src="${objectWithOtherObjectsInside[persona].splash}"></p>
        <p class="name common">Name: ${persona}</p>
        <p class="title common">${objectWithOtherObjectsInside[persona].title}</p>
        <p class="role common">Role: ${objectWithOtherObjectsInside[persona].tags}</p>
        <p class="info-champ common">Attack: ${objectWithOtherObjectsInside[persona].info.attack}</p>
        <p class="info-champ common">Defense: ${objectWithOtherObjectsInside[persona].info.defense}</p>
        <p class="info-champ common">Magic: ${objectWithOtherObjectsInside[persona].info.magic}</p>
        <p class="info-champ common">Difficulty: ${objectWithOtherObjectsInside[persona].info.difficulty}</p>
        </div>
        `;
        }
      return template;
  }

  document.getElementById("see-characters-here").innerHTML = championsInCardsForSort(arrayCharactersForShowSort, objectWithOtherObjectsInsideForSort);
}




















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