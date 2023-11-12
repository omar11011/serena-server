const base = JSON.parse(JSON.stringify(require("./109.koffing")))

module.exports = {
    ...base,
    pokedex: 110,
    keys: ["weezing"],
    name: "Weezing",
    category: "Gas Venenoso",
    height: 1.2,
    weight: 9.5,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
}
