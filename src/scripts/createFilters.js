export function getOptions(characters, prop) {
  return characters.reduce(
    (acc, character) => acc.add(character[prop]),
    // eslint-disable-next-line no-undef
    new Set(),
  );
}

export function createFilter(parentElement, options, callback) {
  const list = [];

  options.forEach((element) => {
    const li = document.createElement('li');
    li.addEventListener('click',
      () => callback(element)
    );
    li.innerHTML = element;
    list.push(li);
  })

  parentElement.append(...list);
}
