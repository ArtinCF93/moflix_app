import React, { useState } from 'react';
import axios from 'axios';
import logo from '../files/movipass_logo.png';
import { Link } from 'react-router-dom';
import './registration-view.css';


let RegistrationView = (props) => {

     /**
   * Registration
   1. each input value is set to a state
   2. The handlesubmit function initiates upon a click event, an axios post request is initiated to post the state values to the database to create a new user
   */

    let [name, setName] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [birthday, setBirthday] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://quiet-headland-10477.herokuapp.com/users', {
            Name: name,
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
        })
            .then(response => {
                const data = response.data;
                props.onSignedUp(data); //his method triggers the onLoggedIn method of your “main-view.jsx” file 
                window.open('/', '_self');
            })
            .catch(e => {
                console.log(e)
            });
    };


/**
 * instead of having to write the behavior in the constructor class; a function is created within the onchange
 * essentially the value starts with the current state of 'username' (which is an empty string) and changes to the target value of 'setUsername'
 */
    return (
        <div className='registration-container'>
                <img className='login-image' src={logo} alt="" />
                <form className='login-form'>
                    <div className='login-label'>
                    <label>
                        <input 
                            type="text"
                            value={name}
                            placeholder='Name...'
                            onChange={e => setName(e.target.value)} />
                    </label>
                    </div>
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
                    <div className='login-label'>
                    <label>
                        <input 
                            type="text"
                            value={email}
                            placeholder='Email...'
                            onChange={e => setEmail(e.target.value)} />
                    </label>
                    </div>
                    <div className='login-label'>
                    <label>
                        <input 
                            type="text"
                            value={birthday}
                            placeholder='Birthday...'
                            onChange={e => setBirthday(e.target.value)} />
                    </label>
                    </div>
                    <div className='homeBtns'>
                    <button 
                        type="submit"
                        className='loginBtn'
                        onClick={handleSubmit}>Submit</button>
                    <Link to='/'>  
                              <button className='signupBtn' variant="link">Or login</button>
                    </Link>
                    </div>
                </form>
        </div>
    );
}

export default RegistrationView