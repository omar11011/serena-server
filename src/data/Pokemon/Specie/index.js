module.exports = [
    ...require("./kanto"),
    ...require("./johto"),
].map((e, i) => {
    e.id = i + 1
    return e
})