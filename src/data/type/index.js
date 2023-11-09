module.exports = [
    require("./acero"),
    require("./agua"),
    require("./bicho"),
    require("./dragon"),
    require("./electrico"),
    require("./fantasma"),
    require("./fuego"),
    require("./hada"),
    require("./hielo"),
    require("./lucha"),
    require("./normal"),
    require("./planta"),
    require("./psiquico"),
    require("./roca"),
    require("./siniestro"),
    require("./tierra"),
    require("./veneno"),
    require("./volador"),
].map((e, i) => {
    e.id = i + 1

    if (!e.effectiveness) e.effectiveness = {}
    if (!e.effectiveness.high) e.effectiveness.high = []
    if (!e.effectiveness.low) e.effectiveness.low = []
    if (!e.effectiveness.inmune) e.effectiveness.inmune = []

    return e
})