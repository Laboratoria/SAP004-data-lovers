import { example } from './data.js';
import data from './data/pokemon/pokemon.js';


//Criar estrutura dos 150 cards (+1 template = 151cards)
function loadCards() {
    for (let i = 0; i < data["pokemon"].length - 1; i++) {
        document.querySelector('.container-deck').appendChild(document.querySelector('.container-card').cloneNode(true));
    }
    //Carregar informações dos cards
    setDataOnCards();
}
loadCards()

//Carregar informaçoes dentro de cada card
function setDataOnCards() {
    //Nome:
    function setNamePokemon() {
        document.querySelectorAll('.name-pok')[0].textContent = data["pokemon"][0]["name"]
            // let element_list = document.querySelectorAll('.name-pok');
            // for (let i = 0; i < data["pokemon"].length - 1; i++) {
            //     element_list[i].textContent = data["pokemon"][i]["name"];
            // }
    }
    setNamePokemon();

    //Número:
    function setNumberPokemon() {
        document.querySelectorAll('.number-pok')[0].textContent = `#${data["pokemon"][0]["num"]}`;
    }
    setNumberPokemon();

    //Tipo:
    function setTypePokemon() {
        //fazer depois	
    };
    setTypePokemon();

    //Imagem:
    function setImgPokemon() {
        document.querySelectorAll('.img-pok')[0].src = data["pokemon"][0]["img"]
    }
    setImgPokemon();

    //Cor do cartão de acordo com o tipo:
    function setColorCard() {
        let originalTypeList = [
            "Fire", "Ice", "Flying", "Psychic", "Water",
            "Grass", "Fighting", "Ground", "Steel", "Bug", "Ghost", "Dark", "Electric", "Rock", "Poison", "Normal"
        ];

        let colorList = [
            "FF8C00", "DBDDDD", "0E8AA5", "1E6DE3", "2DD0DB", "59B539", "01D4AE", "976B36", "DAA520", "B1D596", "F6D7F6", "000000", "484848", "A6A925", "DE2626"
        ];
        //Atribuir cor do primeiro tipo
        //Extrair primeiro tipo do banco de dados
        let mainType = data["pokemon"][0]["type"][0];
        //Extrair posição na lista de tipos
        let index = originalTypeList.indexOf(mainType);
        //
        document.querySelectorAll('.container-card')[0].style.backgroundColor = `#${colorList[index]}`
    }
    setColorCard();
}