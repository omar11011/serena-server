const base = JSON.parse(JSON.stringify(require("./008.wartortle")))

module.exports = {
  ...base,
    pokedex: 9,
    keys: ["blastoise"],
    name: "Blastoise",
    category: "Tortuga Mar",
    height: 1.6,
    weight: 85.5,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
  }
  