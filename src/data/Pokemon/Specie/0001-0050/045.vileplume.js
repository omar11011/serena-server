const base = JSON.parse(JSON.stringify(require("./044.gloom")))

module.exports = {
    ...base,
    pokedex: 45,
    keys: ["vileplume"],
    name: "Vileplume",
    category: "Flor",
    height: 1.2,
    weight: 18.6,
    catch_ratio: 45,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
  }
  