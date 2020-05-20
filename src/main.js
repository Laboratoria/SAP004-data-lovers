import { searchPokemon, sortOrder, filterByType, porcentPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';
import icons from './icons.js';

const pokemonData = data.pokemon;


// banco de dados


// **** ids HTML *********

// ids do Nav 
const searchBar = document.querySelector("#searchBar");
const pokemonsList = document.querySelector("#root");

// ids de Ordem
const buttonAZ = document.querySelector("#buttonAZ");
const buttonZA = document.querySelector("#buttonZA");
const buttonCresc = document.querySelector("#buttonCresc");
const buttonDecre = document.querySelector("#buttonDecre");

// ids de Tipo
const buttonSteel = document.querySelector("#buttonSteel");
const buttonWater = document.querySelector("#buttonWater");
const buttonDragon = document.querySelector("#buttonDragon");
const buttonEletric = document.querySelector("#buttonEletric");
const buttonFairy = document.querySelector("#buttonFairy");
const buttonGhost = document.querySelector("#buttonGhost");
const buttonFire = document.querySelector("#buttonFire");
const buttonIce = document.querySelector("#buttonIce");
const buttonBug = document.querySelector("#buttonBug");
const buttonFighting = document.querySelector("#buttonFighting");
const buttonNormal = document.querySelector("#buttonNormal");
const buttonDark = document.querySelector("#buttonDark");
const buttonRock = document.querySelector("#buttonRock");
const buttonGrass = document.querySelector("#buttonGrass");
const buttonPsychic = document.querySelector("#buttonPsychic");
const buttonGround = document.querySelector("#buttonGround");
const buttonPoison = document.querySelector("#buttonPoison");
const buttonFlying = document.querySelector("#buttonFlying");

// **** Card **************

// card do pokémon
const card = (num, name, img, type) => {
  let icon = type.map(function(name){
  const iconName = name.toLowerCase();
    return`<span class="${icons[iconName]}"></span>`;
  }).join(' ')

  return `<figure class="card-pokemon"><p class="pokemon-num">${num}</p>
  <img src="${img}" alt="Miniatura do pokémon ${name}">
  <p class="pokemon-type">${icon}</p>
  <figcaption class="pokemon-name">${name}</figcaption>
  </figure>`
};

// mapping para gerar o card
pokemonData.map(pokemon => pokemonsList.innerHTML += card (pokemon.num, pokemon.name, pokemon.img, pokemon.type));

// cards filtrados
searchBar.addEventListener("keyup",() => {
  displayPokemons(searchPokemon(searchBar.value.toLowerCase(), "name", pokemonData));
  Kanto.innerHTML = " ";
});

const displayPokemons = (pokemon) => {
  const cards = pokemon
    .map((pokemon) => {

    let type = pokemon.type.map(function(name){
      const iconName = name.toLowerCase();
      return`<span class="${icons[iconName]}"></span>`
    }).join(' ')
    
    return `<figure class="card-pokemon"><p class="pokemon-num">${pokemon.num}</p>
    <img src="${pokemon.img}" alt="Miniatura do pokémon ${pokemon.name}">
    <p class="pokemon-type">${type}</p>
    <figcaption class="pokemon-name">${pokemon.name}</figcaption>
    </figure>`;
  })
  .join('');
  pokemonsList.innerHTML = cards;
};

// **** Botões Ordem ******
buttonAZ.addEventListener("click", () => {
  displayPokemons(sortOrder("az", "name", pokemonData));
  Kanto.innerHTML = " ";
});
buttonZA.addEventListener("click", () => {
  displayPokemons(sortOrder("za", "name", pokemonData));
  Kanto.innerHTML = " ";
});
buttonCresc.addEventListener("click", () => {
  displayPokemons(sortOrder("cresc", "id", pokemonData));
  Kanto.innerHTML = " ";
});
buttonDecre.addEventListener("click", () => {
  displayPokemons(sortOrder("decre", "id", pokemonData));
  Kanto.innerHTML = " ";
});

// **** Botões Tipo *******
const Kanto = document.querySelector("#textTypes")

buttonSteel.addEventListener("click", () => { 
  const filterSteel = filterByType("Steel", "type", pokemonData);
  displayPokemons(filterSteel);
  const percent = porcentPokemon(filterSteel.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="steel"><span class="icon-aco"></span> Aço</h2>
  <p>
  Têm um corpo blindado, ou seja, metalizado, são poucos os que existem, já que é um dos mais novos tipos de pokémon. Com o passar das gerações, surgiram mais pokémons desse tipo. São conhecidos como tanques de guerra, pois são resistentes a 11 tipos diferentes, e são inafetados por veneno. São bons apenas contra gelo e pedra. Ficam logo "enferrujados" com golpes de fogo. Também têm fraqueza a lutador e terra. Se não usados esses tipos, o melhor para atacar é água e elétrico, qualquer outro tipo trara dificuldades na batalha.
  </p>
  <p><span class="num steel">${percent}%</span> Infelizmente não existem pokémons desse tipo em Kanto.<p>
</div>`;
});

buttonWater.addEventListener("click", () => { 
  const filterWater = filterByType("Water", "type", pokemonData);
  displayPokemons(filterWater);
  const percent = porcentPokemon(filterWater.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML = `<div>
  <h2 class="water"><span class="icon-agua"></span> Água</h2>
  <p>
  Grande parte dos pokémons são deste tipo, cerca de 21% . Eles sabem nadar, tendo assim sempre alguma vantagem ou desvatagem, já que uns só podem lutar na água (como Goldeen e Magikarp). Alguns deles são mistos com o tipo terra ou gelo, cobrindo a desvantagem de elétricos e de planta.
  </p>
  <p><span class="num water">${percent}%</span> dos pokémons de Kanto.<p>
</div>`; 
});

buttonDragon.addEventListener("click", () => {
  const filterDragon = filterByType("Dragon", "type", pokemonData);
  displayPokemons(filterDragon);
  const percent = porcentPokemon(filterDragon.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML = `<div>
  <h2 class="dragon"><span class="icon-dragao"></span> Dragão </h2>
  <p>
  São muito fortes e adoram uma batalha. São muito raros de se achar, mas contam com um grande ataque e uma ótima defesa. Seus golpes podem ser aquáticos, de fogo, de gelo, elétrico, normais, voadores e outros específicos de dragões, tornado eles um oponente difícil de ser derrotado. São difíceis de serem treinados, resistem aos tipos básicos (água, fogo, elétrico e planta). Os dragões totalmente evoluídos e os dragões lendários todos têm 2 tipos. A maioria deles (menos Kingdra e lendários) acabam ficando ou dragão/voador, ou dragão/terra, o que causa dupla desvantagem ao tipo gelo.
  </p>
  <p><span class="num dragon">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonEletric.addEventListener("click", () => {
  const filterElectric = filterByType("Electric", "type", pokemonData);
  displayPokemons(filterElectric);
  const percent = porcentPokemon(filterElectric.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="electric"><span class="icon-eletrico"></span> Elétrico </h2>
  <p>
  São muito fortes e adoram uma batalha. São muito raros de se achar, mas contam com um grande ataque e uma ótima defesa. Seus golpes podem ser aquáticos, de fogo, de gelo, elétrico, normais, voadores e outros específicos de dragões, tornado eles um oponente difícil de ser derrotado. São difíceis de serem treinados, resistem aos tipos básicos (água, fogo, elétrico e planta). Os dragões totalmente evoluídos e os dragões lendários todos têm 2 tipos. A maioria deles (menos Kingdra e lendários) acabam ficando ou dragão/voador, ou dragão/terra, o que causa dupla desvantagem ao tipo gelo.
  </p>
  <p><span class="num electric">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonFairy.addEventListener("click", () => {
  const filterFairy = filterByType("Fairy", "type", pokemonData);
  displayPokemons(filterFairy);
  const percent = porcentPokemon(filterFairy.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="fairy"><span class="icon-fada"></span> Fada </h2>
  <p>
  Surgiu principalmente para equilibrar o tipo dragão, que estava cada vez mais imbatível. Também são bons contra lutadores e noturnos, e não são afetados por golpes do tipo dragão. São fracos contra o tipo veneno e metálico, que pouco eram usados ofensivamente, ajudando a equilibrar esses tipos também.
  </p>
  <p><span class="num fairy">${percent}%</span> Infelizmente não existem pokémons desse tipo em Kanto.<p>
</div>`;
});

buttonGhost.addEventListener("click", () => {
  const filterGhost = filterByType("Ghost", "type", pokemonData);
  displayPokemons(filterGhost);
  const percent = porcentPokemon(filterGhost.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="ghost"><span class="icon-fantasma"></span> Fantasma </h2>
  <p>
  Um dos melhores tipos e mais difíceis de serem derrotados. Eles podem desaparecer no meio do nada e tem golpes fantasmagólicos, como a sombra da noite, o pesadelo, entre outros. Seus golpes costumam ter seus efeitos que podem complicar numa batalha. Não existem muitos fantasmas, no momento só existem 18 pokémons do tipo fantasma.
  </p>
  <p><span class="num ghost">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonFire.addEventListener("click", () => {
  const filterFire = filterByType("Fire", "type", pokemonData);
  displayPokemons(filterFire);
  const percent = porcentPokemon(filterFire.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="fire"><span class="icon-fogo"></span> Fogo </h2>
  <p>
  Este é um dos tipos mais queridos entre todos, têm grandes ataques, podendo deixar queimaduras em diversos pokémons. Eles atacam com chamas, têm um bom poder ofensivo, mas fracos na defesa, golpes de água, terra e pedra são comuns e podem fazer um tipo fogo não durar muito na batalha. Com o passar das gerações, cada vez menos pokémons de fogo aparecem.
  </p>
  <p><span class="num fire">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonIce.addEventListener("click", () => {
  const filterIce = filterByType("Ice", "type", pokemonData);
  displayPokemons(filterIce);
  const percent = porcentPokemon(filterIce.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="ice"><span class="icon-gelo"></span> Gelo </h2>
  <p>
  Esses pokémons são conhecidos por serem fortes contra dragões, eles podem conseguir congelar o adversários com seus golpes. É preciso saber a hora certa de se usar um pokémon ou um golpe de gelo, pois, quando não estão muito fortes, provavelmene vão estar muito fracos contra o adversário.
  </p>
  <p><span class="num ice">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonBug.addEventListener("click", () => {
  const filterBug = filterByType("Bug", "type", pokemonData);
  displayPokemons(filterBug);
  const percent = porcentPokemon(filterBug.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="bug"><span class="icon-inseto"></span> Inseto </h2>
  <p>
  São formados por insetos, muitos são perigosos e nocivos, outros, mesmo parecendo ser frágeis, podem ajudar muito em várias coisas. Os golpes insetos são muito eficientes em determinadas ocasiões, principalmente para enfrentar pokémons noturnos e psíquicos, que são difíceis de se achar uma fraqueza.
  </p>
  <p><span class="num bug">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonFighting.addEventListener("click", () => {
  const filterFighting = filterByType("Fighting", "type", pokemonData);
  displayPokemons(filterFighting);
  const percent = porcentPokemon(filterFighting.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="fighting"><span class="icon-lutador"></span> Lutador </h2>
  <p>
  São pokémons que lutam, como humanos, muitos de seus golpes são fortes. A maioria tem aparência dos humanos (pernas e braços), todos costumam usar golpes de chute, de soco, ou golpes corpo a corpo. É importante ter um desses por serem bons contra normais e noturnos. São melhores atacando, não têm uma boa defesa.
  </p>
  <p><span class="num fighting">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonNormal.addEventListener("click", () => {
  const filterNormal = filterByType("Normal", "type", pokemonData);
  displayPokemons(filterNormal);
  const percent = porcentPokemon(filterNormal.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="normal"><span class="icon-normal"></span> Normal </h2>
  <p>
  Pokémons do tipo normal são considerados bons para defesa. Seus golpes não têm vantagem a ninguém, mas podem quebrar um galhão. São especiais, a maioria consegue aprender golpes de diversos outros tipos. Costumam ser apenas do tipo normal, quando não, são mistos com o tipo voador (exceção: Girafarig e Bibarel). 
  <p><span class="num normal">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonDark.addEventListener("click", () => {
  const filterDark = filterByType("Dark", "type", pokemonData);
  displayPokemons(filterDark);
  const percent = porcentPokemon(filterDark.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="dark"><span class="icon-normal"></span> Noturno </h2>
  <p>
  Tem costume de aparecerem à noite, seus olhos são ótimos para ver, assim, consegue ser melhor contra os tipos fantasmas e psíquicos, já que eles conseguem enxergar através dos golpes psíquicos e detectar fantasmas invisíveis. Um pokémon Fantasma/Noturno não tem verdadeiras fraquezas, as resistências de um tipo cobrem as desvantagens do outro. Não tem um golpe noturno que cause um grande estrago, mas cada um tem seu efeito especial.
  <p><span class="num dark">${percent}%</span> Infelizmente não existem pokémons desse tipo em Kanto.<p>
</div>`;
});

buttonRock.addEventListener("click", () => {
  const filterRock = filterByType("Rock", "type", pokemonData);
  displayPokemons(filterRock);
  const percent = porcentPokemon(filterRock.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="rock"><span class="icon-pedra"></span> Pedra</h2>
  <p>
  Caracterizam-se por terem um corpo físico forte, tem uma defesa interessaste, conseguem ser resistentes ao tipo normal. Assim como o tipo planta, pedra é o que mais tem desvantagens (ambos com desvantagens a 5 tipos). Em compensação, eles têm vantagem a 4 tipos. Não vou dizer que eles são bons, mas também não vou dizer que eles não são.
  <p><span class="num rock">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonGrass.addEventListener("click", () => {displayPokemons(filterByType("Grass", "type", pokemonData))
  const filterGrass = filterByType("Grass", "type", pokemonData);
  displayPokemons(filterGrass);
  const percent = porcentPokemon(filterGrass.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= 
  `<div>
      <h2 class="grass"><span class="icon-planta"></span> Planta</h2>
      <p>
        Costumam viver em campos e gramados, os típicos ataques que este tipo possui, 
        são ataques que paralisam, envenenam e adormecem. A maioria dos golpes não são ofensivos, 
        e sim de atordoar o adversário. É o tipo que mais tem fraqueza a outros, mas são difíceis de serem derrotados por elétricos.
      </p>
      <p><span class="num grass">${percent}%</span> dos pokémons de Kanto.<p>
  </div>`;
});

buttonPsychic.addEventListener("click", () => {
  const filterPsychic = filterByType("Psychic", "type", pokemonData);
  displayPokemons(filterPsychic);
  const percent = porcentPokemon(filterPsychic.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML=  `<div>
  <h2 class="psychic"><span class="icon-psiquico"></span> Psíquico </h2>
  <p>
  Pokémons deste tipo são extremamente fortes, com habilidades fora do comum, paranormais, mesmo com pouca defesa este tipo segue sendo um dos melhores. Podem fazer coisas tanto incríveis como absurdas, usando seu poder psíquico. Como é um tipo meio afastado, não tem vantagens e desvantagens contra aqueles tipos mais comuns.
  </p>
  <p><span class="num psychic">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonGround.addEventListener("click", () => {
  const filterGround = filterByType("Ground", "type", pokemonData);
  displayPokemons(filterGround);
  const percent = porcentPokemon(filterGround.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="ground"><span class="icon-psiquico"></span> Terra </h2>
  <p>
  Este tipo é bastante necessário em batalhas. O único que tem vantagem a elétrico, seus principais golpes são muito úteis. Eles podem cavar e entrar debaixo da terra, o que lhes dão alguma vantagem, já que o adversário não pode vê-lo debaixo da terra. Poucos sabem, mas é importante saber que terra é fraco contra gelo e forte contra veneno.
  </p>
  <p><span class="num ground">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonPoison.addEventListener("click", () => {
  const filterPoison = filterByType("Poison", "type", pokemonData);
  displayPokemons(filterPoison);
  const percent = porcentPokemon(filterPoison.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="poison"><span class="icon-venenoso"></span> Venenoso </h2>
  <p>
  Caracterizam-se por terem uma cor escura, indicando a presença de veneno, éum dos piores tipos comparado aos outros. Se demorarem de serem derrotados, poderão ser um problema, seus maiores ataques são os que envenenam o inimigo. Só são bons contra o tipo planta, o melhor é ensinar outros golpes a eles. Seus golpes são inofesivos contra metálicos.
  </p>
  <p><span class="num poison">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

buttonFlying.addEventListener("click", () => {
  const filterFlying = filterByType("Flying", "type", pokemonData);
  displayPokemons(filterFlying);
  const percent = porcentPokemon(filterFlying.length, pokemonData.length).toFixed(0);
  Kanto.innerHTML= `<div>
  <h2 class="flying"><span class="icon-voador"></span> Voador </h2>
  <p>
  Pokémons do tipo dragão são muito fortes e adoram uma batalha. São muito raros de se achar, mas contam com um grande ataque e uma ótima defesa. Seus golpes podem ser aquáticos, de fogo, de gelo, elétrico, normais, voadores e outros específicos de dragões, tornado eles um oponente difícil de ser derrotado. São difíceis de serem treinados, resistem aos tipos básicos (água, fogo, elétrico e planta). Os dragões totalmente evoluídos e os dragões lendários todos têm 2 tipos. A maioria deles (menos Kingdra e lendários) acabam ficando ou dragão/voador, ou dragão/terra, o que causa dupla desvantagem ao tipo gelo.
  </p>
  <p><span class="num flying">${percent}%</span> dos pokémons de Kanto.<p>
</div>`;
});

/*
templateHTML(title, paragraph, porcentagem, typeBR) 
    return `<div>
    <h2 class="${type}"><span class="icon-{${typeBR}}"></span>${titulo}</h2>
    <p>${paragrafo}</p>
    <p><span class="num ${type}">${percent}%</span> dos pokémons de Kanto.<p>
    </div>`
;*/
