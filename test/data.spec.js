<<<<<<< HEAD
import { apllyAscendingOrder, applyDescendingOrder, applySearchType,  applySearchName} from '../src/data.js';

const pokemon = [
  {
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.71 m",
      "weight": "6.9 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.69,
      "avg_spawns": 69,
      "spawn_time": "20:00",
      "multipliers": [1.58],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "next_evolution": [{
        "num": "002",
        "name": "Ivysaur"
      }, {
        "num": "003",
        "name": "Venusaur"
      }]
    }, {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.99 m",
      "weight": "13.0 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.042,
      "avg_spawns": 4.2,
      "spawn_time": "07:00",
      "multipliers": [
        1.2,
        1.6
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "prev_evolution": [{
        "num": "001",
        "name": "Bulbasaur"
      }],
      "next_evolution": [{
        "num": "003",
        "name": "Venusaur"
      }]
    }, {
      "id": 3,
      "num": "003",
      "name": "Venusaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "2.01 m",
      "weight": "100.0 kg",
      "candy": "Bulbasaur Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "11:30",
      "multipliers": null,
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "prev_evolution": [{
        "num": "001",
        "name": "Bulbasaur"
      }, {
        "num": "002",
        "name": "Ivysaur"
      }]
    }
  ]
=======
import { apllyAscendingOrder, applyDescendingOrder, applySearchType /*applySearchName*/ } from '../src/data.js';

const pokemon = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [1.58],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "002",
      "name": "Ivysaur"
    }, {
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.042,
    "avg_spawns": 4.2,
    "spawn_time": "07:00",
    "multipliers": [
      1.2,
      1.6
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }],
    "next_evolution": [{
      "num": "003",
      "name": "Venusaur"
    }]
  }, {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }, {
      "num": "002",
      "name": "Ivysaur"
    }]
  }
]
>>>>>>> 1d67acfd461c721b73c3a49d90b4eb7c3b2e6c1d

describe('function apllyAscendingOrder', () => {
  it('is a function', () => {
    expect(typeof apllyAscendingOrder).toBe('function');
  });

<<<<<<< HEAD
  it('returns `coloca em ordem alfabetica crescente quando clica em A-Z`', () => {
    expect(apllyAscendingOrder(pokemon,'name', 'a.name > b.name')).toEqual('1');
  });

  it('returns `coloca em ordem alfabetica crescente quando clica em A-Z`', () => {
    expect(apllyAscendingOrder(pokemon,'name', 'a.name < b.name')).toEqual('-1');
  });

  it('returns `coloca em ordem alfabetica crescente quando clica em A-Z`', () => {
  expect(apllyAscendingOrder(pokemon,'name', '')).toEqual('0');
  });
});

describe('function applyDescendingOrder', () => {
  it('is a function', () => {
    expect(typeof applyDescendingOrder).toBe('function');
=======
  it('Coloca em ordem alfabética crescente quando clica em A-Z', () => {
    expect(apllyAscendingOrder(pokemon, 'name', 'a.name > b.name')).toEqual('1');
  });

  it('Coloca em ordem alfabética crescente quando clica em A-Z', () => {
    expect(apllyAscendingOrder(pokemon, 'name', 'a.name < b.name')).toEqual('-1');
  });

  it('Coloca em ordem alfabética crescente quando clica em A-Z', () => {
    expect(apllyAscendingOrder(pokemon, 'name', '')).toEqual('0');
  });
})

describe('function applyDescendingOrder', () => {
  it('is a function', () => {
    expect(typeof apllyAscendingOrder).toBe('function');
  });

  it('Coloca em ordem alfabética decrescente quando clica em Z-A', () => {
    expect(applyDescendingOrder(pokemon, 'name', 'a.name > b.name')).toEqual('-1');
  });

  it('Coloca em ordem alfabética crescente quando clica em A-Z', () => {
    expect(apllyAscendingOrder(pokemon, 'name', 'a.name < b.name')).toEqual('1');
  });

  it('Coloca em ordem alfabética crescente quando clica em A-Z', () => {
    expect(apllyAscendingOrder(pokemon, 'name', '')).toEqual('0');
  });
})

describe('function applySearchType', () => {
  it('is a function', () => {
    expect(typeof apllyAscendingOrder).toBe('function');
  });

  it('Faça a busca por tipo de pokemon', () => {
    expect(applyDescendingOrder(pokemon, 'type', 'Grass')).toEqual('Grass');
  });
})

/*describe('function applySearchType', () => {
  it('is a function', () => {
    expect(typeof applySearchType).toBe('function');
>>>>>>> 1d67acfd461c721b73c3a49d90b4eb7c3b2e6c1d
  });

  it('returns `coloca em ordem alfabetica descrescente quando clica em Z-A`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
