import { filterByType, sortOrder } from '../src/data.js';

const pokemonMock = [{
  id: 1,
  name: "Bulbasaur",
  type: ["Grass", "Poison"],
  },
  {
  id: 4,
  name: "Charmander",
  type: ["Fire"],
  }
];

describe('Deve filtrar o pokémon por tipo', () => {
  it('é uma função', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('retorna o objeto do pokémon quando filtrado por tipo', () => {
    expect(filterByType("Grass", "type", pokemonMock)).toEqual([{"id": 1, "name": "Bulbasaur", "type": ["Grass", "Poison"]}])
  });
});


describe('Deve ordernar os pokémons de A-Z e Z-A ou 1-151 a 151-1', () => {
  it('é uma função', () => {
    expect(typeof sortOrder).toBe('function');
  });

  it('retorna a lista de pokémon impresso na tela quando ordenado a-z', () => {
    expect(typeof sortOrder("az", "name", pokemonMock)).toBeTruthy();
  });

  it('retorna a lista de pokémon impresso na tela quando ordenado z-a', () => {
    expect(typeof sortOrder("za", "name", pokemonMock)).toBeTtruthy();
  });
});



/*
describe('Deve buscar os pokémons pelo nome', () => {
  it('é uma função', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  
});
sortOrder, searchPokemon
*/


