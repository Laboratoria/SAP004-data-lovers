import { ordenadesgraça, ordemQveio, ordenarAZ, ordenarZA, filtraAll, buscador } from '../src/data.js';

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
  }]};

describe('ordenadesgraça', () => {
  it('is a function', () => {
    expect(typeof ordenadesgraça).toBe('function');
  });

  it('returns `example`', () => {
    expect(ordenadesgraça()).toBe('example');
  });
});


describe('ordemQveio', () => {
  it('is a function', () => {
    expect(typeof ordemQveio).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(ordemQveio()).toBe('OMG');
  });
});

describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('returns `example`', () => {
    expect(ordenarAZ()).toBe('example');
  });
});

describe('ordenarZA', () => {
  it('is a function', () => {
    expect(typeof ordenarZA).toBe('function');
  });

  it('returns `example`', () => {
    expect(ordenarZA()).toBe('example');
  });
});

describe('filtraAll', () => {
  it('is a function', () => {
    expect(typeof filtraAll).toBe('function');
  });

  it('returns `example`', () => {
    expect(filtraAll()).toBe('example');
  });
});

describe('buscador', () => {
  it('is a function', () => {
    expect(typeof buscador).toBe('function');
  });

  it('returns `example`', () => {
    expect(buscador()).toBe('example');
  });
});
