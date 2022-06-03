import React, { useEffect } from 'react'
import './movie-view.css'
import MovieCard from '../movie-card/movie-card'


const MovieView = (props) => {

let getMovie = async () => {
  let url = 'http://www.omdbapi.com/?s=star wars&apikey=d0023cdd'

  let response = await fetch(url);
  let responseJson = await response.json();

  console.log(responseJson)
};

// this is similar to compnentdidMount
useEffect(() => {
  getMovie()
}, [])

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
              <img src={movie.Poster} alt='movie' className='movieCard'></img>
            </div>
          ))}
            {/* <MovieCard /> */}
        </div>
    </div>
  )
}

export default MovieView