require('dotenv').config()

const app = require('./app')
const db = require("./models")

const port = 3000

try {
    app.listen(port, async () => {
        console.log(`Server on port ${port}.`)

        db.sequelize.sync({ force: false })
    })
} catch (err) {
    console.error(err)
    process.exit(0)
}

const findElement = require("./functions/findElement")
const element = findElement("Pokemon", "Form", "bulbasaur")

console.log(element.movements)