
const flavourModel = require('../models/Flavour.js')

async function getFlavours(req, res, next) {
  try {

    const results = await flavourModel.getFlavours()
    res.json(results)
  } catch (err) {
    next(err)
  }
}

module.exports = { getFlavours }
