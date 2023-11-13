const base = JSON.parse(JSON.stringify(require("./039.jigglypuff")))

module.exports = {
    ...base,
    pokedex: 40,
    keys: ["wigglytuff"],
    name: "Wigglytuff",
    height: 1.0,
    weight: 12.0,
    catch_ratio: 50,
    hatching_steps: [2560, 2816],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
  }
  