const db = require("../db/connection.js")

function getFlavours() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Flavours", (err, rows) => {
      err ? reject(err) : resolve(rows)
    })
  })
}

function getSingleFlavour({ id }) {
  if (!id) throw ('Id required')

  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM Flavours WHERE id = ?", [id], (err, row) => {
      err && reject(err)
      if (row == undefined) { reject({ error: `Flavour with id ${id} not found` }) }

      resolve(row)
    })
  })

}

function addFlavour({ Name }) {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO Flavours (Name) VALUES (?)", [Name], function (err) {
      err && reject(err)
      resolve({ success: true, message: `Flavour added with id ${this.lastID}` })
    })
  })
}

function deleteFlavour(id) {
  if (!id) throw ('Id required')
  console.log(id);
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM Flavours WHERE id = ?", [id], function (err) {
      err && reject(err)
      if (this.changes < 1) { reject({ error: `Could not find flavour with id ${id}` }) }

      resolve({ success: true, message: `Flavour with id ${id} deleted` })
    })
  })
}

module.exports = { getFlavours, getSingleFlavour, addFlavour, deleteFlavour }
