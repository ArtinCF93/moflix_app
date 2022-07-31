import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './nav-view.css'
import logo from '../files/movipass_logo.png';
import { GiHamburgerMenu } from "react-icons/gi";

let Navbar = () => {

  let [navbar, setNavbar] = useState(false);
  let [hamburger, setHamburger] = useState(false);
  let [user, setUser] = useState('')

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
    setUser(null)
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