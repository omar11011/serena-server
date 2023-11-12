const base = JSON.parse(JSON.stringify(require("./111.rhyhorn")))

module.exports = {
    ...base,
    pokedex: 112,
    keys: ["rhydon"],
    name: "Rhydon",
    category: "Taladro",
    height: 1.9,
    weight: 120.0,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
}
