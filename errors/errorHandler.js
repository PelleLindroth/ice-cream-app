const errorHandler = (error, req, res, next) => {
    res.json({ message: "An error occurred!", error: error })
}

module.exports = errorHandler