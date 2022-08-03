import React, {useState} from 'react';
import axios from 'axios';
import './movie-card.css'

let IMG_API = 'https://image.tmdb.org/t/p/w500/'

/**
 * MovieCard
 * The movie object array is transferred into this compoennt as paramters
 * 
 * The addFavMovie() function adds a favorite movie to the favoriteMovies[] in the user object
 * The function takes the id of the movie from the parameter and sending a post mthod via axios
 * the function is invoked on an onClick event
 */

let MovieCard = ({ id, title, name, poster_path, overview, vote_average }) => {

    let addFavMovie = () => {
        const Username = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        axios({
          method: 'post',
          url: `https://quiet-headland-10477.herokuapp.com/users/${Username}/movies/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(() => {
            alert(`${title} was added to your Favorites`);
          })
          .catch(function (err) {
            console.log(err);
          });
      }


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
                <button variant='danger' className="fav-button" value={id} 
                    onClick={
                        addFavMovie
                    }>
                        + Add to Favorites
                </button>
            </div>
        </div>
    )
}

export default MovieCard