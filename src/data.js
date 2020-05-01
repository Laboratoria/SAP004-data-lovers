
export function filtrar(campo, array) {
 const filtrado = array.filter((item) => item.type.includes(campo))
return filtrado;
}
 
/*export  function buscarNome(campo, array){
  const buscado = array.name.map((item) => item(campo))
return console.log(buscado);
}*/

export function ordemNomes(campo, array){
  const opcao = array.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  if(campo === "Decrescente"){
    return opcao.reverse();
  }else{
    return opcao;
  }
}