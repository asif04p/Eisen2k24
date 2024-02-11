import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../Assets/website-logo.jpg" // Import the logo image
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="logo">
        <img src={logo} alt="Website Logo" href="/" style={{ width: '50px', height: 'auto' }} />
        </Link>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;