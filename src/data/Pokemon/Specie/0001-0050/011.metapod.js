const base = JSON.parse(JSON.stringify(require("./010.caterpie")))

module.exports = {
    ...base,
    pokedex: 11,
    keys: ["metapod"],
    name: "Metapod",
    category: "Capullo",
    height: 0.7,
    weight: 9.9,
    catch_ratio: 120,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
  }
  