const base = JSON.parse(JSON.stringify(require("./013.weedle")))

module.exports = {
    ...base,
    pokedex: 14,
    keys: ["kakuna"],
    name: "Kakuna",
    category: "Capullo",
    height: 0.6,
    weight: 10.0,
    increase: "lento",
    catch_ratio: 120,
    hatching_steps: [3840, 4096],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
  }
  