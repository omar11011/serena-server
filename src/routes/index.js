const controller = require('../controllers')

// Middlewares
const isAuthorized = require("../middlewares/isAuthorized")

const { Router } = require('express')
const router = Router()

// User
// router.post("/user", isAuthorized, async (req, res) => await controller.user.createUser(req, res))

module.exports = router