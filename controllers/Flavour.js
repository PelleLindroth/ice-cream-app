
const flavourModel = require('../models/Flavour.js')

async function getFlavours(req, res, next) {
  try {

    const results = await flavourModel.getFlavours()
    res.json(results)
  } catch (err) {
    next(err)
  }
}


async function getSingleFlavour(req, res, next) {
  try {
    const results = await flavourModel.getSingleFlavour(req.params)
    res.json(results)
  } catch (err) {
    next(err)
  }
}

async function addFlavour(req, res, next) {
  try {
    const results = await flavourModel.addFlavour(req.body)
    res.json(results)
  } catch (err) {
    next(err)
  }
}

async function deleteFlavour(req, res, next) {
  try { res.json(await flavourModel.deleteFlavour(req.params.id)) }
  catch (err) { next(err) }
}

module.exports = { getFlavours, getSingleFlavour, addFlavour, deleteFlavour }
