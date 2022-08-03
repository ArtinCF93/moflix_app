import React, { useState } from 'react'
import './search-view.css'
import MovieBox from '../moviebox-view/moviebox-view';


const SearchView = () => {

  //searchMovies is started as an empty array, which will later be replaced by movie data(setSearcHMovies)
  let [searchMovies, setSearchMovies] = useState([]);
  let [searchQuery, setSearchQuery] = useState(''); 
  //searchQuery is representing the value of the input, which starts as an empty string


/*
Search movies (has to be async function) witha  try and catch. 
Its a multi step process in which it needs to orderly execute
  1. The user changes the value of the template literal(searchQuery) by typing in the input; which then the link is saved in a variable 
  2. The url is 'fetched' the data is saved in a variable
  3. The saved data is converted into JSON and saved in a variable
  4. the results are saved intp the searchMovies array by the sertSearchMovies function
*/ 
  let searchMovie = async(e)=>{ //searchMovie is execued on form submit 'or pushing enter'
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
        {searchMovies.map((movie, index) => ( //this maps out movie data 1 by 1 in the format constructed in MovieBox
            <MovieBox key={movie.id} {...movie}/>
          ))}
        </div>
        </form>
    </div>
  )
}

export default SearchView