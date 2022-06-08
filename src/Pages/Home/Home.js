import React from 'react'
import { Link } from 'react-router-dom';
import image from "../../assets/img/LebenslaufFOTO.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
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
      <div className="section right">
        <div className="image">
          <img src={image} alt="user" />
        </div>
        <div className="details">
          <h1>FATIH ÖZKUL</h1>
          <p>Hello! I'm a Frontend Web Developer...</p>
          <div className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/fatih-ozkul35/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/fatihozkul35?tab=stars"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home