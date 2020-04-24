import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

//document.getElementById("bt-go").addEventListener("click",clear);
//function clear(){
 //  document.getElementById("body").style.display="none";
//}


function pokemonImage (numeroDoIdDoPersonagem){
let caminho = data.pokemon[numeroDoIdDoPersonagem];
let box =`
      <div class="coluna">
      <img src=${caminho.img}>
      <p>${caminho.name}</p>
      </div>
`;
return box;
//document.getElementById("pokes").innerHTML+= box;
}
function criaImagemEinsereId(){
   let htmlCards='';
   for (let i = 0; i<data.pokemon.length; i++){
      //pokemonImage(i);
      htmlCards+=pokemonImage(i)
}
document.getElementById("pokes").innerHTML+= htmlCards;
}
criaImagemEinsereId();

document.getElementById("test-pesq").addEventListener("click",buscarNome);
function buscarNome (numeroDoIdDoPersonagem, event){
   event.preventDefault();
   let name = document.getElementById("name-search").value;
   let caminho = data.pokemon[numeroDoIdDoPersonagem];
   if (name === caminho.name){
      console.log(caminho.name);
      let name = document.getElementById("name-search").value;
   let box1 =`
         <img src=${caminho.img}>
         <p>${caminho.name}</p>
   `;
   document.getElementById("pokes").innerHTML+= box1;
   }else {
      document.getElementById("pokes").innerHTML+= "tente novamente";
   }
}
   //function criaImagemEinsereId(){
   //   for (let i = 0; i<data.pokemon.length; i++){
   //      pokemonImage(i);
   //}
   //}
   
  // criaImagemEinsereId();

/*document.getElementById("test-pesq").addEventListener("click", ir);
function ir(event){
   event.preventDefault();
   let type = document.getElementById("filter-type").value;
   if (type = data.pokemon.weaknesses){
      document.getElementById("test1").innerHTML= `o tipo é ${type}.`;
     let caminho = data.pokemon[0];
      let typeBox =`
      <img src=${caminho.img}>
      <p>${caminho.name}</p>
      <p>${caminho.type}</p>
      `;
         document.getElementById("pokes").innerHTML+=typeBox; 
      } else{
         document.getElementById("test1").innerHTML= `tente de novo`;
      }
      console.log(type);*/

   //document.getElementById("test1").innerHTML= `o tipo é ${type}.`;


    
  // querySelectorAll

   //selectType();
//console.log(example, data);