// // funções de exemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };




//pesquisa função pelo nome
export const searchFunc = p => {
  let nameInput = document.getElementById("search").value
  nameInput = nameInput.toUpperCase() 
return (nameInput == p.name.slice(0,-(p.name.length - nameInput.length)).toUpperCase()|| nameInput == p.name.toUpperCase()) 
};