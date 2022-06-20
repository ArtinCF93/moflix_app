import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './nav-view.css'
import logo from '../files/movipass_logo.png';

let Navbar = () => {

  let [navbar, setNavbar ] = useState(false);

  let changeNav = () => {
    if(window.scrollY >= 750) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeNav);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
        <div className='container'>
        <div className='navitems'>
                <img src={logo} alt='logo' className='logo'/>
                <Link to='/home' className='nav-link'>Home</Link>
                <span>My List</span>
                <Link to='/Search' className='nav-link'>Search</Link>
            </div>
            <div className='right'>
              <span className='signoutButton'>Sign Out</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar