require("dotenv").config()
const express = require("express")
const logger = require("./middleware/Logger.js")
const errorHandler = require("./errors/errorHandler.js")
const flavourRoutes = require("./routes/Flavours.js")

const app = express()
const PORT = process.env.PORT || 5000


app.use(express.json())
app.use(logger)
app.use(flavourRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log("Running on port " + PORT))
