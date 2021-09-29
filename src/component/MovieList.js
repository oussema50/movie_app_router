import React from 'react'
import MovieCard from './MovieCard';
const MovieList = (props) => {
    return (
        <div>
            <MovieCard movies = {props.movies} />
           
        </div>
    )
}

export default MovieList
