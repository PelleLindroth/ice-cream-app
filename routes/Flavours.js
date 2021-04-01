const express = require('express')
const router = express.Router()
const flavourController = require('../controllers/Flavour.js')
const mixController = require('../controllers/Mix')

router.get('/flavours', flavourController.getFlavours)
router.get('/flavours/:id', flavourController.getSingleFlavour)
router.post('/flavours', flavourController.addFlavour)
router.delete('/flavours/:id', flavourController.deleteFlavour)

router.post('/mix', mixController.addMix)

module.exports = router