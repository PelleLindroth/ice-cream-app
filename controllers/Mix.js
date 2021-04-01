const mixModel = require('../models/Mix')

const addMix = async (req, res, next) => {
  try { res.send(await mixModel.addMix(req.body)) }
  catch (err) { next(err) }
}

module.exports = {
  addMix
}