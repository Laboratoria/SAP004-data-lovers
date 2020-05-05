import { getOptions, createFilter } from '../src/scripts/createFilters.js';

import { expect } from 'chai';

describe('getOptions', () => {
  it('get options of type filter', () => {
    const data = [
      { status: 'Alive' },
      { status: 'Alive' },
      { status: 'Dead' }
    ]
    expect([...getOptions(data, 'status')]).to.deep.equal(['Alive', 'Dead']);
  });
});

describe('createFilter', () => {
  it('Man clicked, add li on ul, check if the elements are right', () => {
    const ul = document.createElement('ul');
    const options = ['Man', 'Girl', 'Alien'];
    const callback = (option) => {
      expect(option).to.be.equal('Man');
    }
    createFilter(ul, options, callback);

    expect(ul.childElementCount).to.be.equal(3);
    for(let i = 0; i < ul.children.length; i++) {
      expect(ul.children.item(i).innerHTML).to.be.equal(options[i]);
    }

    ul.children[0].click();
  });
});
