const sqlite = require('sqlite3')
const db = new sqlite.Database("db/icecream.db")

module.exports = db