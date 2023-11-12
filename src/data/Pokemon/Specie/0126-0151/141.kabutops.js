const base = JSON.parse(JSON.stringify(require("./140.kabuto")))

module.exports = {
    ...base,
    pokedex: 141,
    keys: ["kabutops"],
    name: "Kabutops",
    category: "Perforador",
    height: 1.3,
    weight: 40.5,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
}
