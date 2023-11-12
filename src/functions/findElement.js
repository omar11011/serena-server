const loadData = require("./loadData")

module.exports = (db, table, key) => {
    // Error: No hay clave
    if (!key) return {}

    // Archivo requerido
    const DATA = loadData(`${db}/${table}`).map((e, i) => {
        e.id = i + 1
        return e
    })
    const CLASS = require(`../class/${db}/${table}`)
    
    // Buscando data requerido
    const obj = DATA.find(e => e.keys.includes(key) || e.name.toLowerCase() === key)

    // Error: Dato no encontrado
    if (!obj) return null

    // Convirtiendo a clase y retornando
    return new CLASS(obj)
}