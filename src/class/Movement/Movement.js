const findElement = require("../../functions/findElement")

module.exports = class Movement {

    constructor(props) {
        this.id = props.id
        this.name = props.name
        this.type = findElement("Type", "Type", props.type)
        this.class = findElement("Movement", "Class", props.class || "fisico")
        this.power = props.power || 30
        this.precision = props.precision || 100
        this.priority = props.priority || 0
        this.contact = this.validateContact(props)
        this.is_z = this.validateBoolean(props.is_z)
        this.is_giga = this.validateBoolean(props.is_giga)
        this.is_dyna = this.validateBoolean(props.is_dyna)
        this.effects = this.validateEffects(props.effects)
    }

    validateArray(array) {
        if (!array || !Array.isArray(array)) array = []
        return array
    }

    validateBoolean(value, valueDefault = false) {
        if (value === undefined) value = valueDefault
        return value
    }

    validateContact(props) {
        let contact = this.validateBoolean(props.contact, true)

        if (props.class && props.class === "estado") contact = false

        return contact
    }

    validateEffects(data) {
        data = this.validateArray(data).filter(e => e.stat)
        data.map(e => {
            if (!e.points) e.points = 1
            e.user = this.validateBoolean(e.user)
        })

        return data
    }

}