import React from 'react';
import './Navbar.css';
import navProfile from "../../assets/nav-profile.svg"; // Hoặc .svg
import navLogo from "../../assets/nav-logo.svg"; // Hoặc .svg |  nav-logo.svg

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navLogo} alt="Nav Logo" className='nav-logo'/>
            <img src={navProfile} alt="Nav Profile" className='nav-profile'/>
        </div>
    );
}

export default Navbar;
