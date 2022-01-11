// import React, {useState, useEffect, Component} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login =(props)=>{
        const navigate = useNavigate();
        // }
        // const handleLogoutClick=()=>{
        //     localStorage.clear();
        // }
        const handleSubmit=(e)=>{
            e.preventDefault();
            // e.preventDefault();
            axios.post('http://localhost:5000/users/login', {
                "email": e.target[0].value,
                "password": e.target[1].value
            })
            .then(res=> {
                // console.log(res);
                localStorage.setItem('profile', JSON.stringify(res?.data));
                document.getElementById('login').style.display = 'none';
                document.getElementById('logout').style.visibility = 'visible';
                navigate('/');
            })
            .catch(err=>{
                document.getElementById("invalidCred").innerHTML="Invalid credentials";
                console.log(err);
            })
            // console.log(e.target[1].value);
        }
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label >Email </label>
                    <input type="email" placeholder="enter email"></input><br/>
                    <label >Password </label>
                    <input type="password" placeholder="enter password"></input><br/><br/>
                    <button id="loginBtn" type="submit">Login</button><br />
                    <h3 id="invalidCred" style={{color: 'red'}}></h3>
                </form>
            </div>
        )
}

export default Login;