const base = JSON.parse(JSON.stringify(require("./005.charmeleon")))

module.exports = {
    ...base,
    pokedex: 6,
    keys: ["charizard"],
    name: "Charizard",
    height: 1.7,
    weight: 90.5,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  }