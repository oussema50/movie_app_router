import React from 'react'
import ReactPlayer from 'react-player'
const MovieTrailer = (props) => {
    const {match,filtredMovies} = props;
    let movieItem = filtredMovies.filter((movie)=>movie.id === +match.params.id)
    
    return (
        <div>
            <ReactPlayer controls url={movieItem[0].trailer} />
            <p>{movieItem[0].description}</p>
        </div>
    )
}

export default MovieTrailer
