import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav-view/nav-view'
import LandingPage from './landing-view/landing-view'
import MovieView from './movie-view/movie-view';
import SearchView from './search-view/search-view';
import LoginView from './login-view/login-view';


const App = () => {

  let [user, setUser] = useState('');

 let onLoggedIn = (authData) => {
    console.log(authData);
    setUser(authData.user.Username)
    // The auth information received from the handleSubmit method—the token and the user—is saved in localStorage
    localStorage.setItem('token', authData.token); //localStorage has a setItem method that accepts two arguments: a key and a value.
    localStorage.setItem('user', authData.user.Username);
}

  return (
    <div className='app'>
      <Router>
        <Routes>
        <Route path="/" element={
            <>
            <LoginView 
              onLoggedIn={user => onLoggedIn(user)}
            />
            </>
            } />
          <Route path="/home" element={
            <>
            <LandingPage />
            <MovieView />
            </>
            } />
          <Route path="/Search" element={
            <SearchView />
            }
            />
        </Routes>
        <Navbar />
      </ Router >
    </div>
  )
}

export default App
