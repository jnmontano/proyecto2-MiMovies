const moviesDB = [
    {
        "id": 1,
        "title": "Pacific Rim",
        "description": "Lorem Ipsum",
        "year": 2012,
        "director": "Guillermo del Toro"
    }
]

let movieId = 2

const findAllMovies = async() => {
    return moviesDB
}

const findMoviesById = async(id) => {
    const movie = moviesDB.find(movieItem => movieItem.id ===id)
    return movie
}

const createMovie = async(movieObj) => {
    const newMovie = {
        id : movieId++,
        title: movieObj.title || 'Titulo Desconocido',
        description: movieObj.description || 'Uknow',
        year: movieObj.year || null,
        director: movieObj.director || null
    }
    moviesDB.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMoviesById,
    createMovie
}