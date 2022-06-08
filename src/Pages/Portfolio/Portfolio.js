import React from 'react'
import { Link } from 'react-router-dom';
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="home portfolio">
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
      <div className="section">
        <div className="sub-section">
          <div className="item-container">
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </div>
          <div className="item-container">
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </div>
          <div className="item-container">
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </a>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default Portfolio