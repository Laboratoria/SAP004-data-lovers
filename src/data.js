//função que ordena em ordem alfabética e num
export const order = (orderBy, nameArray) => {
  let newArray = [];
  let objectParemeter
  if (orderBy<0)
      return orderBy
  else {
      orderBy < 2 ? objectParemeter = "name" : objectParemeter = "id"
      newArray = nameArray.sort(function (a, b) {
          return ((a[objectParemeter] > b[objectParemeter]) ? 1 : ((b[objectParemeter] > a[objectParemeter]) ? -1 : 0))
      })
      if (orderBy % 2 != 0)
          newArray.reverse()
  }
}

//Concatena os filtros
export const concatFilters = (pokemonsType, heightArray, pokemons) => {
  let resultFilters = []
  if (pokemonsType.length && heightArray.length) {
    resultFilters = pokemonsType.filter((pokemonsType) => {
      for (let i of heightArray) {
        if (pokemonsType === i)
          return true
      }
    })
  }
  else
    resultFilters = pokemonsType.concat(heightArray)
  if (!resultFilters.length)
    resultFilters = pokemons
  return resultFilters
}

/*Função que verifica quais checkboxs estão selecionados*/
export const checkType = (a) => {
  const newArray = []
  for (let i of a) {
    if (i.checked)
      newArray.push(i.value)
  }
  return newArray
}

//Filtra altura
export const height = (heightPokemon, pokemons) => {
  let newArray = pokemons.sort(function (a, b) {
    return ((a.height > b.height) ? 1 : ((b.height > a.height) ? -1 : 0))
  })
  let average = (parseFloat(newArray[newArray.length - 4].height) - parseFloat(newArray[0].height)) / 3

  let resultMin
  let resultMax
  if (heightPokemon == "l") {
    resultMax = average
    resultMin = 0
  }
  else if (heightPokemon == "m") {
    resultMax = 2 * average
    resultMin = average
  }
  else {
    resultMax = Math.ceil(parseFloat(newArray[0].height))
    resultMin = 2 * average
  }

  const resultPokemons = pokemons.filter((p) => {
    if (resultMin < parseFloat(p.height) && parseFloat(p.height) < resultMax)// array 4 pois os 5 primeiros estão muito acima da média
      return true
  })
  return resultPokemons
}

/*Compara tipos e fraquezas */
export const typeFunctionConcat = (checkboxWeakness, checkboxType, p) => {   /*Verifica os tipos*/
  for (let i of checkboxType) {
    if (p.type[0] === i || p.type[1] === i)
      return true
  }
  for (let i of checkboxWeakness) {
    for (let j of p.weaknesses) {
      if (j === i)
        return true
    }
  }
}

//pesquisa função pelo nome
export const searchFunc = (p, nameInput) => {
  return p.filter((p) => {
    return nameInput === p.name.slice(0, -(p.name.length - nameInput.length)).toUpperCase() || nameInput === p.name.toUpperCase()
  })

}