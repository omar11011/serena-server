const base = JSON.parse(JSON.stringify(require("./032.nidoran-m")))

module.exports = {
    ...base,
    pokedex: 33,
    keys: ["nidorino"],
    name: "Nidorino",
    height: 0.9,
    weight: 19.5,
    catch_ratio: 120,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
  }
  