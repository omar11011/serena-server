module.exports = [
    {
        keys: ["pradera"],
        name: "Pradera",
    },
    {
        keys: ["bosque"],
        name: "Bosque",
    },
    {
        keys: ["agua_dulce", "agua dulce"],
        name: "Agua dulce",
    },
    {
        keys: ["agua_salada", "agua salada"],
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
        keys: ["ciudad", "city"],
        name: "Ciudad",
    },
    {
        keys: ["rare", "raro"],
        name: "Raro",
    },
].map((e, i) => {
    e.id = i + 1
    return e
})