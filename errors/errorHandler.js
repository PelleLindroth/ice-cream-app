const errorHandler = (error, req, res, next) => {
    res.json({message: "An error occurred!", error: error.message})
}

module.exports = errorHandler