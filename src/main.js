import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const aboutTheGameButton = document.getElementsByClassName('about-the-game-button');
const charactersButton = document.getElementsByClassName('characters-button');
const youtubeButton = document.getElementsByClassName('youtube-button');
const compareButton = document.getElementsByClassName('compare-button');
const closePopupButton = document.getElementsByClassName('close-popup-button');

function aboutTheGame() {
    location.href="about-the-game.html";
    /*openPopup() ABRE O POP UP E MOSTRA INFORMAÇÕES SOBRE O JOGO*/
    /*closePopup() FECHA O POP UP*/
}
aboutTheGameButton.addEvendListener('click', aboutTheGame);
closePopupButton.addEvendListener('click', aboutTheGame);

/*function openPopup(){
    //FUNÇÃO DE ABRIR POPUP
}
function closePopup(){
    //FUNÇÃO DE FECHAR POPUP
}*/
//------------------------------------------------------------------------
function showCharacters() {
    location.href="characters.html"; /*MOSTRAR INFORMAÇÕES SOBRE OS PERSONAGENS*/
}
charactersButton.addEvendListener('click', showCharacters);

function showYoutube() {
    location.href="youtube.html"; /*MOSTRAR INFORMAÇÕES SOBRE YOUTUBE*/
}
youtubeButton.addEvendListener('click', showYoutube);

function compareCharacters() {
    /*MOSTRAR COMPARAÇÕES*/
}
compareButton.addEvendListener('click', compareCharacters);

