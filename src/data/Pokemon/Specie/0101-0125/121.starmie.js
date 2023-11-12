const base = JSON.parse(JSON.stringify(require("./120.staryu")))

module.exports = {
    ...base,
    pokedex: 121,
    keys: ["starmie"],
    name: "Starmie",
    category: "Misterioso",
    height: 1.1,
    weight: 80.0,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
}
