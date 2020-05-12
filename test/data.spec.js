import { getInfo, naturalOrder, orderAZ, orderZA, filterAll, searchName } from '../src/data.js';

const data = {
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg"
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/4.jpeg"
    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/5.jpeg"
    }]
};

describe('getInfo', () => {
  it('is a function', () => {
    expect(typeof getInfo).toBe('function');
  });
  it('returns `example`', () => {
    expect(getInfo()).toBe('example');
  });
});

describe('naturalOrder', () => {
  it('is a function', () => {
    expect(typeof naturalOrder).toBe('function');
  });
  it('returns `example`', () => {
    expect(naturalOrder()).toBe('example');
  });
});

describe('orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });
  it('returns `example`', () => {
    expect(orderAZ()).toBe('example');
  });
});

describe('orderZA', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('returns `example`', () => {
    expect(orderZA()).toBe('example');
  });
});

describe('filterAll', () => {
  it('is a function', () => {
    expect(typeof filterAll).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterAll()).toBe('example');
  });
});

describe('searchName', () => {
  it('is a function', () => {
    expect(typeof searchName).toBe('function');
  });

  it('returns `example`', () => {
    expect(searchName()).toBe('example');
  });
});
