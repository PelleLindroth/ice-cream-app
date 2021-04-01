const db = require("../db/connection.js")

function getFlavours() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Flavours", (err, rows) => {
      err ? reject(err) : resolve(rows)
    })
  })
}

module.exports = { getFlavours }
