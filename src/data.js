// funções de exemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const searchFunc = p => {
  let nameInput = document.getElementById("searchtxt").value
  nameInput = nameInput.toUpperCase() 
return (nameInput == p.name.slice(0,-(p.name.length - nameInput.length)).toUpperCase()|| nameInput == p.name.toUpperCase()) 
};

const searchBar = document.querySelector("#searchBar");
/*
// versão doida da Dri
export const searchCards = string => {
  let searchString = searchBar.value;
  searchString = searchString.toLowerCase(); 
  return (searchString == string.name.slice(0,-(string.name.length - searchString.length)).toLowerCase()()|| searchString == string.name.toLowerCase()()) 
};*/

// versão 4.0 da função de busca
export const searchPokemon = (search, pokemon) => {
    let searchString = search.value.toLowerCase();
    let filteredPokemons = pokemon.filter( pkm => {
      let pkmString = pkm.name.toLowerCase();
      let beginOfString = pkmString.substr(0,searchString.length);
    return (beginOfString.includes(searchString));
  });
  return filteredPokemons;
};




export const sortA = ( pokemon, name, alfaOrder ) => { 
   if ( alfaOrder == "az"){
     return pokemon.sort( (a, b) => {
      if( b[name] < a[name]) return 1;
      else if(a[name] < b[name]) return -1;
      else return 0;
   });
 };
}


/*
loadCharacters();

const loadCharacters = async () => {
  try {
     
    
      displayCharacters(pokemons);
  } catch (err) {
      console.error(err);
  }
};
*/

/*
//função Dri&Mi
export const searchPokemons = searchBar.addEventListener("keyup", (string) => {
  let searchString = string.target.value.toLowerCase();

  const filteredPokemons = pokemons.filter( pokemon => {
    return (pokemon.name.toLowerCase().includes(searchString));
  displayPokemons(filteredPokemons);
});
*/