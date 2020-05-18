export const filterData = (data, condition) => {
    return data.filter((pokemon) => (pokemon.type[0] !== condition && pokemon.type[1] !== condition))
}

export const sortData = (data, sortBy, sortOrder) => {
    if (sortOrder === "Menor-nº" || sortOrder === "A-Z"){
        return data.sort((a,b) => a[sortBy] > b[sortBy] ? 1 :-1)
    } else if (sortOrder === "Maior-nº" || sortOrder === "Z-A" ) {
        return data.sort((a,b) => a[sortBy] > b[sortBy] ? -1 : 1)
    }
}
