import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


/* Amiga se tiver duvidas pode me chamar, não sei como será o dia amanha.
ta tudo comentado meio cagado pq fui escrevendo e fazendo.
ai vai lendo e descomenta o que é codigo e testa. depois comenta de novo e vai pro proximo teste.
espero que ajude.
bons estudos. bjus */



/*leia o link de funçoes e argumentos que deixei no trello.
lá tem a explicação de como montar os dados do arquivo pokemon.json.
tente fazer o test passo a passo. primiero com o console.log(example, data);dessa forma vc percebe
que aparece no console o array completo do pokemon. 
agora vamos atribuir a variavel pokemongo ao caminho para o nome. ) é a posição do pokemon e name é
atributo desse array(grupo de dados). o cosole apresnta o nome, se mudar de 0 pra 1, o console vai aprensetar o outro nome
*/
/*const pokemongo = data.pokemon[0].name;
console.log(pokemongo);
const pokemongo1 = data.pokemon[1].name;
console.log(pokemongo1);*/

//agora vamos apresentar esse pokemon na tela

//const pokemongo = data.pokemon[].img; //estamos pesquisando o atributo imagem
//document.getElementById("pokes").innerHTML=pokemongo;
/*perceba que não defimos o numero do array 
ou seja não falamos para o programa qual imagem pegar. agora vamos testar com o 
numero 1 dentro do []*/
//const pokemongo = data.pokemon[0].img;
//document.getElementById("pokes").innerHTML=pokemongo;

/* fazendo desse jeito o html imprimeu o link da imagem e não a imagem.
para que a imagem apareça no html é necessario que ela seja chamada no html
para não precisar voltar ao arquivo html e chamar a imagem la. chamaremos a imagem aqui como se fosse
o html, e faremos o seguinte caminho:
leia o link sobre Template strings
chamaremos uma fuction para fazer o evento que a gente quer acontecer, o evento seria pegar a imagem referente ao pokemon
e printa-la na tela*/

/*function pokemonImage(){
   //const pokemongo = data.pokemon[0].img; //pode escrever numa variavel e joga a variavel na tag abaixo
   // ou jogar o caminho completo. se vc mudar de 0 para 1 vai aparecer outr pokemon.
   let box=`
   <img src=${data.pokemon[0].img}> 
   `; // joga o link dentro de uma tag img escrito em template string
document.getElementById("pokes").innerHTML=box; //joga a variavel dentro do id do main no html
}
pokemonImage(); //da o comando para a função acontecer.*/

/*vamos mostrar mais de um pokemon na tela, vc vai seguir os mesmos passo anteriores. só que vai colocar
uma linha para cada imagem. como se vc tivesse declarando a imagem no html, pq na verdade é isso 
que vamos fazer.*/

/*function pokemonImage(){
   //const pokemongo = data.pokemon[0].img;
   let box=`
   <img src=${data.pokemon[0].img}> 
   <img src=${data.pokemon[1].img}> 
   `;*/
   /* se vc testar vai aparecer duas imagens. vc pode fazer isso manualmente ou colocar num array 
   como o for. colocando num for o programa faz sozinho o que fariamos manualmente.
   da mesma maneira colocaremos outras informaçoes como o nome de cada pokemons e seus outras caracteriscas.
   podemos colocar essas outras informaçoes em uma tag p.*/
//document.getElementById("pokes").innerHTML=box; 
//}
//pokemonImage(); //da o comando para a função acontecer.

/*function pokemonImage(){
   //const pokemongo = data.pokemon[0].img;
   let box=`
   <img src=${data.pokemon[0].img}>
   <p>${data.pokemon[0].name} </p>
   <img src=${data.pokemon[1].img}> 
   <p>${data.pokemon[1].name} </p>
   `; 
document.getElementById("pokes").innerHTML=box; 
}
pokemonImage(); */// para reduzir o caminho na template string de cada item vamos usar uma variavel 
//para escrever o caminho comum para todos os atributos e só completar cada um com o restante do caminho.
//const pokemongo = data.pokemon[0];
//<img src=${pokemongo.img}>
//<p>${pokemongo.name} </p>  vc pode testar na função acima. para deixar eles na horizonal tem um link no trelo
/*que fala sobre isso, na vdd e copiei e colei para testar e deu certo.

para fazer um array para puxar todos os dados basta chamar uma segunad function com um for.
(precisamos estudar for in e for off, no meu  feedback a palomita falou que existem formas melhres
 de escrever o for. eu ainda não sei como.)

não consegui fazer funcionar a função a baixo. deu erro e to com sono.
acho que da pra entender o raciocinio*/
/*function pokemonImage(numeroDoPokemon){//colocamos como parametro dessa função os numeros, pois sabemos
   //que teremos de passar por todos os pokemons para apresentar o que nos queremos.
   const pokemongo = data.pokemon[numeroDoPokemon];//da mesma forma chamamos o parametro aqui. 
   //não sei explicar bem isso, acho que é uma regra sobre funções e parametros.
   let box=`
      <img src=${pokemongo.img}>
      <p>${pokemongo.name} </p>
   `; 
document.getElementById("pokes").innerHTML=box; 
}
pokemonImage(); 

function funçaoParaChamarOFor(){
   let imagens='';//da mesma forma que fizemos no ultimo trabalho declaramos um variavel vazia.
   for (let i = 0; i<data.pokemon.length; i++){ //apresentamos o for que conhecemos.
      pokemonImage(i);//chamamos a função anterior e falamos para passar em cada numero de pokemon
      //htmlCards+=pokemonImage(i)
}
document.getElementById("pokes").innerHTML+= pokemonImage;//htmlCards;
}
funçaoParaChamarOFor(); //chamamos a segunda função para funcionar.*/




/*
document.getElementById("bt-go").addEventListener("click",clear);
function clear(){
document.getElementById("body").style.display="none";
}*/

/* Essa é a função que estamos usando no nosso projeto e esla esta funcionando*/
function pokemonImage (numeroDoIdDoPersonagem){
let caminho = data.pokemon[numeroDoIdDoPersonagem];
let box =`
      <div class="coluna">
      <img src=${caminho.img}>
      <p>${caminho.name}</p>
      </div>
`;
return box; //essa modificação faz com que todas a imagens apareçam ao mesmo tempo na tela
/*document.getElementById("pokes").innerHTML+= box; //essa linha faz com que apareça um de cada vez, e
demora muito pra carregar*/
}
function criaImagemEinsereId(){
   let htmlCards='';
   for (let i = 0; i<data.pokemon.length; i++){
      //pokemonImage(i); usado junto com a linha 122
      htmlCards+=pokemonImage(i)//subistui a linha 128 e acompanha a ideia de apresentar tudo de uma vez só na tela.
}
document.getElementById("pokes").innerHTML+= htmlCards;
}
criaImagemEinsereId();

//teste para botão, ainda não está funcionando.
/*document.getElementById("test-pesq").addEventListener("click",buscarNome);
function buscarNome (numeroDoIdDoPersonagem, event){
   event.preventDefault();
   let nome = document.getElementById("name-search").value;
   let caminho = data.pokemon[numeroDoIdDoPersonagem];
   function pesquisaNome(){
      let nome1="";
      for (let i = 0; i<data.pokemon.length; i++){
         nome1+=buscarNome(i);
   }
   if (nome === caminho.name){
      //let nome = document.getElementById("name-search").value;
   let box1 =`
         <img src=${caminho.img}>
         <p>${caminho.name}</p>
   `;
   return box1;
   //document.getElementById("pokes").innerHTML+= box1;
   }else {
      document.getElementById("pokes").innerHTML+= "tente novamente";
   }
   buscarNome();
}
   pesquisaNome();
}*/

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
      console.log(type);

   //document.getElementById("test1").innerHTML= `o tipo é ${type}.`;


    
  // querySelectorAll

   //selectType();*/
//console.log(example, data);