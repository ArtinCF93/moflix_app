import React from 'react'
import './movie-card.css'

let IMG_API = 'https://image.tmdb.org/t/p/w500/'

let MovieCard = ({ title, name, poster_path, overview, vote_average }) => {

    return (
        <div className='movie1'>
            <img src={IMG_API + poster_path} className='movie-poster' alt='movie-poster' />
            <div className='movie-overview1'>
                <div className='movie-info'>
                    <h2>{title}</h2>
                    <h2>{name}</h2>
                    <h4>{vote_average}</h4>
                </div>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieCard