import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav-view/nav-view'
import LandingPage from './landing-view/landing-view'
import MovieView from './movie-view/movie-view';
import SearchView from './search-view/search-view';
import LoginView from './login-view/login-view';
import RegistrationView from './registration-view/registration-view';
import ProfileView from './profile-view/profile-view';



const App = () => {

  let [user, setUser] = useState(null);


  let onLoggedIn = (authData) => {
    console.log(authData);
    setUser(authData.user.Username)
    // The auth information received from the handleSubmit method—the token and the user—is saved in localStorage
    localStorage.setItem('token', authData.token); //localStorage has a setItem method that accepts two arguments: a key and a value.
    localStorage.setItem('user', authData.user.Username);
  }


  let onSignedUp = (authData) => {
    console.log(authData);
    alert('Thank you for Registering! You will now be returned to the Login page to Sign in');
    window.open('/', '_self');
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
              {!user && <LoginView //LoginView is imported to MainView to pass the user details to LoginView
                onLoggedIn={user => onLoggedIn(user)}
              />
              }
              {user && <>
                <LandingPage />
                <MovieView />
              </>
              }
            </>
          }
          />
          <Route path="/registration" element={
            <>
              <RegistrationView
                onSignedUp={user => onSignedUp(user)}
              />
            </>
          } />
          <Route path="/Search" element={
            <SearchView />
          }
          />
          <Route path="/profile" element={
            <ProfileView />
          }
          />
        </Routes>
        {user && <Navbar />}
      </ Router >
    </div>
  )
}

export default App
