import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


function pokemonImage (numeroDoIdDoPersonagem){
const caminho = data.pokemon[numeroDoIdDoPersonagem];
let box =`
      <div class="coluna">
      <img src=${caminho.img}>
      <p class:"text">${caminho.name}</p>
      </div>
`;
return box; 
}
function criaImagemNoHtml(){
   let htmlCards='';
   for (let i = 0; i<data.pokemon.length; i++){
      
      htmlCards+=pokemonImage(i)
}
document.getElementById("pokes").innerHTML+= htmlCards;
}
criaImagemNoHtml();




//document.getElementById("test-pesq").addEventListener("click", clearSearch);
document.getElementById("filter-type").addEventListener("change", clearType);
document.getElementById("filter-weakness").addEventListener("change", clearWeakness);
document.getElementById("order-search").addEventListener("change", clearOrder);
//document.getElementById("test-pesq").addEventListener("click", searchName);
document.getElementById("filter-type").addEventListener("change", filterType);
document.getElementById("filter-weakness").addEventListener("change", filterWea);
document.getElementById("order-search").addEventListener("change", orderSea);
document.getElementById("btn-top-all").addEventListener("click", vertodos);
//document.getElementById("nome-pokemon").addEventListener("change", procuraNome);
//document.getElementById("nome-pokemon").addEventListener("change", procuraNome);

function procuraNome(){
   let nomePokemon1 = document.getElementById("name-pokemon").value;
   document.getElementById("filtrado").innerHTML= `O nome digitado foi ${nomePokemon1}.`
   console.log(nomePokemon1);

}
/*function clearSearch(event){
   event.preventDefault();
   document.getElementById("pokes").style.display="none"; 
}*/
function clearType(){
   document.getElementById("pokes").style.display="none"; 
}
function clearWeakness(){
   document.getElementById("pokes").style.display="none"; 
}
function clearOrder(){
   document.getElementById("pokes").style.display="none"; 
}
function vertodos(){
document.getElementById("pokes").style.display="block"; 
}

/*function searchName (event){
   event.preventDefault();
      let nomePokemon = document.getElementById("name-pokemon").value;
      document.getElementById("filtrado").innerHTML= `O nome digitado foi ${nomePokemon}.`
      
      console.log(element.name);}*/


function agoravai(x){
      const tipos = [data.pokemon[x].type];
      for(let tipo of tipos) {
        // console.log(tipo);
         return tipo;
      }
      function tipoNoHtml(){
         let tipoCards='';
         for (let i = 0; i<data.pokemon.length; i++){
            
            tipoCards+=agoravai(i)
      }
      document.getElementById("filtrado").innerHTML+= tipoCards;
      console.log(tipoCards);
      }
      tipoNoHtml();

      function tipocerto(pokemon) {
         return (data.pokemon[x].type== tipo)
      }
      tipocerto();
      console.log(tipocerto);
      
      data.pokemon[x].filter(tipocerto)
      console.log(filter())
   }
      

function filterType(){
   let tipofil = document.getElementById("filter-type").value;
   function agoravai(x){
      const tipos = [data.pokemon[x].type];
      for(let tipo of tipos) {
        // console.log(tipo);
         return tipo;
      }
      function tipoNoHtml(){
         let tipoCards='';
         for (let i = 0; i<data.pokemon.length; i++){
            
            tipoCards+=agoravai(i)
      }
      document.getElementById("filtrado").innerHTML+= tipoCards;
      console.log(tipoCards);
      }
      tipoNoHtml();

      function tipocerto(pokemon) {
         return (data.pokemon[x].type=== tipofil)
      }
      tipocerto();
      console.log(tipocerto);/*
      
      data.pokemon[x].filter(tipocerto)
      filter()*/
      //console.log(filter())
   }
   //document.getElementById("filtrado").innerHTML= `O tipo escolhido foi ${filter()}.`


   document.getElementById("filtrado").innerHTML= `O tipo escolhido foi ${tipofil}.`
}
  // console.log(data.pokemon[0].type);

function filterWea(){
   let fraquesa = document.getElementById("filter-weakness").value;
   document.getElementById("filtrado").innerHTML= `A fraquesa escolhida foi ${fraquesa}.`
}
function orderSea(){
   let ordem = document.getElementById("order-search").value;
   document.getElementById("filtrado").innerHTML= `A ordem escolhida foi ${ordem}.`
}

   
 /*  function filtraNome(pokemon) {
      return (data.pokemon[pokemon].name === searchName)
   }
   filtraNome();
   const caminho = data.pokemon[numeroDoIdDoPersonagem];
   let box1 =`
         <div class="coluna">
         <img src=${caminho.img}>
         <p class:"text">${caminho.name}</p>
         </div>
   `;
      return box1; }

function apresentaNome(){
   let htmlCardsNome='';
   for (let i = 0; i<data.pokemon.length; i++){
      
      htmlCardsNome+=pesquisar(i)
}
document.getElementById("pokes").innerHTML+= htmlCardsNome;
}
apresentaNome();
data.pokemon.filter(filtraNome);
console.log(data.pokemon.filter (filtraNome));
console.log(searchName);
alert(searchName);
*/

/*function maisQue100(pokemon) {
   return (pokemons.type==Grass)
}
maisQue100();
console.log(maisQue100);*/


/*function tipoPlanta(pokemon) {
   return (pokemon.tipo===planta)
}
tipoPlanta();

meusPokemons.filter(tipoPlanta)
console.log(filter());*/
//console.log(example, data);