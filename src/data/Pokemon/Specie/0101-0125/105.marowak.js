const base = JSON.parse(JSON.stringify(require("./104.cubone")))

module.exports = {
    ...base,
    pokedex: 105,
    keys: ["marowak"],
    name: "Marowak",
    category: "Hueso",
    height: 1.0,
    weight: 45.0,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
}
