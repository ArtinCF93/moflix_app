import './App.css'
import React, { useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav-view/nav-view'
import LandingPage from './landing-view/landing-view'
import MovieView from './movie-view/movie-view';
import SearchView from './search-view/search-view';

const App = () => {

  let [movies, setMovies] = useState([]);
  let [searchResponse, setSearchResponse] = useState('');


// get all movies
  let searchMovie = async (searchResponse) => {
    let url = `http://www.omdbapi.com/?s=${searchResponse}&apikey=d0023cdd`
  
    let response = await fetch(url);
    let responseJson = await response.json();

    console.log(responseJson);
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }
  
  // this is similar to compnentdidMount
  useEffect(() => {
    searchMovie(searchResponse)
  }, [searchResponse])

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <LandingPage />
            <MovieView 
              movies ={movies}/>
            </>
            } />
          <Route path="/Search" element={
            <SearchView 
              movies ={movies} 
              saerchResponse={searchResponse}
              setSearchResponse={setSearchResponse} 
            />
            }
            // both functions from useState are sent to SearchView componenent sp setSearchRes can be attached to input and can take effect
            />
        </Routes>
      </ Router >
    </div>
  )
}

export default App
