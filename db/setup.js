// const sqlite3 = require("sqlite3")
// const path = require('path')
// const dbPath = path.resolve(__dirname, '')
// const db = new sqlite3.Database(dbPath)
const db = require("./connection.js")

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS Flavours")
  db.run("DROP TABLE IF EXISTS Mix")
  db.run("DROP TABLE IF EXISTS Users")
  db.run("DROP TABLE IF EXISTS Mixes")
  db.run(
    `CREATE TABLE "Flavours" ( "id" INTEGER NOT NULL UNIQUE, "Name" TEXT NOT NULL, PRIMARY KEY("id" AUTOINCREMENT) )`
  )
  db.run(
    `CREATE TABLE "Mix" ( "mix_id" INTEGER NOT NULL UNIQUE, "name" TEXT NOT NULL, "flavour_1" INTEGER NOT NULL, "flavour_2" INTEGER NOT NULL, "flavour_3" INTEGER, "flavour_4" INTEGER, FOREIGN KEY("flavour_3") REFERENCES "Flavours"("id"), FOREIGN KEY("flavour_4") REFERENCES "Flavours"("id"), FOREIGN KEY("flavour_2") REFERENCES "Flavours"("id"), PRIMARY KEY("mix_id" AUTOINCREMENT), FOREIGN KEY("flavour_1") REFERENCES "Flavours"("id") )`
  )
  db.run(
    `CREATE TABLE "Mixes" ( "mix_id" INTEGER NOT NULL, FOREIGN KEY("mix_id") REFERENCES "Mix"("mix_id") )`
  )
  db.run(
    `CREATE TABLE "Users" ( "email" TEXT NOT NULL UNIQUE, "mix_id" INTEGER NOT NULL, PRIMARY KEY("email"), FOREIGN KEY("mix_id") REFERENCES "Mix"("mix_id") )`
  )
  db.get("PRAGMA foreign_keys = ON")
})

module.exports = db
