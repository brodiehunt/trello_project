import React from 'react';
import './Navbar.css'
import {FaHome, FaBell, FaUser} from 'react-icons/fa'
const Navbar = () => {

  return (
    <nav className="navbar-container">
      <div className="home-container">
        <FaHome className="nav-icon" /> 
      </div>
      <div className="logo-container">
        <h1 className="nav-heading">Trello Project</h1>
      </div>
      <div className="right-nav-container">
        <div className="profile-container">
          <FaUser className="nav-icon"/>
        </div>
        <div className="notifications-container">
          <FaBell className="nav-icon"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;