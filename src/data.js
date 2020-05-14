
export const apllyAscendingOrder = (a, b) => 
 /* if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;*/

     (((a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0));


export const applyDescendingOrder = (a, b) => 
  /*if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;*/
  (((a.name > b.name)? -1 : (a.name < b.name) ? 1 : 0));


export const applySearchType = (search, filterType) => 
  (search.type.includes(filterType));


export const applySearchName = (search, filterName) => 
  (search.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1);