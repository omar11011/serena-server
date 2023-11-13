const base = JSON.parse(JSON.stringify(require("./023.ekans")))

module.exports = {
    ...base,
    pokedex: 24,
    keys: ["arbok"],
    name: "Arbok",
    category: "Cobra",
    height: 3.5,
    weight: 65.0,
    habitat: "pradera",
    increase: "lento",
    catch_ratio: 90,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
  }
  