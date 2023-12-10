import React from "react";
import { Link } from 'react-router-dom';
import './/Navbar.css'; // Import the specific CSS file for the navbar

const Navbar = () => {
    return (
        <nav className="sticky">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;