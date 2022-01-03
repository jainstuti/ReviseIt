
import React from "react";
import {Link} from 'react-router-dom';

const NavBar=()=>{
  return(
    <div className="navbar">
      <ul>
        <li> <Link className="link" to="/">All</Link></li>
        <li> <Link className="link" to="/Done">Done</Link></li>
        <li> <Link className="link" to="/Incomplete">Incomplete</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;