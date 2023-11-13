module.exports = {
    keys: ["ivysaur"],
    name: "Ivysaur",
    specie: "ivysaur",
    types: ["planta", "veneno"],
    evolutions: [
        { level: 32, form: "venusaur" },
    ],
    stats: {
        hp: 60,
        attack: 62,
        defense: 63,
        spattack: 80,
        spdefense: 80,
        speed: 60,
    },
    movements: {
        level: [
            { name: "placaje" }, { name: "grunido" },
            { name: "latigo cepa" }, { name: "desarrollo" },
            { name: "drenadoras", level: 9 }, { name: "hoja afilada", level: 12 },
            { name: "polvo veneno", level: 15 }, { name: "somnifero", level: 15 },
            { name: "bomba germen", level: 20 },
            { name: "derribo", level: 25 }, { name: "dulce aroma", level: 30 },
            { name: "sintesis", level: 35 }, { name: "abatidoras", level: 40 },
            { name: "doble filo", level: 45 }, { name: "rayo solar", level: 50 },
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
    },
    image: {
        default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png",
    },
}