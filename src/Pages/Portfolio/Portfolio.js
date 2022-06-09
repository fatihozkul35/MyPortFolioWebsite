import React from 'react'
import "./Portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";


const Portfolio = () => {
  return (
    <div className="home portfolio">
      <Navbar />
      <div className="sub-section">
          <div className="card-project">
            <div className="img-project">
              <a
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </a>
            </div>
            <div className="title-project">React Capstone Project</div>
          </div>
          <div className="card-project">
            <div className="img-project">
              <a
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </a>
            </div>
            <div className="title-project">React Capstone Project</div>
          </div>
          
        </div>
      </div>
  );
}

export default Portfolio