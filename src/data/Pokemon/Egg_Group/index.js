module.exports = [
    {
        keys: ["desconocido"],
        name: "Desconocido",
    },
    {
        keys: ["ditto"],
        name: "Ditto",
    },
    {
        keys: ["planta"],
        name: "Planta",
    },
    {
        keys: ["bicho"],
        name: "Bicho",
    },
    {
        keys: ["volador"],
        name: "Volador",
    },
    {
        keys: ["humanoide"],
        name: "Humanoide",
    },
    {
        keys: ["mineral"],
        name: "Mineral",
    },
    {
        keys: ["amorfo"],
        name: "Amorfo",
    },
    {
        keys: ["campo"],
        name: "Campo",
    },
    {
        keys: ["agua1", "agua 1"],
        name: "Agua 1",
    },
    {
        keys: ["agua2", "agua 2"],
        name: "Agua 2",
    },
    {
        keys: ["agua3", "agua 3"],
        name: "Agua3 ",
    },
    {
        keys: ["monstruo"],
        name: "Monstruo",
    },
    {
        keys: ["hada"],
        name: "Hada",
    },
    {
        keys: ["dragon"],
        name: "Dragón",
    },
].map((e, i) => {
    e.id = i + 1
    return e
})