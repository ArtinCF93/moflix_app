import React, { useState, useEffect } from 'react'
import MovieCard from '../movie-card/movie-card'
import './movie-view.css'



const MovieView = () => {

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


  useEffect(() => {
    getMovies();
    getMovies4();
    getMovies3();
    getTVshows();
    getTVshows2();
  }, []);


  return (
    <div className='list'>
      <p className='listTitle'>Popular Movies</p>
      <div className='listWrapper'>
        {movies.map((movie) => 
          <MovieCard 
            key={movie.id}
            {...movie}
            className='movieCard'/>)}
      </div>
      <p className='listTitle'>Latest Movies</p>
      <div className='listWrapper'>
        {movies3.map((movie) => <MovieCard key={movie.id} {...movie} className='movieCard' />)}
      </div>
      <p className='listTitle'>The Classics</p>
      <div className='listWrapper'>
        {movies4.map((movie) => <MovieCard key={movie.id} {...movie} className='movieCard' />)}
      </div>
      <p className='listTitle'>Popular TV shows</p>
      <div className='listWrapper'>
        {tvShow.map((tv) => <MovieCard key={tv.id} {...tv} className='movieCard' />)}
      </div>
      <p className='listTitle'>TV Shows Airing Today</p>
      <div className='listWrapper'>
        {tvShow2.map((tv) => <MovieCard key={tv.id} {...tv} className='movieCard' />)}
      </div>
    </div>
  )
}

export default MovieView