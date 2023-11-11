const fs = require("fs")
const path = require("path")

module.exports = url => {
    const DATA = []
    const originalPath = path.join(__dirname, `../data/${url}`)
    const originalArchives = fs.readdirSync(originalPath)

    const originalFiles = originalArchives.filter(e => e.endsWith(".js"))
    const originalFolders = originalArchives.filter(e => !originalFiles.includes(e) && !e.includes("."))

    for (const folder of originalFolders) {
        const newFolderPath = path.join(originalPath, folder)
        const files = fs.readdirSync(newFolderPath).filter(e => e.endsWith(".js"))

        for (const file of files) {
            const newFilePath = path.join(newFolderPath, file)
            const data = require(newFilePath)

            if (Array.isArray(data)) {
                data.map(e => {
                    DATA.push(e)
                })
            }
            else DATA.push(data)
        }
    }

    for (const file of originalFiles) {
        const newFilePath = path.join(originalPath, file)
        const data = require(newFilePath)

        if (Array.isArray(data)) {
            data.map(e => {
                DATA.push(e)
            })
        }
        else DATA.push(data)
    }

    return DATA
}