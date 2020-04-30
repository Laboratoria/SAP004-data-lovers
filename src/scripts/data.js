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
