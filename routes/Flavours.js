const express = require('express')
const router = express.Router()
const flavourController = require('../controllers/Flavour.js')


router.get('/flavours',flavourController.getFlavours)

module.exports = router 