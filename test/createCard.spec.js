import { buildHTML, createCharacter } from '../src/scripts/createCard.js';

import { expect } from 'chai';

const character = [{
  name: "Morty",
  image: "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
  status: "Alive",
  species: "Human",
  gender: "Man",
  type: "Null",
  origin: {
    name: "Earth (C-137)",
  },
  location: {
    name: "Earth (Replacement Dimension)",
  },
  episode: [1, 2, 3, 4]

}];

describe('createCharacter', () => {
  it('create html', () => {
    expect(createCharacter(character[0])).to.equal(`
<li class="card__character">
  <figure>
    <img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg" class="card__image">
    <figcaption class="card__name">Morty</figcaption>
  </figure>
  <section class="card__description">
    <p><span>Species:</span> Human</p>
    <p><span>Status:</span> Alive</p>
    <p><span>Gender:</span> Man</p>
    <p><span>Type:</span> Null</p>
    <p><span>Origin:</span> Earth (C-137)</p>
    <p><span>Location:</span> Earth (Replacement Dimension)</p>
    <p><span>Episodes:</span> 4</p>
  </section>
</li>
`);
  });
});

describe('buildHTML', () => {
  const ul = document.createElement('ul');
  it('innerHTML character', () => {
    buildHTML(ul, character);
    expect(ul.childElementCount).to.be.equal(1);
    for(let i = 0; i < ul.children.length; i++) {
      expect(ul.innerHTML).to.be.equal(createCharacter(character[i]));
    }
  });
});
