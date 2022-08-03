import React, { useState } from 'react';
import axios from 'axios';
import logo from '../files/movipass_logo.png';
import { Link } from 'react-router-dom';
import './login-view.css';


let LoginView = (props) => {

 /**
   * login
   1. each input value is set to a state
   2. The handlesubmit function initiates upon a click event, an axios post request is initiated to post the state values to the database to create a new user
   */

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    


    const handleSubmit = (e) => {
        e.preventDefault(); //preventing the default behavior
        /* Send a request to the server for authentication */
        axios.post('https://quiet-headland-10477.herokuapp.com/login', {
            Username: username, //passing the username and passowrd
            Password: password
        })
            .then(response => {
                const data = response.data;
                props.onLoggedIn(data); //his method triggers the onLoggedIn method of your “main-view.jsx” file 
            })
            .catch(e => {
                console.log('no such user')
            });
    };



    //instead of having to write the behavior in the constructor class; a function is created within the onchange
    //essentially the value starts with the current state of 'username' and changes to the target value of 'setUsername'
    return (
        <div className='login-container'>
                <img className='login-image' src={logo} alt="" />
                <form className='login-form'>
                    <div className='login-label'>
                    <label>
                        <input 
                            type="text"
                            value={username}
                            placeholder='Username...'
                            onChange={e => setUsername(e.target.value)} />
                    </label>
                    </div>
                    <div className='login-label'>
                    <label>
                        <input 
                            type="text"
                            value={password}
                            placeholder='Password...'
                            onChange={e => setPassword(e.target.value)} />
                    </label>
                    </div>
                    <div className='homeBtns'>
                    <button 
                        type="submit"
                        className='loginBtn'
                        onClick={handleSubmit}>Submit</button>
                    <Link to='/registration'>  
                              <button className='signupBtn' variant="link">Or Sign Up</button>
                    </Link>
                    <Link to='/password'>  
                              <button className='forgotBtn' variant="link">Forgot Password</button>
                    </Link>
                    </div>
                </form>
        </div>
    );
}

export default LoginView