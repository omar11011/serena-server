const findElement = require("../../functions/findElement")

module.exports = class Specie {

    constructor(props) {
        this.id = props.id
        this.pokedex = props.pokedex
        this.name = props.name
        this.category = props.category
        this.height = props.height
        this.weight = props.weight
        this.egg_group = this.validateArray(props.egg_group).map(e => findElement("Pokemon", "Egg_Group", e))
        this.gender = props.gender
        this.habitat = findElement("Pokemon", "Habitat", props.habitat || "pradera")
        this.increase = findElement("Pokemon","Increase", props.increase || "medio")
        this.catch_ratio = props.catch_ratio || 45
        this.base_friendship = props.base_friendship || 50
        this.hatching_steps = this.validateArray(props.hatching_steps || [5120, 5376])
        this.image = props.image
    }

    validateArray(array) {
        if (!array || !Array.isArray(array)) array = []
        return array
    }

}