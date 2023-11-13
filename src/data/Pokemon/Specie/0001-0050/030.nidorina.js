const base = JSON.parse(JSON.stringify(require("./029.nidoran-f")))

module.exports = {
    ...base,
    pokedex: 30,
    keys: ["nidorina"],
    name: "Nidorina",
    category: "Veneno",
    height: 0.8,
    weight: 20.0,
    catch_ratio: 120,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
  }
  