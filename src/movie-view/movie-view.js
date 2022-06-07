import React from 'react'
import './movie-view.css'


const MovieView = (props) => {

  return (
    <div className='list'>
        <p className='listTitle'>List of Movies</p>
        <div className='listWrapper'>
          {/* 
          props imports the 'movie' object 
          use map function to loop through array to display each index.   
          */}
          {props.movies.map((movie, index) => (
            <div>
              <img src={movie.Poster} alt='movie' className='movieCard2'></img>
            </div>
          ))}
            {/* <MovieCard /> */}
        </div>
    </div>
  )
}

export default MovieView