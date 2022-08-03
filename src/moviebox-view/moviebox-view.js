import React from 'react';
import axios from 'axios';
import './moviebox-view.css'

let IMG_API = 'https://image.tmdb.org/t/p/w500/'

let MovieBox = ({id, title, name, poster_path, overview, vote_average}) => {


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

export default MovieBox