const findElement = require("../../functions/findElement")
const setZMoves = require("../../functions/setZMoves")

module.exports = class Form {

    constructor(props) {
        this.id = props.id
        this.name = props.name
        this.specie = findElement("Pokemon", "Specie", props.specie)
        this.is_initial = this.validateBoolean(props.is_initial)
        this.is_mega = this.validateBoolean(props.is_mega)
        this.is_giga = this.validateBoolean(props.is_giga)
        this.is_paradox = this.validateBoolean(props.is_paradox)
        this.is_special = this.validateBoolean(props.is_special)
        this.spawn = this.validateSpawn(props)
        this.region = findElement("Region", "Region", props.region || "kanto")
        this.types = this.validateArray(props.types).map(e => findElement("Type", "Type", e))
        this.evolutions = this.validateArray(props.evolutions.filter(e => e.form)).map(e => this.validateEvolution(e))
        this.movements = this.validateMovement(props)
        this.stats = this.validateStats(props.stats)
        this.image = this.validateImage(props.image)
    }

    validateArray(array) {
        if (!array || !Array.isArray(array)) array = []
        return array
    }

    validateBoolean(value, valueDefault = false) {
        if (value === undefined) value = valueDefault
        return value
    }

    validateSpawn(data) {
        let value = true

        if (
            !data.spawn && 
            ( data.is_initial || data.is_mega || data.is_giga || data.is_paradox || data.is_special)
        ) value = false

        return value
    }

    validateEvolution(data) {
        if (!data.level) data.level = 1
        if (!data.friendship) data.friendship = 0
        if (!data.mega) data.mega = false
        if (!data.giga) data.giga = false
        if (!data.onlyBattle) data.onlyBattle = false
        if (!data.item) data.item = null

        return data
    }

    validateMovement(data) {
        if (!data.movements) data.movements = {}

        const options = ["level", "machine", "tutor", "special", "z"]
        options.map(e => {
            data.movements[e] = this.validateArray(data.movements[e])

            if (e === "z") data.movements[e] = setZMoves(data.types, data.keys)

            data.movements[e].map(f => {
                if (!f.level) f.level = 1
            })
        })

        return data.movements
    }

    validateStats(data) {
        if (!data) data = {}
        const options = ["hp", "attack", "defense", "spattack", "spdefense", "speed"]

        options.map(e => {
            if (!data[e]) data[e] = 30
            else data[e] = parseInt(data[e])
        })

        return data
    }

    validateImage(data) {
        if (!data) data = {
            default: null,
            shiny: null,
        }

        return data
    }

}