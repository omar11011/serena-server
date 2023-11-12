const base = JSON.parse(JSON.stringify(require("./004.charmander")))

module.exports = {
  ...base,
    pokedex: 5,
    keys: ["charmeleon"],
    category: "Llama",
    name: "Charmeleon",
    height: 1.1,
    weight: 19.0,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
  }
  