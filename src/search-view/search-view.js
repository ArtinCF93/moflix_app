import React from 'react';
import './search-view.css'


const SearchView = (props) => {

  return (
    <div className='searchContainer'>
        <input 
          value={props.value}
          onChange={(event) => props.setSearchResponse(event.target.value)}
          placeholder='Search...'
        />
        <hr className='divider'/>
        {props.movies.map((movie, index) => (
            <div>
              <img src={movie.Poster} alt='movie' className='movieCard'></img>
            </div>
          ))}
    </div>
  )
}

export default SearchView