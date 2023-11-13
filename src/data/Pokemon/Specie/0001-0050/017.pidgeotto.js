const base = JSON.parse(JSON.stringify(require("./016.pidgey")))

module.exports = {
    ...base,
    pokedex: 17,
    keys: ["pidgeotto"],
    name: "Pidgeotto",
    category: "Pájaro",
    height: 1.1,
    weight: 30.0,
    catch_ratio: 120,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
  }
  