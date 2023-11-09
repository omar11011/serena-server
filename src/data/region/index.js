module.exports = [
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Teselia",
    "Kalos",
    "Alola",
    "Galar",
    "Hisui",
    "Paldea",
].map((e, i) => {
    return {
        id: i + 1,
        key: e.toLowerCase(),
        name: e,
    }
})