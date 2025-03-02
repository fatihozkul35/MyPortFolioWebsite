import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={`menus ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-user"></i> About
        </Link>
        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-drafting-compass"></i> Portfolio
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-address-card"></i> Contact
        </Link>
        <div className="credit">
          <small>
            Designed by <span className="designer">Fatih Özkul</span>
          </small>
          <br />
          <small>Personal Website © 2022</small>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
