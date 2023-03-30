const express = require('express')
const moviesRouter = require('./movies/movies.router')

const app = express();
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server Ok'})
})

app.use("/", moviesRouter)

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
})

module.exports = app
