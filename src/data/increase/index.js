module.exports = [
    {
        keys: ["erratic", "erratico", "errático"],
        name: "Errático"
    },
    {
        keys: ["fluctuating", "fluctuante"],
        name: "Fluctuante"
    },
    {
        keys: ["slow", "lento"],
        name: "Lento",
    },
    {
        keys: ["normal", "medio"],
        name: "Medio"
    },
    {
        keys: ["parabolic", "parabólico", "parabolico"],
        name: "Parabólico",
    },
    {
        keys: ["fast", "rapido", "rápido"],
        name: "Rápido",
    },
].map((e, i) => {
    e.id = i + 1
    return e
})