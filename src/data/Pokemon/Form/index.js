module.exports = [
    ...require("./kanto"),
].map((e, i) => {
    e.id = i + 1
    return e
})