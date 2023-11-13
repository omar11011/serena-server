const base = JSON.parse(JSON.stringify(require("./133.eevee.js")))

module.exports = {
    ...base,
    pokedex: 136,
    keys: ["flareon"],
    name: "Flareon",
    category: "Llama",
    height: 0.9,
    weight: 25.0,
    catch_ratio: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
}
