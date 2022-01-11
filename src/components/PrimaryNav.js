import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PrimaryNav extends Component{
    state={
        isLoggedIn: localStorage.getItem('profile')
    }
    componentDidMount(){
        if (localStorage.getItem('profile')) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('logout').style.visibility = 'visible';
        }
        else{
            document.getElementById('login').style.display = 'inline-block';
            document.getElementById('logout').style.visibility = 'hidden';
        }
    }
    
    render(){

        const handleClick=(e)=>{
            localStorage.clear();
            this.state={isLoggedIn: false}
            document.getElementById('login').style.display = 'inline-block';
            document.getElementById('logout').style.visibility = 'hidden';
        }
   
    return(
        <div className="navbar">
            <ul>
                <li id="logout" > <Link className="link" onClick={handleClick} to="/login">Logout</Link></li>
                <li id="login" > <Link className="link"to="/login">Login</Link></li>
                <li> <Link className="link" to="/register">Register</Link></li>
            </ul>
        </div>
    )
}
    
}

export default PrimaryNav;