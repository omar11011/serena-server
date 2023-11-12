const base = JSON.parse(JSON.stringify(require("./129.magikarp")))

module.exports = {
    ...base,
    pokedex: 130,
    keys: ["gyarados"],
    name: "Gyarados",
    category: "Atrocidad",
    height: 6.5,
    weight: 235.0,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
}
