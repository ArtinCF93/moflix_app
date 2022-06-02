import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav-view/nav-view'
import LandingPage from './landing-view/landing-view'
import MovieView from './movie-view/movie-view';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <LandingPage />
            <MovieView />
            <MovieView />
            <MovieView />
            </>
            } />
        </Routes>
      </ Router >
    </div>
  )
}

export default App
