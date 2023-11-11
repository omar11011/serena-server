module.exports = (types, specie) => {
    const data = []

    // Por tipo
    if (types.includes("acero")) data.push({ name: "Hélice Trepanadora", item: "metalostal z", })
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
    if (specie === "pikachu") {
        data.push({ name: "Pikavoltio letal", item: "pikastal z", move: "placaje electrico" })
        data.push({ name: "Gigarrayo fulminante", item: "ash-pikastal z", move: "rayo" })
    }
    if (specie === "alolan raichu") data.push({ name: "Surfeo galvánico", item: "alo-raistal z", move: "rayo" })
    if (specie === "eevee") data.push({ name: "Novena Potencia", item: "eeveestal z", move: "ultima baza" })
    if (specie === "snorlax") data.push({ name: "Arrojo intempestivo", item: "snorlastal z", move: "gigaimpacto" })
    if (specie === "mew") data.push({ name: "Supernova original", item: "mewstal z", move: "psiquico" })
    if (specie === "decidueye") data.push({ name: "Aluvión de flechas sombrías", item: "dueyestal z", move: "puntada sombria" })
    if (specie === "incineroar") data.push({ name: "Hiperplancha oscura", item: "incinostal z", move: "lariat oscuro" })
    if (specie === "primarina") data.push({ name: "Sinfonía de la diva marina", item: "primastal z", move: "aria burbuja" })
    if (specie.includes("tapu")) data.push({ name: "Cólera del guardián", item: "tapistal z", move: "furia natural" })
    if (specie === "marshadow") data.push({ name: "Constelación robaalmas", item: "marshastal z", move: "robasombra" })
    if (specie === "lycanroc") data.push({ name: "Tempestad rocosa", item: "lycanrostal z", move: "roca afilada" })
    if (specie === "mimikyu") data.push({ name: "Somanta amistosa", item: "mimikyustal z", move: "carantona" })
    if (specie === "kommo-o") data.push({ name: "Estruendo implacable", item: "kommostal z", move: "fragor escamas" })
    if (specie === "solgaleo" || specie === "necrozma") data.push({ name: "Embestida solar", item: "solgaleostal z", move: "meteoimpacto" })
    if (specie === "lunala" || specie === "necrozma") data.push({ name: "Deflagración lunar", item: "lunastal z", move: "rayo umbrio" })
    if (specie === "necrozma") data.push({ name: "Fotodestrucción apocalíptica", item: "ultranecrostal z", move: "geiser fotonico" })
    
    return data
}