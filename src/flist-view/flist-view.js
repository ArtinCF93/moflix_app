import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../search-view/search-view.css'
import Navbar from '../nav-view/nav-view'
import FavMovie from '../fmovie-card/fmovie-card'

let IMG_API = 'https://image.tmdb.org/t/p/w500/'

const FavView = () => {

  let [user, setUser] = useState()
  let [movies, setMovies] = useState([]);


  //get user that is logged in
  let getUser = async (token) => {
    try {
      const response = await axios.get('https://quiet-headland-10477.herokuapp.com/users', {
        headers: { Authorization: `Bearer ${token}` }
      })
      let user = localStorage.getItem('user')
      let data = response.data.find(u => u.Username === user);
      setUser(data)
      console.log(data.FavoriteMovies)
      let movies = await Promise.all(data.FavoriteMovies.map(movieId => axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e744ebcd021bf4f636c7f0a3b52ba301`)));
      setMovies(movies.map(m => m.data));
    }
    catch (e) {
      console.log('e', e);
    }
  }


  let removeFavMovie = () => {
    const token = localStorage.getItem('token');
    const Username = localStorage.getItem('user');

    axios.delete(`https://quiet-headland-10477.herokuapp.com/users/${Username}/movies/${movies.id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        alert(`${movies.title} was deleted from your Favorites`)
        // window.location.reload();   
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  //delete user 
  let deleteUser = (e) => {
    e.preventDefault();

    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios.delete(`https://quiet-headland-10477.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log(`${username} was deleted`);
        alert("your profile is successfully deleted");
        window.open("/", "_self"); // Are is it better to use redirection this.componentDidmount here?
      })
      .catch((e) => {
        console.log("Error deleting User profile");
      });
  };




  useEffect(() => {
    getUser();
  }, [])


  if (user) {
    return (
      <div>
        <Navbar />
        <div className='searchContainer'>
          {movies.map((movie) => <FavMovie key={movie.id} {...movie} className='movieCard' />)}
          <button variant='danger' className="fav-button"
            onClick={
              removeFavMovie
            }>
            - Delete from Favorites
          </button>
        </div>
        <button variant='danger' className="fav-button"
          onClick={
            deleteUser
          }>
          Delete Account
        </button>
      </div>
    )
  }
  return <div>Loading...</div>
}

export default FavView