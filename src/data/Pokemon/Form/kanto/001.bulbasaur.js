module.exports = {
    keys: ["bulbasaur"],
    name: "Bulbasaur",
    specie: "bulbasaur",
    is_initial: true,
    types: ["planta", "veneno"],
    evolutions: [
        { level: 16, form: "ivysaur" },
    ],
    stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        spattack: 65,
        spdefense: 65,
        speed: 45,
    },
    movements: {
        level: [
            { name: "placaje" },
        ],
        machine: [].map(e => {
            return { name: e }
        }),
        tutor: [].map(e => {
            return { name: e }
        }),
        special: [].map(e => {
            return { name: e }
        }),
    },
    image: {
        default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
    },
}