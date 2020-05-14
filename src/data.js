
export const apllyAscendingOrder = (a, b) => {
  /* if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;*/

    return ((a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
};

export const applyDescendingOrder = (a, b) => {
  /*if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;*/
  return ((a.name > b.name)? -1 : (a.name < b.name) ? 1 : 0);
};

export const applySearchType = (search, filterType) => {
  return search.type.includes(filterType);
};

export const applySearchName = (search, filterName) => {
  return search.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1;
};