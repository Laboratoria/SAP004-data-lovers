const charactersDiv = document.getElementById("characters-div");
const lolToolIntro = document.getElementById("lol-tool-intro");
const aboutTheGameDiv = document.getElementById("about-the-game-div");
const compareChampion = document.getElementById("compare-champions");
const youtubeMedia = document.getElementById("youtube-media");


export function percentageByTypeAndLevel(typeOfInfoArg, levelValueArg, championsArrayArg){

    let numberOfChampions = [];
    let totalOfChampions = [];

    for (let persona of championsArrayArg) {
      totalOfChampions.push(persona.id);

      if(persona.info[typeOfInfoArg] >= levelValueArg){
        numberOfChampions.push(persona.id);
      };
    };

   return parseInt((numberOfChampions.length * 100) / totalOfChampions.length);
};

export  function showCompChan(arraycharacterForAggregateCalculation) {
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
    
        document.getElementById("see-data-here").innerHTML = resultForTheInformationProvided + "% dos Campeões tem " +typeOfInfo + " maior igual que " + levelValue;
    };         
};

export function showAboutGame() {
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
};

export function showYoutubers() {
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
};

export function championsInCards(arrayCharactersArg){

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
    };

    return template;
};

export  function showChampionsInCards(arrayCharacters) {     //MOSTRA PERSONAGENS EM FORMA DE CARDS DENTRO DA CHARACTERS-DIV
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
    
};

export function searchChampionsByName(arrayCharactersForFilter, whatTheUserWantsTosearch){  //PESQUISA DENTRO DOS DADOS OQUE O USUÁRIO FORNECE
    return arrayCharactersForFilter.filter(championFilter => championFilter.name.toUpperCase().includes(whatTheUserWantsTosearch.toUpperCase())); 
};

export function championsInCardsForSort(arrayCharactersForSort, objectWithOtherObjectsInside){

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
      };
    return template;
};

export function showChampionsInCardsForSort(arrayCharactersForShowSort, objectWithOtherObjectsInsideForSort) {

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
  
    document.getElementById("see-characters-here").innerHTML = championsInCardsForSort(arrayCharactersForShowSort, objectWithOtherObjectsInsideForSort);


};

export function sortCharactersAZ(ObjectCharactersForSortAZ) {  //ORDENA OS PERSONAGENS EM ORDERM AZ
    let arrayPersonas = [];

      for (let persona in ObjectCharactersForSortAZ){    
      arrayPersonas.push(persona);   
      };

    return arrayPersonas.sort();
};
    
export function sortCharactersZA(ObjectCharactersForSortZA) {  //ORDENA OS PERSONAGENS EM ORDERM ZA
    let arrayPersonas = [];

    for (let persona in ObjectCharactersForSortZA){    
    arrayPersonas.push(persona);   
    };

    return arrayPersonas.sort().reverse();
};