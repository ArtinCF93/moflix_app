import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './nav-view.css'
import logo from '../files/movipass_logo.png';
import { GiHamburgerMenu } from "react-icons/gi";

let Navbar = () => {

  /**
   * Navbar
   1. the state 'navbar' is used to initiate a fixed navbar when the user scrolls down at 750px
   2. navbar is set to false to show the default navbar at the top. 
   3. When false, the default navbar is set to class name '.navbar', when true, its set to class name by '.navbar active'
   3. changeNav function is initiated at 750px Y at scroll to implement
   */

   /**
   * Hamburger
   * The Hamburger menu is divided in 2 groups. The button and the actual menu.
   1. the Hamburger button is set to a className of '.hamburger'.
   2. At 600px X, the , '.hamburger' is changed to display flex. And displays an icon from a package library
   3. The actual hamburger menu is controlled by the state hamburger in useState. It is triggered on and off (true or false) by an onClick event.
   4. When false, the hamburger menu is set to className '.nothing'that displays none. When true, its set to '.hamburger active'
   */

  let [navbar, setNavbar] = useState(false);
  let [hamburger, setHamburger] = useState(false);


  let changeNav = () => {
    if (window.scrollY >= 750) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }

  let onLoggedOut = () => {
    localStorage.removeItem('token'); //removing the data from storgae
    localStorage.removeItem('user');
    window.open('/', '_self');
  }

  window.addEventListener('scroll', changeNav);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='navitems'>
          <img src={logo} alt='logo' className='logo' />
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/search' className='nav-link'>Search</Link>
          <Link to='/mylist' className='nav-link'>Profile</Link>
        </div>
        <div className='right'>
          <span
            className='signoutButton'
            variant="link"
            onClick={onLoggedOut}
          >
            Sign Out
          </span>
          <button className='hamburger' onClick={() => setHamburger(!hamburger)}><GiHamburgerMenu /></button>
          <div className={hamburger ? 'hamburger active' : 'nothing'}>
          <Link to='/' className='nav-link2'>Home</Link>
          <Link to='/search' className='nav-link2'>Search</Link>
          <Link to='/mylist' className='nav-link2'>Profile</Link>
          <button
            className='nav-link3'
            variant="link"
            onClick={onLoggedOut}
          >Sign Out</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar