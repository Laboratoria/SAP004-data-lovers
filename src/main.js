import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const aboutTheGameButton = document.getElementsByClassName('about-the-game');
const charactersButton = document.getElementsByClassName('characters');
const youtubeButton = document.getElementsByClassName('youtube');
const compareButton = document.getElementsByClassName('compare');
const closePopupButton = document.getElementsByClassName('close-popup-button');

function aboutTheGame() {
    openPopup() /*ABRE O POP UP E MOSTRA INFORMAÇÕES SOBRE O JOGO*/
    closePopup()/*FECHA O POP UP*/
}
aboutTheGameButton.addEvendListener('click', aboutTheGame);
closePopupButton.addEvendListener('click', aboutTheGame);

function openPopup(){
    //FUNÇÃO DE ABRIR POPUP
}
function closePopup(){
    //FUNÇÃO DE FECHAR POPUP
}
//------------------------------------------------------------------------
function showCharacters() {
    /*MOSTRAR INFORMAÇÕES SOBRE OS PERSONAGENS*/
}
charactersButton.addEvendListener('click', showCharacters);

function showYoutube() {
    /*MOSTRAR INFORMAÇÕES SOBRE YOUTUBE*/
}
youtubeButton.addEvendListener('click', showYoutube);

function compareCharacters() {
    /*MOSTRAR COMPARAÇÕES*/
}
compareButton.addEvendListener('click', compareCharacters);

