const base = JSON.parse(JSON.stringify(require("./138.omanyte")))

module.exports = {
    ...base,
    pokedex: 139,
    keys: ["omastar"],
    name: "Omastar",
    category: "Espiral",
    height: 1.0,
    weight: 35.0,
    catch_ratio: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
}
