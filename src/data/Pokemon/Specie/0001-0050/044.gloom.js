const base = JSON.parse(JSON.stringify(require("./043.oddish")))

module.exports = {
    ...base,
    pokedex: 44,
    keys: ["gloom"],
    name: "Gloom",
    height: 0.8,
    weight: 8.6,
    catch_ratio: 120,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
  }
  