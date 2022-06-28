import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../files/movipass_logo.png';
import { Link } from 'react-router-dom';
import './password-view.css'


const ProfileView = () => {

  let [user, setUser] = useState([])
  let [password, setPassword] = useState('');
  let [password2, setPassword2] = useState('');


  let getUser = (token) => {
    axios.get('https://quiet-headland-10477.herokuapp.com/users', {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            let user = localStorage.getItem('user')
            let data = response.data.find(u => u.Username === user);
            setUser(data)
            console.log(data)
        })
        .catch(function (error) {
            console.log(error);
        });
}


  let passwordUpdate = (e) => {
    if (password === password2) {
      e.preventDefault();
      const username = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      axios
        .put(`https://quiet-headland-10477.herokuapp.com/users/${username}`,
          {
            Username: user.Username,
            Password: password,
            Email: user.Email,
            Birthday: user.Birthday
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          })
        .then((response) => {
          alert('your changes are saved!');
          let data = response.data;
          setPassword(data.Password);
          localStorage.setItem('user', response.data.Username);
          window.open(`/`, '_self');
          console.log(user)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      alert('Passwords do not Match')
    }
  }


  useEffect(() => {
    getUser()
}, [])


  return (
    <div className='login-container'>
      <img className='login-image' src={logo} alt="" />
      <div className='password-form'>
        <div className='password-label'>
          <label>
            <input
              type="text"
              value={password}
              placeholder='Password...'
              onChange={e => setPassword(e.target.value)} />
          </label>
        </div>
        <div className='password-label'>
          <label>
            <input
              type="text"
              value={password2}
              placeholder='Repeat Password...'
              onChange={e => setPassword2(e.target.value)} />
          </label>
        </div>
        <button
          type="submit"
          className='passwordBtn'
          onClick={passwordUpdate}>Submit</button>
      </div>
      <div className='homePassBtns'>
        <Link to='/'>
          <button className='signupBtn' variant="link">Back to Login</button>
        </Link>
        <Link to='/registration'>
          <button className='signupBtn' variant="link">Or Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default ProfileView