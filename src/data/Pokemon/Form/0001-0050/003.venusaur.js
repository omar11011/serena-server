module.exports = {
    keys: ["venusaur"],
    name: "Venusaur",
    specie: "venusaur",
    types: ["planta", "veneno"],
    evolutions: [
        { form: "mega venusaur", mega: true, item: "venusaurita" },
        { form: "giga venusaur", giga: true },
    ],
    stats: {
        hp: 80,
        attack: 82,
        defense: 83,
        spattack: 100,
        spdefense: 100,
        speed: 80,
    },
    movements: {
        level: [
            { name: "placaje" }, { name: "grunido" },
            { name: "latigo cepa" }, { name: "desarrollo" },
            { name: "tormenta floral" }, { name: "danza petalo" },
            { name: "drenadoras", level: 9 }, { name: "hoja afilada", level: 12 },
            { name: "polvo veneno", level: 15 }, { name: "somnifero", level: 15 },
            { name: "bomba germen", level: 20 },
            { name: "derribo", level: 25 }, { name: "dulce aroma", level: 30 },
            { name: "sintesis", level: 37 }, { name: "abatidoras", level: 44 },
            { name: "doble filo", level: 51 }, { name: "rayo solar", level: 58 },
        ],
        machine: [
            "toxico", "semilladora", "avivar", "dia soleado", "pantalla de luz",
            "proteccion", "gigadrenado", "velo sagrado", "rayo solar", "doble equipo",
            "bomba lodo", "imagen", "descanso", "atraccion", "energibola", "aguante",
            "falsotortazo", "destello", "danza espada", "sonambulo", "hierba lazo",
            "contoneo", "sustituto", "corte", "fuerza", "golpe roca", "rugido",
            "hiperrayo", "terremoto", "gigaimpacto", "terratemblor", "treparrocas",
        ].map(e => {
            return { name: e }
        }),
        tutor: [
            "danza espada", "doble filo", "golpe cuerpo", "mimetico", "sustituto",
            "aguante", "bofeton lodo", "contoneo", "corte furia", "rizo defensa",
            "ronquido", "sonambulo", "bomba germen", "desarme", "sintesis", "atadura",
            "abatidoras", "disparo demora", "golpe cabeza", "voto planta",
            "gigadrenado", "fitoimpulso", "planta feroz", "enfado", "bloqueo",
            "pataleta", "pulso de campo",
        ].map(e => {
            return { name: e }
        }),
    },
    image: {
        default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png",
    },
}