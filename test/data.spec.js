import { filterByType, sortOrder, searchPokemon } from '../src/data.js';

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
    expect(filterByType("Grass", "type", pokemonMock)).toEqual([{"id": 1, "name": "Bulbasaur", "type": ["Grass", "Poison"]}]);
  });
});


describe('Deve ordernar os pokémons de A-Z e Z-A ou 1-151 a 151-1', () => {
  it('é uma função', () => {
    expect(typeof sortOrder).toBe('function');
  });

  it('retorna uma lista de pokémons ordenados de a-z', () => {
    expect(sortOrder("az", "name", pokemonMock)).toBeTruthy();
  });
});


describe('Deve buscar os pokémons pelo nome', () => {
  it('é uma função', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  
  it('retorna o pokémon pelo nome buscado', () => {
    expect(searchPokemon("Bulbasaur", "name", pokemonMock)).toEqual([{"id": 1, "name": "Bulbasaur", "type": ["Grass", "Poison"]}]);
  });
});