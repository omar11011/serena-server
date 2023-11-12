const base = JSON.parse(JSON.stringify(require("./007.squirtle")))

module.exports = {
    ...base,
    pokedex: 8,
    keys: ["wartortle"],
    name: "Wartortle",
    height: 1.0,
    weight: 22.5,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
  }
  