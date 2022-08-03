import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav-view/nav-view'
import LandingPage from './landing-view/landing-view'
import MovieView from './movie-view/movie-view';
import SearchView from './search-view/search-view';
import LoginView from './login-view/login-view';
import RegistrationView from './registration-view/registration-view';
import ProfileView from './password-view/password-view';
import FavView from './flist-view/flist-view';


const App = () => {

  let [user, setUser] = useState(localStorage.getItem('user'));
console.log('user', user)

//login method
  let onLoggedIn = (authData) => {
    console.log(authData);
    setUser(authData.user.Username)
    // The auth information received from the handleSubmit method—the token and the user—is saved in localStorage
    localStorage.setItem('token', authData.token); //localStorage has a setItem method that accepts two arguments: a key and a value.
    localStorage.setItem('user', authData.user.Username);
  }


  //registration method
  let onSignedUp = (authData) => {
    console.log(authData);
    alert('Thank you for Registering! You will now be returned to the Login page to Sign in');
    window.open('/', '_self');
    setUser(authData.user.Username)//this is to change the user state from null to the user username
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
            {/* if no user, show the login screen */}
              {!user && <LoginView //LoginView is imported to MainView to pass the user details to LoginView
                onLoggedIn={user => onLoggedIn(user)}
              />
              }
              {/* if there is a user, show the main landing page */}
              {user && <>
                <LandingPage />
                <MovieView />
              </>
              }
            </>
          }
          />
          <Route path="/password" element={
            <>
            { !user && <ProfileView /> }
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
          <Route path="/search" element={
            <SearchView />
          }
          />
          <Route path="/mylist" element={
            <FavView />
          }
          />
        </Routes>
        {user && <Navbar />}
      </ Router >
    </div>
  )
}

export default App
