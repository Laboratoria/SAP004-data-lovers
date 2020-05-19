import { searchChampionsByName,
         sortCharactersAZ,
         sortCharactersZA,
         percentageByTypeAndLevel,
         filterChampionsByTypeAndLevel
         } from '../src/data.js';

         const data = {
          "data": {
              "A": {
              id: "A",
              name: "A",
              title: "the Lady of Luminosity-0",
              info: {
                attack: 1,
                defense: 2,
                magic: 3,
                difficulty: 4
                },
              tags: ["Mage-0", "Support-0"],
              },
        
              "D": {
              id: "D",
              name: "D",
              title: "the Lady of Luminosity-1",
              info: {
                attack: 5,
                defense: 6,
                magic: 7,
                difficulty: 8
                },
              tags: ["Mage-1", "Support-1"],
              },
        
              "B": {
              id: "B",
              name: "B",
              title: "the Lady of Luminosity-2",
              info: {
                attack: 9,
                defense: 10,
                magic: 11,
                difficulty: 12
                },
              tags: ["Mage-2", "Support-2"],
              },
            }   
        }

const champion = data.data;
const championsArray = Object.values(data.data);

const resultForSearchFunction = [
  {
    id: 'D',
    name: 'D',
    title: 'the Lady of Luminosity-1',
    info: { attack: 5, defense: 6, magic: 7, difficulty: 8 },
    tags: [ 'Mage-1', 'Support-1' ]
  }
];

const resultForfilterChampionsByTypeAndLevel = [
  {
    id: 'D',
    name: 'D',
    title: 'the Lady of Luminosity-1',
    info: { attack: 5, defense: 6, magic: 7, difficulty: 8 },
    tags: [ 'Mage-1', 'Support-1' ]
  },
  {
    id: 'B',
    name: 'B',
    title: 'the Lady of Luminosity-2',
    info: { attack: 9, defense: 10, magic: 11, difficulty: 12 },
    tags: [ 'Mage-2', 'Support-2' ]
  }
];


describe('Teste para função de ordenação AZ', () => {

  it('A função retorna um array contendo as Keys do objeto data.data, ordenadas alfabeticamente na ordem A-Z', () => {
    expect(sortCharactersAZ(champion)).toEqual([ 'A', 'B', 'D' ]);
  });

});


describe('Teste para função de ordenação ZA', () => {

  it('A função retorna um array contendo as Keys do objeto data.data, ordenadas alfabeticamente na ordem Z-A', () => {
    expect(sortCharactersZA(champion)).toEqual([ 'D', 'B', 'A' ]);
  });

});


describe('Teste para a função refente ao cálculo agregado: percentageByTypeAndLevel', () => {

  it('A função retorna uma porcentagem de acordo com os parâmetros passados pelo usuário', () => {
    expect(percentageByTypeAndLevel("magic", 5, championsArray)).toBe(66);
    
  });

});


describe('Teste para função searchChampionsByName', () => {

  it('A função retorna um array contendo um ou mais objetos que cotenham oque foi inserido para realizar a pesquisa', () => {
    expect(searchChampionsByName(championsArray, "D")).toEqual(resultForSearchFunction);
  });

});

describe('Teste para função filterChampionsByTypeAndLevel', () => {

  it('A função retorna um array contendo um ou mais objetos que satisfazem a condição de filtragem', () => {
    expect(filterChampionsByTypeAndLevel(championsArray, "magic", 4)).toEqual(resultForfilterChampionsByTypeAndLevel);
  });

});
