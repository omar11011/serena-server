const base = JSON.parse(JSON.stringify(require("./011.metapod")))

module.exports = {
    ...base,
    pokedex: 12,
    keys: ["butterfree"],
    name: "Butterfree",
    category: "Mariposa",
    height: 1.1,
    weight: 32.0,
    egg_group: ["bicho", "volador"],
    catch_ratio: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
  }
  