import { searchChampionsByName,
         sortCharactersAZ,
         sortCharactersZA,
         percentageByTypeAndLevel } from '../src/data.js';

const dataOrdenada = [{
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
  {
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
    {
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
      }
]
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
        };

describe('example', () => {
  it('is a function', () => {
    expect(sortCharactersAZ).toBe('function');
  });

  it('returns `example`', () => {
    expect(sortCharactersAZ([{id: 1, name:"Lux"}, {ìd:2, }]).toBe(dataOrdenada);
  });
});

const pessoa =[
  {
    name: "^lux",
    idade: 34
  },
  {
    idade: 45,
    name: "^Gareb",
  },
]

