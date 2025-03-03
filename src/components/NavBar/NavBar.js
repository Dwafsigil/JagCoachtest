import React from "react";
import { Link } from "react-router-dom"; // ✅ Use Link for routing
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">JagCoach</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>  
                <li><Link to="/upload">Upload</Link></li>  
                <li><Link to="/feedback">Feedback</Link></li>  
                <li><Link to="/resources">Resources</Link></li>  
            </ul>
        </nav>
    );
}

export default NavBar;
