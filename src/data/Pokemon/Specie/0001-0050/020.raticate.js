const base = JSON.parse(JSON.stringify(require("./019.rattata")))

module.exports = {
    ...base,
    pokedex: 20,
    keys: ["raticate"],
    name: "Raticate",
    height: 0.7,
    weight: 18.5,
    catch_ratio: 127,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
  }
  