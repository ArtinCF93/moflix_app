import React, { useState } from 'react'
import './search-view.css'
import MovieBox from '../moviebox-view/moviebox-view';


const SearchView = () => {

  let [searchMovies, setSearchMovies] = useState([]);
  let [searchQuery, setSearchQuery] = useState(''); 
  //searchResponse is started as an empty string, which will later be replaced by setSearchResponse when initiated


// search movies (has to be async function)
  let searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      let url=`https://api.themoviedb.org/3/search/multi?api_key=e744ebcd021bf4f636c7f0a3b52ba301&query=${searchQuery}`;
      let res= await fetch(url);
      let data= await res.json();
      console.log(data);
      setSearchMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }
  
  return (
    <div className='searchContainer'>
      <form onSubmit={searchMovie}>
        <input 
          value={searchQuery} //the template literal goes into the url during an api search
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder='Search...'
          className='searchInput'
        />
        <div className='movieGrid'>
        {searchMovies.map((movie, index) => (
            <MovieBox key={movie.id} {...movie}/>
          ))}
        </div>
        </form>
    </div>
  )
}

export default SearchView