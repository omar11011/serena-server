const base = JSON.parse(JSON.stringify(require("./048.venonat")))

module.exports = {
    ...base,
    pokedex: 49,
    keys: ["venomoth"],
    name: "Venomoth",
    category: "Polilla Veneno",
    height: 1.5,
    weight: 12.5,
    catch_ratio: 75,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
  }
  