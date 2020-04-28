import data from './data/rickandmorty/rickandmorty.js';

function showData() {
    let firstELement = document.getElementById("listening");
    let tela = document.createElement("div");
    for (let i = 0; i <= data.results; i++) {
        tela.classList.add("card-container");
        tela.innerHTML = `<img src=${data.results.image[i]}>
        <h2>Nome:</h2>
        <p>Gênero</p>`
    }
    firstELement.appendChild(tela);
    return tela;
}

showData();