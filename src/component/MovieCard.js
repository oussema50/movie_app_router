import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { NavLink } from 'react-router-dom';
const MovieCard = (props) => {
    let {movies} = props;
    return (
        <div className="movie-cart">
            {movies.map((movie)=>{
                return(
                    <NavLink to={`/${movie.id}`} style={{marginRight:"20px",marginBottom:"20px",textAlign:"center",textDecoration:'none',color:'#333'}} key={movie.id}>
                        <img style={{width:"200px",height:"300px"}} src={movie.imgMovie} alt={movie.name} />
                        <h4 style={{marginTop:"5px",fontSize:"25px"}}>{movie.name}</h4>
                        <StarRatingComponent name={`rate${movie.id}`} value={movie.rate}/>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default MovieCard
