//import { example } from './data.js';
import data from './data/lol/lol.js';

document.getElementById("show-champions").addEventListener("click", showChampions);

function showChampions() {  
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
};




     
    