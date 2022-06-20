import React, { useState } from 'react';
import axios from 'axios';
import logo from '../files/movipass_logo.png';
import { Link } from 'react-router-dom';
import './login-view.css';


let LoginView = (props) => {
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
            <div className='login-content'>
                <img className='login-image' src={logo} alt="" />
                <div className='login-header'><h1>Login</h1></div>
                <form className='login-form'>
                    <div className='userName'>
                    <label>
                        Username:
                        <br />
                        <input type="text" value={username}
                            onChange={e => setUsername(e.target.value)} />
                    </label>
                    </div>
                    <div className='userName'>
                    <label>
                        Password:
                        <br />
                        <input type="text" value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </label>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    <Link to='/register'>  
                              <button className='toBtn' variant="link">Or Sign Up</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginView