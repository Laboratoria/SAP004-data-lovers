import {filtrar, ordemNomes, buscarNome} from '../src/data.js';

const testeFiltrar = [
  {"type": ["Fire e Flying"]},
  {"type": ["Grass e Poison"]},
  {"type": ["Fire"]}
]

describe('filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('filtrar', () => {
    expect(filtrar('"type":"Fire"', testeFiltrar)).toStrictEqual([{"type": ["Fire e Flying"]}, {"type": ["Fire"]}]);
  });
});

const testeOrdem = [
  { "name": "Squirtle" },
  { "name": "Bulbasaur" },
  { "name": "Charmeleon" }
];

describe('ordemNomes', () => {
  it('is a function', () => {
    expect(typeof ordemNomes).toBe('function');
  });

  it('ordemNomes', () => {
    expect(ordemNomes("Crescente", testeOrdem)).toStrictEqual([{"name": "Bulbasaur"}, {"name": "Charmeleon"}, {"name": "Squirtle"}]);
  });
});

it('ordemNomes', () => {
  expect(ordemNomes("Decrescente", testeOrdem)).toStrictEqual([{"name": "Squirtle"}, {"name": "Charmeleon"}, {"name": "Bulbasaur"}]);
});


const testeBuscar = [
  {"name": "Blastoise"},
  {"name": "Wartortle"},
  {"name": "Nidorina"}
]

describe('buscarNome', () => {
  it('is a function', () => {
    expect(typeof buscarNome).toBe('function');
  });

  it('buscarNome', () => {
    expect(buscarNome('"name":"Blastoise"', testeBuscar)).toStrictEqual([{"name": "Blastoise"}]);
  });
});

