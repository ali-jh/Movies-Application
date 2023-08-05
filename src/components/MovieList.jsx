import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent
    return(
        <>
        {props.movies.map((movie , index) => (
            <div className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="movie-Poster" />
                <div
                    className="overlay d-flex align-item-center justify-content-center"
                    onClick={()=> props.handelFavouritesClick(movie) }
                >
                    <FavouriteComponent/>
                </div>
            </div>
        ))}
    </>

    )   
  }
 

export default MovieList ; 