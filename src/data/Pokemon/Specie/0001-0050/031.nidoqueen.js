const base = JSON.parse(JSON.stringify(require("./030.nidorina")))

module.exports = {
    ...base,
    pokedex: 31,
    keys: ["nidoqueen"],
    name: "Nidoqueen",
    category: "Taladro",
    height: 1.3,
    weight: 60.0,
    catch_ratio: 45,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
  }
  