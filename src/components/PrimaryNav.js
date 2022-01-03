import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryNav=()=>{
    return(
        <div className="navbar">
            <ul>
                <li> <Link className="link" to="/login">Login</Link></li>
                <li> <Link className="link" to="/register">Register</Link></li>
            </ul>
        </div>
    )
    
}

export default PrimaryNav;