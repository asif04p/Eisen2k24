import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../Assets/website-logo.jpg" // Import the logo image
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Website Logo" href="/" style={{ width: '50px', height: 'auto' }} />
        </Link>
      <div className="nav-links">
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/SpotGames">Spot Games</a>
        <a href="/Sponsors">Sponsors</a>
        <a href="/Events">Events</a>
        <a href="/Contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
