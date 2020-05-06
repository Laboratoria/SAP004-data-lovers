import {pegaNameImage} from './functionsdata.js'
import data from './data/rickandmorty/rickandmorty.js'

export const ordenarAZ = () =>{
return pegaNameImage().sort()
};

export const ordemQveio = () => {
return pegaNameImage();
};

export const ordenarZA = () => {
return ordenarAZ().reverse();
};

 const statusA = "Alive"
 const statusD = "Dead"
 const genderM = "Male"
 const genderF = "Female"


function filtraAlive(item) {
   return (item.status === statusA)
}
function filtraDead(item) {
  return (item.status === statusD)
}
function filtraMale(item) {
  return (item.gender === genderM)
}
function filtraFemale(item) {
  return (item.gender === genderF)
}
export const ordenarAlive = () => {
  let ordenafdp = data.results.filter(filtraAlive);
  return ordenadesgraça(ordenafdp);
}
export const ordenarDead = () => {
  let ordenafdp = data.results.filter(filtraDead);
  return ordenadesgraça(ordenafdp);
}
export const ordenarMale = () => {
  let ordenafdp = data.results.filter(filtraMale);
  return ordenadesgraça(ordenafdp);
}
export const ordenarFemale = () => {
  let ordenafdp = data.results.filter(filtraFemale);
  return ordenadesgraça(ordenafdp);
}

export const ordenadesgraça = (vetor) => {
  return vetor.map(function(item){
      return [item.name, item.image, item.gender, item.status, item.species]}) 
};
