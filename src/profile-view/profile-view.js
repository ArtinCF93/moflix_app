import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './profile-view.css'


const ProfileView = () => {

    let [user, setUser] = useState([])
    let [name, setName] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [birthday, setBirthday] = useState('');


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


    let profileUpdate = (e) => {
        e.preventDefault();
        const username = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        axios
          .put(`https://quiet-headland-10477.herokuapp.com/users/${username}`,
            {
              Username: this.state.Username,
              Password: this.state.Password,
              Email: this.state.Email,
              Birthday: this.state.Birthday,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            })
          .then((response) => {
            alert('your changes are saved!');
            this.setState({
              Username: response.data.Username,
              Password: response.data.Password,
              Email: response.data.Email,
              Birthday: response.data.Birthday,
            });
            localStorage.setItem('user', response.data.Username);
            window.open(`/users/${response.data.Username}`, '_self');
          })
          .catch(function (error) {
            console.log(error);
          });
      }


    let deleteUser = (e) => {
        e.preventDefault();
    
        const username = localStorage.getItem("user");
        const token = localStorage.getItem("token");
    
        axios.delete(`https://quiet-headland-10477.herokuapp.com/users/${username}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            console.log(`${username} was deleted`);
            alert("your profile is successfully deleted");
            window.open("/", "_self"); // Are is it better to use redirection this.componentDidmount here?
          })
          .catch((e) => {
            console.log("Error deleting User profile");
          });
      };




    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            <p className='profile'>profile-view</p>
        </div>
    )
}

export default ProfileView