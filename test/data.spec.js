import { filterExact, filterLike, sortByProp } from '../src/scripts/data.js';

import { expect } from 'chai';

const character = [
  { name: "Morty" },
  { name: "Rick" }
];

describe('filter exact', () => {
  it('filter exact', () => {
    expect(filterExact(character, 'name', 'Morty')).to.deep.equal([character[0]]);
  });
});

describe('filter like', () => {
  it('filter like', () => {
    expect(filterLike(character, 'name', 'mor')).to.deep.equal([character[0]]);
  });
});

describe('sort', () => {
  it('a-z', () => {
    expect(sortByProp(character, 'name', false)).to.deep.equal([{"name": "Rick"}, {"name": "Morty"}]);
  });
  it('z-a', () => {
    expect(sortByProp(character, 'name', true)).to.deep.equal([{"name": "Morty"}, {"name": "Rick"}]);
  });
});


