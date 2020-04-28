export function filterData (data, key, value) {
  function filter(item) {
    //item atual que esta dos dados na propriedade da chave(exemplo gender) igual o valor(exemplo male)//
    return item[key] === value
  }
  return data.filter(filter)
}
export function sortData (data, by, order) {
  function sortAsc(a, b) {
    if (a[by] > b[by]){
      return 1;
    }
    if (a[by] < b[by]){
      return -1;
    }
    return 0;
  }

  function sortDesc(a, b) {
    if(a[by] > b[by]){
      return -1;
    }
    if(a[by] < b[by]){
      return 1;
    }
    return 0;
  }

  
  if(order === 'desc') {
    return data.sort(sortDesc)
  }
  return data.sort(sortAsc)
}