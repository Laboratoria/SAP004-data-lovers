//import { example } from './data.js';
import data from './data/lol/lol.js';

document.getElementById("show-champions").addEventListener("click", showChampions);
document.getElementById("about-game").addEventListener("click", showAboutGame);
document.getElementById("compare-champ-but").addEventListener("click", showCompChan);
document.getElementById("but-youtube").addEventListener("click", showYoutubers);

function showChampions() {  
    document.getElementById("characters-div").style.visibility = "visible"; 
    document.getElementById("characters-div").style.display = "block";

    document.getElementById("lol-too-intro").style.visibility = "hidden"; 
    document.getElementById("lol-too-intro").style.display = "none"; 

    document.getElementById("about-the-game-div").style.visibility = "hidden"; 
    document.getElementById("about-the-game-div").style.display = "none"; 

    document.getElementById("compare-champions").style.visibility = "hidden"; 
    document.getElementById("compare-champions").style.display = "none"; 

    document.getElementById("youtube-media").style.visibility = "hidden"; 
    document.getElementById("youtube-media").style.display = "none"; 

    for (let persona in data.data){ 
    document.getElementById("see-characters-here").innerHTML += `
    <hr>
    <img src="${data.data[persona].img}"> <br>
    ${persona} <br>    
    ${data.data[persona].title} <br>
    ${data.data[persona].tags} <br>
    <hr>
    `;
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

    document.getElementById("about-the-game-div").style.visibility = "visible"; 
    document.getElementById("about-the-game-div").style.display = "block"; 

    document.getElementById("compare-champions").style.visibility = "hidden"; 
    document.getElementById("compare-champions").style.display = "none"; 

    document.getElementById("youtube-media").style.visibility = "hidden"; 
    document.getElementById("youtube-media").style.display = "none";
};

function showCompChan(){
    document.getElementById("characters-div").style.visibility = "hidden"; 
    document.getElementById("characters-div").style.display = "none";

    document.getElementById("lol-too-intro").style.visibility = "hidden"; 
    document.getElementById("lol-too-intro").style.display = "none"; 

    document.getElementById("about-the-game-div").style.visibility = "hidden"; 
    document.getElementById("about-the-game-div").style.display = "none"; 

    document.getElementById("compare-champions").style.visibility = "visible"; 
    document.getElementById("compare-champions").style.display = "block"; 

    document.getElementById("youtube-media").style.visibility = "hidden"; 
    document.getElementById("youtube-media").style.display = "none";
};

function showYoutubers(){
    document.getElementById("characters-div").style.visibility = "hidden"; 
    document.getElementById("characters-div").style.display = "none";

    document.getElementById("lol-too-intro").style.visibility = "hidden"; 
    document.getElementById("lol-too-intro").style.display = "none"; 

    document.getElementById("about-the-game-div").style.visibility = "hidden"; 
    document.getElementById("about-the-game-div").style.display = "none"; 

    document.getElementById("compare-champions").style.visibility = "hidden"; 
    document.getElementById("compare-champions").style.display = "none"; 

    document.getElementById("youtube-media").style.visibility = "visible"; 
    document.getElementById("youtube-media").style.display = "block";
};