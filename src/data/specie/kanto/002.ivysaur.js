const base = JSON.parse(JSON.stringify(require("./001.bulbasaur")))

module.exports = {
    ...base,
    pokedex: 2,
    keys: ["ivysaur"],
    name: "Ivysaur",
    height: 13,
    weight: 1,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",

}