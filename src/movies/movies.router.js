const router =require('express').Router()

const movieServices = require('./movies.services')

router.get('/movies', movieServices.getAllMovies)
router.post('/movies', movieServices.addNewMovie)

router.get('/movies/:id', movieServices.getMovieById)
router.delete('/movies/:id', movieServices.getMovieById)
router.put('/movies/:id', movieServices.getMovieById)

module.exports = router