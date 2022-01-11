import React, {Component} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register =(props)=>{
    const navigate = useNavigate();
        const handleSubmit=(e)=>{
            e.preventDefault();
            axios.post('http://localhost:5000/users/register', {
                "email": e.target[1].value,
                "password": e.target[2].value,
                "name": e.target[0].value
            })
            .then(res=> {
                console.log(res);
                localStorage.setItem('profile', JSON.stringify(res?.data));
                navigate('/');
                // return { ...res.data.result, loading: false, errors: null };
            })
            .catch(err=>{
                console.log(err);
            })
            // console.log(e.target[1].value);
        }
        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={handleSubmit} >
                    <label >Name </label>
                    <input type="text" placeholder="enter name"></input><br/>
                    <label >Email </label>
                    <input type="email" placeholder="enter email"></input><br/>
                    <label >Password </label>
                    <input type="password" placeholder="enter password"></input><br/><br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
}

export default Register;