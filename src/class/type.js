module.exports = class Type {

    constructor(props) {
        this.id = props.id
        this.name = props.name
        this.effectiveness = this.validateEffectiveness(props.effectiveness)
    }

    validateArray(array) {
        if (!array || !Array.isArray(array)) array = []
        return array
    }

    validateEffectiveness(data) {
        if (!data) data = {}

        data.high = this.validateArray(data.high)
        data.low = this.validateArray(data.low)
        data.inmune = this.validateArray(data.inmune)

        return data
    }

}