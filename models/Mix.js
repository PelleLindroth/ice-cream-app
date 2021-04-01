const db = require("../db/connection.js")

const addMix = ({ name, ...flavours }) => {
  flavours = Object.values(flavours)
  const params = [name, ...flavours]

  console.log(params)
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Mix (name, flavour_1, flavour_2, flavour_3, flavour_4)
    VALUES (?, ?, ?, ?, ?)`, [params], function (err) {
      if (err) reject(err)

      resolve({ success: true, message: `New mix added with id ${this.lastID}` })
    })
  })
}

module.exports = {
  addMix
}