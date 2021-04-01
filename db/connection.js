const sqlite = require('sqlite3')
const db = new sqlite.Database("database/icecream.db")

module.exports = db