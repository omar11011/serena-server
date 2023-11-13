const base = JSON.parse(JSON.stringify(require("./017.pidgeotto")))

module.exports = {
    ...base,
    pokedex: 18,
    keys: ["pidgeot"],
    name: "Pidgeot",
    category: "Pájaro Grande",
    height: 1.5,
    weight: 39.5,
    catch_ratio: 45,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
  }
  