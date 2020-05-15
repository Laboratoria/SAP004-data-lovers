import { championsInCards,
         searchChampionsByName,
         sortCharactersAZ,
         sortCharactersZA,
         percentageByTypeAndLevel } from '../src/data.js';


         let data = {
          "type": "champion",
          "format": "standAloneComplex",
          "version": "6.24.1",
          "data": {
              "Lux0": {
              id: "Lux0",
              name: "Lux",
              title: "the Lady of Luminosity",
              info: {
                attack: 2,
                defense: 4,
                magic: 3,
                difficulty: 5
                },
              tags: ["Mage", "Support"],
              },
        
              "Lux1": {
              id: "Lux1",
              name: "Lux",
              title: "the Lady of Luminosity",
              info: {
                attack: 2,
                defense: 4,
                magic: 2,
                difficulty: 5
                },
              tags: ["Mage", "Support"],
              },
        
              "Lux2": {
              id: "Lux2",
              name: "Lux",
              title: "the Lady of Luminosity",
              info: {
                attack: 2,
                defense: 4,
                magic: 9,
                difficulty: 5
                },
              tags: ["Mage", "Support"],
              },
                }   
        };




describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


