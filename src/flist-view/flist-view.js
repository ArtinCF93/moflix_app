import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './search-view.css'


let IMG_API = 'https://image.tmdb.org/t/p/w500/'

const FavView = () => {

  let [user, setUser] = useState([])
  let [movies, setMovies] = useState([]);
  let [movies4, setMovies4] = useState([]);
  let [movies3, setMovies3] = useState([]);
  let [tvShow, setTVShow] = useState([]);
  let [tvShow2, setTVShow2] = useState([]);


  //get all movies
  let getMovies = async () => {
    let Popular_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=e744ebcd021bf4f636c7f0a3b52ba301'
    fetch(Popular_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results)
      })
  }

  let getMovies3 = async () => {
    let Latest_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=e744ebcd021bf4f636c7f0a3b52ba301'
    fetch(Latest_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies3(data.results)
      })
  }

  let getMovies4 = async () => {
    let Latest_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e744ebcd021bf4f636c7f0a3b52ba301'
    fetch(Latest_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies4(data.results)
      })
  }

  let  getTVshows = async () => {
    let Latest_URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=e744ebcd021bf4f636c7f0a3b52ba301'
    fetch(Latest_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setTVShow(data.results)
      })
  }

  let  getTVshows2 = async () => {
    let Latest_URL = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=e744ebcd021bf4f636c7f0a3b52ba301'
    fetch(Latest_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setTVShow2(data.results)
      })
  }


  let getUser = (token) => {
    axios.get('https://quiet-headland-10477.herokuapp.com/users', {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            let user = localStorage.getItem('user')
            let data = response.data.find(u => u.Username === user);
            setUser(data)
            console.log(data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

useEffect(() => {
    getUser();
    getMovies();
    getMovies4();
    getMovies3();
    getTVshows();
    getTVshows2();
}, [])
  

  return (
    <div className='searchContainer'>
      {user.FavoriteMovies.length > 0 &&
                    movies.map((movie) => {
                      if (movie.id === user.FavoriteMovies.find((fav) => fav === movie.id)) {
                        return (
                            <div className='movie1'>
                            <img src={IMG_API + movie.poster_path} className='movie-poster' alt='movie-poster' />
                            <div className='movie-overview1'>
                                <div className='movie-info'>
                                    <h2>{movie.title}</h2>
                                    <h4>{movie.vote_average}</h4>
                                </div>
                                <p>{movie.overview}</p>
                                {/* <button variant='danger' className="fav-button" value={id} 
                                    onClick={
                                        addFavMovie
                                    }>
                                         Add to Favorites
                                </button> */}
                            </div>
                        </div>
                        )}
                    })
                  }
    </div>
  )
}

export default FavView