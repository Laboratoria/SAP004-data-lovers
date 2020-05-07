export async function getCharacters() {
  const characters = [];
  const promises = [];
  const getPage = (i) => fetch(`https://rickandmortyapi.com/api/character/?page=${i}`).then(response => response.json());

  const firstPage = await getPage(1);

  for (let i = 2; i < firstPage.info.pages; i++) {
    promises.push(getPage(i));
  }

  characters.push(...firstPage.results);

  // eslint-disable-next-line no-undef
  (await Promise.all(promises)).forEach((responses) => characters.push(...responses.results));

  return characters;
}
