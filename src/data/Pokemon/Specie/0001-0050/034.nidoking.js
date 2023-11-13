const base = JSON.parse(JSON.stringify(require("./033.nidorino")))

module.exports = {
    ...base,
    pokedex: 34,
    keys: ["nidoking"],
    name: "Nidoking",
    category: "Taladro",
    height: 1.4,
    weight: 62.0,
    catch_ratio: 45,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
  }
  