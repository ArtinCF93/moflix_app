import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../search-view/search-view.css'
import Navbar from '../nav-view/nav-view'
import FavMovie from '../fmovie-card/fmovie-card'


const FavView = () => {

  let [user, setUser] = useState()
  let [movies, setMovies] = useState([]);


  //get user that is logged in
  /**
   * getUser() returns the user that is logged in, saves the users favoriteMovies into the state of 'movies'
   * maps out the FavoriteMovies array to return each movie one by one and save it in a variable
   * the movies variable is mapped out into an array and saved in the setMovies function
   */
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



  /**
   * deleteUser() deletes a user
   * sends a delete request via axios to delete the user
   * identifies the username as a template literal by retrieving the username from localstorage
   * .then() removes the user from localstorage
   * initiates on an onClick event
    */
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
        <div className='movieGrid'>
            {movies.map((movie) =>
              <FavMovie
                key={movie.id}
                {...movie} className='movieCard'
                // filters the deleted movie and returns a new array of the other movies 
                onDelete={() => { setMovies(prev => prev.filter(m => m.id !== movie.id)) }}
              />
            )}
          </div>
          <button className="delButton"
            onClick={
              deleteUser
            }>
            Delete Account
          </button></div>

      </div>
    )
  }
  return <div>Loading...</div>
}

export default FavView