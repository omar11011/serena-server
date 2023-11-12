const base = JSON.parse(JSON.stringify(require("./118.goldeen")))

module.exports = {
    ...base,
    pokedex: 119,
    keys: ["seaking"],
    name: "Seaking",
    category: "Pez Espada",
    height: 1.3,
    weight: 39.0,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
}
