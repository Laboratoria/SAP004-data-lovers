import {ordenarAZ, ordemQveio, ordenarZA, ordenarAlive, ordenarDead, ordenarMale, ordenarFemale} from './data.js';

const selectElement = document.querySelector('.drop-menu');
selectElement.addEventListener('change', seletor)

function seletor(){
  if (selectElement.value === 'A-Z'){
    return ordenarCardsAZ()
  }else if (selectElement.value === 'Z-A'){
    return ordenarCardsZA()
  }else if (selectElement.value === 'alive'){
    return ordenaVivo()
  }else if (selectElement.value === 'dead'){
    return ordenaMorto()
  }else if (selectElement.value === 'male'){
    return ordenaHomem()
  }else if (selectElement.value === 'female'){
    return ordenaMulher()
  }else {
    return mostrapersonagens()
  }
}

seletor()

function mostrapersonagens(){
  let nomesPersonagens = ordemQveio();
  return  inserirNoHtml(nomesPersonagens);
}

 function ordenarCardsAZ(){
  let nomesPersonagensAZ = ordenarAZ();
  return inserirNoHtml(nomesPersonagensAZ);
}

function ordenarCardsZA(){
  let nomesPersonagensZA = ordenarZA();
  return inserirNoHtml(nomesPersonagensZA);
}

function ordenaVivo(){
  let personagensVivo = ordenarAlive();
  return inserirNoHtml(personagensVivo)
}
function ordenaMorto(){
  let personagensMorto = ordenarDead();
  return inserirNoHtml(personagensMorto)
}
function ordenaHomem(){
  let personagensHomem = ordenarMale();
  return inserirNoHtml(personagensHomem)
}
function ordenaMulher(){
  let personagensMulher = ordenarFemale();
  return inserirNoHtml(personagensMulher)
}
function inserirNoHtml(vetor){
  let novaIsercao = "";
  novaIsercao += vetor.map((item) => 
    `<div class="cards">
      <img class="imagem" src="${item[1]}">
      <div id="nome"> ${item[0]}</div>
      <p> Gender: ${item[2]}</p>
      <p> Status: ${item[3]}</p>
      <p> Species: ${item[4]}</p>
    </div>`
    ).join("");
    document.getElementById('root').innerHTML = novaIsercao;
  };
