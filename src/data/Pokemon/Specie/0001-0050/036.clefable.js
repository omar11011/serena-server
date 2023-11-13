const base = JSON.parse(JSON.stringify(require("./035.clefairy")))

module.exports = {
    ...base,
    pokedex: 36,
    keys: ["clefable"],
    name: "Clefable",
    height: 1.3,
    weight: 40.0,
    catch_ratio: 25,
    hatching_steps: [2560, 2816],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
  }
  