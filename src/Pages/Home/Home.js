import React from 'react'
import image from "../../assets/img/LebenslaufFOTO.jpeg";
import Navbar from '../../Components/Navbar/Navbar';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
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