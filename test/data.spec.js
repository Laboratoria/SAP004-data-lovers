import { sortAlphaOrder } from '.data/pokemo/pokemon.js';


describe('Teste ordem az', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

describe('sortAlphaOrder',()=>{
  it ('is a function', () => {
    expect(typeof sortAlphaOrder()).toBe('function');
  });
  
  it('returns' `sortAlphaOrder`, () => {
    expect(typeof sortAlphaOrder()).toBe('sortAlphaOrder')
  })
});