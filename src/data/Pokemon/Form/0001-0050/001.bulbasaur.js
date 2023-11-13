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
            { name: "placaje" }, { name: "grunido" },
            { name: "latigo cepa", level: 3 }, { name: "desarrollo", level: 6 },
            { name: "drenadoras", level: 9 }, { name: "hoja afilada", level: 12 },
            { name: "polvo veneno", level: 15 }, { name: "bomba germen", level: 18 },
            { name: "derribo", level: 21 }, { name: "dulce aroma", level: 24 },
            { name: "sintesis", level: 27 }, { name: "abatidoras", level: 30 },
            { name: "doble filo", level: 33 }, { name: "rayo solar", level: 36 },
        ],
        machine: [
            "toxico", "semilladora", "avivar", "dia soleado", "pantalla de luz",
            "proteccion", "gigadrenado", "velo sagrado", "rayo solar", "doble equipo",
            "bomba lodo", "imagen", "descanso", "atraccion", "energibola", "aguante",
            "falsotortazo", "destello", "danza espada", "sonambulo", "hierba lazo",
            "contoneo", "sustituto", "corte", "fuerza", "golpe roca",
        ].map(e => {
            return { name: e }
        }),
        tutor: [
            "danza espada", "doble filo", "golpe cuerpo", "mimetico", "sustituto",
            "aguante", "bofeton lodo", "contoneo", "corte furia", "rizo defensa",
            "ronquido", "sonambulo", "bomba germen", "desarme", "sintesis", "atadura",
            "abatidoras", "disparo demora", "golpe cabeza", "voto planta",
            "gigadrenado", "fitoimpulso",
        ].map(e => {
            return { name: e }
        }),
        special: [
            "falsotortazo", "poder pasado", "bloqueo", "planta feroz", "meteorobola",
            "celebracion",
        ].map(e => {
            return { name: e }
        }),
    },
    image: {
        default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
    },
}