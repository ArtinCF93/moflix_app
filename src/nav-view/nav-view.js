import React, {useState} from 'react'
import './nav-view.css'
import logo from '../files/movipass_logo.png';

let Navbar = () => {

  let [navbar, setNavbar ] = useState(false);

  let changeNav = () => {
    if(window.scrollY >= 40) {
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
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>My List</span>
            </div>
            <div className='right'>
              <span className='signoutButton'>Sign Out</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar