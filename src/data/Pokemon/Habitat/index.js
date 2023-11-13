module.exports = [
    {
        keys: ["pradera"],
        name: "Pradera",
    },
    {
        keys: ["bosque", "selva"],
        name: "Bosque",
    },
    {
        keys: ["agua_dulce", "agua dulce", "agua-dulce", "agua fresca", "agua_fresca", "agua-fresca"],
        name: "Agua dulce",
    },
    {
        keys: ["agua_salada", "agua salada", "mar", "acuatico", "acuático"],
        name: "Agua salada",
    },
    {
        keys: ["caverna"],
        name: "Caverna",
    },
    {
        keys: ["montaña", "montana"],
        name: "Montaña",
    },
    {
        keys: ["campo"],
        name: "Campo",
    },
    {
        keys: ["ciudad", "city", "urbano"],
        name: "Ciudad",
    },
    {
        keys: ["rare", "raro", "desconocido"],
        name: "Raro",
    },
].map((e, i) => {
    e.id = i + 1
    return e
})