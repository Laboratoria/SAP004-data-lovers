import {filtrar, ordemNomes} from '../src/data.js';

const ordemPokemon = [
  { "name": "Ivysaur" },
  { "name": "Bulbasaur" },
  { "name": "Venusaur" }
];

describe('filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('returns "Fire" for "Fire" with campo Fire', () => {
    expect(filtrar('Fire', 'data.pokemon')).toBe('Fire');
  });
});



describe('ordemNomes', () => {
  it('is a function', () => {
    expect(typeof ordemNomes).toBe('function');
  });

  it('ordemNomes', () => {
    expect(ordemNomes(ordemPokemon, "name")).toBe([{"name": "Bulbasaur"}, {"name": "Ivysaur"}, {"name": "Venusaur"}]);
  });
});
