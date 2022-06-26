import React, {useState, props} from 'react'
import { Link } from 'react-router-dom';
import './nav-view.css'
import logo from '../files/movipass_logo.png';

let Navbar = () => {

  let [navbar, setNavbar ] = useState(false);
  let [user, setUser] = useState('')

  let changeNav = () => {
    if(window.scrollY >= 750) {
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
                <img src={logo} alt='logo' className='logo'/>
                <Link to='/' className='nav-link'>Home</Link>
                <span>My List</span>
                <Link to='/Search' className='nav-link'>Search</Link>
                <Link to='/profile' className='nav-link'>Profile</Link>
            </div>
            <div className='right'>
              <span
                className='signoutButton' 
                variant="link"
                onClick={onLoggedOut}
                >
                  Sign Out
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar