const base = JSON.parse(JSON.stringify(require("./025.pikachu")))

module.exports = {
    ...base,
    pokedex: 26,
    keys: ["raichu"],
    name: "Raichu",
    height: 0.8,
    weight: 30.0,
    catch_ratio: 75,
    hatching_steps: [2560, 2816],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
  }
  