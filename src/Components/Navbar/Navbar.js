import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <div className="section menus">
        <Link className="active" to="/">
          <i className="fas fa-home "></i> Home
        </Link>
        <Link to="/about">
          <i className="fas fa-user "></i> About
        </Link>
        <Link to="/portfolio">
          <i className="fas fa-drafting-compass "></i> Portfolio
        </Link>
        <Link to="/contact">
          <i className="fas fa-address-card "></i> Contact
        </Link>
        <br />
        <div className="credit">
          <small>
            Designed by <span className="designer">Fatih Özkul</span>
          </small>
          <br />
          <small>Personal Website © 2022</small>
        </div>
      </div>
    </>
  );
}

export default Navbar