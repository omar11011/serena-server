module.exports = types => {

    const moves = []

    if (types.includes("acero")) moves.push({ name: "maximetal" })
    if (types.includes("agua")) moves.push({ name: "maxichorro" })
    if (types.includes("bicho")) moves.push({ name: "maxiinsecto" })
    if (types.includes("dragon")) moves.push({ name: "maxidraco" })
    if (types.includes("electrico")) moves.push({ name: "maxitormenta" })
    if (types.includes("fantasma")) moves.push({ name: "maxiespectro" })
    if (types.includes("fuego")) moves.push({ name: "maxignición" })
    if (types.includes("hada")) moves.push({ name: "maxiestela" })
    if (types.includes("hielo")) moves.push({ name: "maxihelada" })
    if (types.includes("lucha")) moves.push({ name: "maxipuno" })
    if (types.includes("normal")) {
        moves.push({ name: "maxiataque" })
        moves.push({ name: "maxibarrera" })
    }
    if (types.includes("planta")) moves.push({ name: "maxiflora" })
    if (types.includes("psiquico")) moves.push({ name: "maxionda" })
    if (types.includes("roca")) moves.push({ name: "maxilito" })
    if (types.includes("siniestro")) moves.push({ name: "maxisombra" })
    if (types.includes("tierra")) moves.push({ name: "maxitemblor" })
    if (types.includes("veneno")) moves.push({ name: "maxiacido" })
    if (types.includes("volador")) moves.push({ name: "maxiciclon" })

    return moves

}