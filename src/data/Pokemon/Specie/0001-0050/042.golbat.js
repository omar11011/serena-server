const base = JSON.parse(JSON.stringify(require("./041.zubat")))

module.exports = {
    ...base,
    pokedex: 42,
    keys: ["golbat"],
    name: "Golbat",
    height: 1.6,
    weight: 55.0,
    catch_ratio: 90,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
  }
  