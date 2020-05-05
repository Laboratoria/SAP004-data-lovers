export const createCharacter = (character) => `
<li class="card__character">
  <figure>
    <img src="${character.image}" class="card__image">
    <figcaption class="card__name">${character.name}</figcaption>
  </figure>
  <section class="card__description">
    <p><span>Species:</span> ${character.species}</p>
    <p><span>Status:</span> ${character.status}</p>
    <p><span>Gender:</span> ${character.gender}</p>
    <p><span>Type:</span> ${character.type}</p>
    <p><span>Origin:</span> ${character.origin.name}</p>
    <p><span>Location:</span> ${character.location.name}</p>
    <p><span>Episodes:</span> ${character.episode.length}</p>
  </section>
</li>
`;

export function buildHTML(parentElement, dataCharacter) {
  let html = '';
  for (let i of dataCharacter) {
    html += createCharacter(i);
  }
  parentElement.innerHTML = html;
}
