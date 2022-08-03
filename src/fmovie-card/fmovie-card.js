import React, { useState } from 'react';
import axios from 'axios';
import '../movie-card/movie-card.css'

let IMG_API = 'https://image.tmdb.org/t/p/w500/'

/**
 * FavMovie
 * The movie object array is transferred into this compoennt as paramters
 * 
 * The removeFavMovie() function delete a favorite movie from the favoriteMovies[] in the user object
 * The function takes the id of the movie from the parameter and sending a delete mthod via axios
 * the function is invoked on an onClick event
 */


let FavMovie = ({ id, title, name, poster_path, overview, vote_average, onDelete }) => {


  let removeFavMovie = () => {
    const token = localStorage.getItem('token');
    const Username = localStorage.getItem('user');

    axios.delete(`https://quiet-headland-10477.herokuapp.com/users/${Username}/movies/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        alert(`${title} was deleted from your Favorites`)
        onDelete();
      })
      .catch(function (error) {
        console.log(error);
      })
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
            removeFavMovie
          }>
          - Delete from Favorites
        </button>
      </div>
    </div>
  )
}

export default FavMovie