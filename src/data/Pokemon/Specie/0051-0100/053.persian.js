const base = JSON.parse(JSON.stringify(require("./052.meowth")))

module.exports = {
    ...base,
    pokedex: 53,
    keys: ["persian"],
    name: "Persian",
    category: "Gato fino",
    height: 1,
    weight: 32,
    catch_ratio: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
};
