import data from './data/rickandmorty/rickandmorty.js';
//console.log(data);
//function com for para rodar o loop dentro do results do arquivo de data 
function listCharacters(characters){
      let character;
      let arrayCharacters=[];
      for(character of characters){ 
        arrayCharacters.push(character);
      }
      console.log(arrayCharacters);
      return arrayCharacters;
    }
   const arrayCharacters = listCharacters(data.results);


//Para criar listas usar HTML DOM createElement() Method
//inserir informações na lista innerHTML 


