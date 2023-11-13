const base = JSON.parse(JSON.stringify(require("./046.paras")))

module.exports = {
    ...base,
    pokedex: 47,
    keys: ["parasect"],
    name: "Parasect",
    height: 1.0,
    weight: 29.5,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
  }
  