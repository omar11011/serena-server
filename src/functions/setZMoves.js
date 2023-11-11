module.exports = (types, form) => {
    const data = []

    // Por tipo
    if (types.includes("acero")) data.push({ name: "Hélice Trepanadora", item: "metalostal z" })
    if (types.includes("agua")) data.push({ name: "Hidrovórtice abisal", item: "hidrostal z" })
    if (types.includes("bicho")) data.push({ name: "Guadaña sedosa", item: "insectostal z" })
    if (types.includes("dragon")) data.push({ name: "Dracoaliento devastador", item: "dracostal z" })
    if (types.includes("electrico")) data.push({ name: "Gigavoltio destructor", item: "elecrostal z" })
    if (types.includes("fantasma")) data.push({ name: "Presa espectral", item: "espectrostal z" })
    if (types.includes("fuego")) data.push({ name: "Hecatombe pírica", item: "pirostal z" })
    if (types.includes("hada")) data.push({ name: "Arrumaco sideral", item: "feeristal z" })
    if (types.includes("hielo")) data.push({ name: "Crioaliento despiadado", item: "criostal z" })
    if (types.includes("lucha")) data.push({ name: "Ráfaga demoledora", item: "lizastal z" })
    if (types.includes("normal")) data.push({ name: "Carrera arrolladora", item: "normastal z" })
    if (types.includes("planta")) data.push({ name: "Megatón Floral", item: "fitostal z" })
    if (types.includes("psiquico")) data.push({ name: "Disruptor psíquico", item: "psicostal z" })
    if (types.includes("roca")) data.push({ name: "Aplastamiento gigalítico", item: "litostal z" })
    if (types.includes("siniestro")) data.push({ name: "Agujero negro aniquilador", item: "nictostal z" })
    if (types.includes("tierra")) data.push({ name: "Barrena telúrica", item: "geostal z" })
    if (types.includes("veneno")) data.push({ name: "Diluvio Corrosivo", item: "toxistal z" })
    if (types.includes("volador")) data.push({ name: "Picado supersónico", item: "aerostal z" })
    
    // Por forma
    if (form.includes("pikachu")) data.push({ name: "Pikavoltio letal", item: "pikastal z", move: "placaje electrico" })
    
    return data
}