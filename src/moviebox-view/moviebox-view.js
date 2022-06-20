import React from 'react';
import './moviebox-view.css'

let IMG_API = 'https://image.tmdb.org/t/p/w500/'

let MovieBox = ({title, name, poster_path, overview, vote_average}) => {
    return(
        <div className='movie'>
            <img src={IMG_API + poster_path} className='movie-poster' alt='movie-poster'/>
            <div className='movie-overview'>
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

export default MovieBox