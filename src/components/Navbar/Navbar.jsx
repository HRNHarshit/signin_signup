import React from "react";
// CSS
import "./Navbar.css";
// react-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="nav">
        <h1>Logo</h1>
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
