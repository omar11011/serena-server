const response = require("../utils/response")

module.exports = (req, res, next) => {
    const { apiKey } = req.body

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.json(response({
            unauthorized: true,
        }))
    }
    else {
        delete req.body.apiKey
        
        next()
    }
}