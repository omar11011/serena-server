const base = JSON.parse(JSON.stringify(require("./021.spearow")))

module.exports = {
    ...base,
    pokedex: 22,
    keys: ["fearow"],
    name: "Fearow",
    height: 1.2,
    weight: 38.0,
    catch_ratio: 90,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
  }
  