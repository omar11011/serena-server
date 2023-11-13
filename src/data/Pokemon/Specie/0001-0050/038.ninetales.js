const base = JSON.parse(JSON.stringify(require("./037.vulpix")))

module.exports = {
    ...base,
    pokedex: 38,
    keys: ["ninetales"],
    name: "Ninetales",
    height: 1.1,
    weight: 19.9,
    catch_ratio: 75,
    hatching_steps: [5120, 5376],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
  }
  