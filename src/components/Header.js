import React from "react";
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <ul>
        <li>
          <Link to="/"><FiHome /></Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;