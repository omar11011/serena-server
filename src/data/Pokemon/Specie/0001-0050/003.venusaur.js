const base = JSON.parse(JSON.stringify(require("./002.ivysaur")))

module.exports = {
    ...base,
    pokedex: 3,
    keys: ["venusaur"],
    name: "Venusaur",
    height: 100,
    weight: 2,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",

}