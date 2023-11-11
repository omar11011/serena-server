module.exports = (db, table, key) => {
    // Error: No hay clave
    if (!key) return {}

    // Archivo requerido
    const DATA = require(`../data/${db}/${table}`)
    const CLASS = require(`../class/${db}/${table}`)

    // Buscando data requerido
    const obj = DATA.find(e => e.keys.includes(key) || e.name === key)

    // Error: Dato no encontrado
    if (!obj) return null

    // Convirtiendo a clase y retornando
    return new CLASS(obj)
}