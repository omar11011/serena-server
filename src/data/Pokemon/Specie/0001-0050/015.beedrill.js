const base = JSON.parse(JSON.stringify(require("./014.kakuna")))

module.exports = {
    ...base,
    pokedex: 15,
    keys: ["beedrill"],
    name: "Beedrill",
    category: "Abeja Venenosa",
    height: 1.0,
    weight: 29.5,
    increase: "lento",
    catch_ratio: 45,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
  }
  