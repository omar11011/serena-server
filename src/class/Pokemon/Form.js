const findElement = require("../../functions/findElement")

module.exports = class Form {

    constructor(props) {
        this.id = props.id
        this.name = props.name
        this.specie = findElement("Pokemon", "Specie", props.specie)
        this.is_initial = this.validateBoolean(props.is_initial)
        this.is_legendary = this.validateBoolean(props.legendary)
        this.is_mythical = this.validateBoolean(props.mythical)
        this.is_ub = this.validateBoolean(props.ub)
        this.is_mega = this.validateBoolean(props.is_mega)
        this.is_giga = this.validateBoolean(props.is_giga)
        this.is_paradox = this.validateBoolean(props.is_paradox)
        this.is_special = this.validateBoolean(props.is_special)
        this.spawn = this.validateSpawn(props)
        this.region = findElement("Region", "Region", props.region || "kanto")
        this.types = this.validateArray(props.types).map(e => findElement("Type", "Type", e))
        this.evolutions = this.validateArray(props.evolutions.filter(e => e.form)).map(e => this.validateEvolution(e))
        this.movements = this.validateMovement(props.movements)
        this.stats = this.validateStats(props.stats)
        this.image = this.validateImage(props.image)
    }

    validateArray(array) {
        if (!array || !Array.isArray(array)) array = []
        return array
    }

    validateBoolean(value) {
        if (value === undefined) value = false
        return value
    }

    validateSpawn(data) {
        let value = true

        if (
            !data.spawn && 
            (
                data.is_legendary || data.is_mythical || data.is_ub ||
                data.is_initial || data.is_mega || data.is_giga || data.is_paradox || data.is_special
            )
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
        if (!data) data = {}
        const options = ["level", "machine", "tutor", "special"]

        options.map(e => {
            data[e] = this.validateArray(data[e])

            data[e].map(f => {
                if (!f.level) f.level = 1
            })
        })

        return data
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