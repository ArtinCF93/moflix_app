import React from 'react'
import './movie-view.css'
import MovieCard from '../movie-card/movie-card'

const MovieView = () => {
  return (
    <div className='list'>
        <p className='listTitle'>List of Movies</p>
        <div className='listWrapper'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    </div>
  )
}

export default MovieView