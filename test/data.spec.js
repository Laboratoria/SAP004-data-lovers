import { filterByType, sortOrder, searchPokemon, porcentPokemon } from '../src/data.js';


const pokemonMock = [{
  id: 1,
  name: "Bulbasaur",
  type: ["Grass", "Poison"],
  },
  {
    id: 2,
    name: "Yvisaur",
    type: ["Grass", "Poison"],
    },
  {
  id: 4,
  name: "Charmander",
  type: ["Fire"],
  },
{
  id: 5,
  name: "Charmeleon",
  type: ["Fire"],
  }
];

describe('Must filter the Pokemon by type', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('Returns the pokemon object when filtered by type', () => {
    expect(filterByType("Grass", "type", pokemonMock)).toEqual(
      [{"id": 1, "name": "Bulbasaur", "type": ["Grass", "Poison"]},{"id": 2, "name": "Yvisaur", "type": ["Grass", "Poison"]}]);
  });
});


describe('Must order the Pokemons from A-Z and Z-A or 1-151 and 151-1', () => {
  it('is a function', () => {
    expect(typeof sortOrder).toBe('function');
  });

  it('Return a list of Pokemons ordered from  a-z', () => {
    const firstPosition = sortOrder("az", "name", pokemonMock)[0];
    expect(firstPosition.name).toBe("Bulbasaur");
  });
  
  it('Return a list of Pokemons ordered from z-a', () => {
    const firstPosition = sortOrder("za", "name", pokemonMock)[0];
    expect(firstPosition.name).toBe("Yvisaur");
  });

  it('Return a list of Pokemons ordered from 1-151', () => {
    const firstPosition = sortOrder("cresc", "id", pokemonMock)[0];
    expect(firstPosition.id).toBe(1);
  });
  
  it('Return a list of Pokemons ordered from 151-1', () => {
    const firstPosition = sortOrder("decre", "id", pokemonMock)[0];
    expect(firstPosition.id).toBe(5);
  });
});


describe('Must search the Pokemons by name', () => {
  it('is a function', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  
  it('Return the searched Pokemon', () => {
  const searchName = searchPokemon( "bulbasaur", "name", pokemonMock)[0];
    expect(searchName.name).toEqual("Bulbasaur");
  });
});

//Função calculo agregado
describe('Must calculate the percentage of Pokemon by type', () => {
  it('é uma função', () => {
    expect(typeof porcentPokemon).toBe('function');
  });

  it('Return the percentage of the type of the filtered Pokemon', () => {
    const filteredPokemon = (filterByType("Grass", "type", pokemonMock));
    expect(porcentPokemon(filteredPokemon.length, pokemonMock.length)).toEqual(50);
    })});   
