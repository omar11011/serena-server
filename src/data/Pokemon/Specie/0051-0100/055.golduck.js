const base = JSON.parse(JSON.stringify(require("./054.psyduck")));

module.exports = {
    ...base,
    pokedex: 55,
    keys: ["golduck"],
    name: "Golduck",
    category: "Pato salvaje",
    height: 1.7,
    weight: 76.6,
    catch_ratio: 75,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
};