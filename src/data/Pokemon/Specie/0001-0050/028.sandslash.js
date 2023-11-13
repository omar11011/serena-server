const base = JSON.parse(JSON.stringify(require("./027.sandshrew")))

module.exports = {
    ...base,
    pokedex: 28,
    keys: ["sandslash"],
    name: "Sandslash",
    height: 1.0,
    weight: 29.5,
    catch_ratio: 90,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
  }
  