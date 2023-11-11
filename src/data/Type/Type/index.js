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

    return e
})