import React from 'react'
import "./Portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";

// const projectsOfData = [
//   {
//     link: "/#",
//     img: "https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     title:"Blog App"
//   },
// ];

const Portfolio = () => {
  return (
    <div className="home portfolio">
      <Navbar />
      {/* div wrapper */}
      <div className="sub-section">
        {/* div card */}
          <div className="img-project">
            <img
              src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="here is a pic of any project"
            />
            {/* div info */}
            <div className="project-info">
              <h1 className="title">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.</p>
              <a href="/#" className="btn">Go to Project</a>
            </div>
          </div>
          <div className="img-project">
            <img
              src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="here is a pic of any project"
            />
            {/* div info */}
            <div className="project-info">
              <h1 className="title">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.</p>
              <a href="/#" className="btn">Go to Project</a>
            </div>
          </div>
          <div className="img-project">
            <img
              src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="here is a pic of any project"
            />
            {/* div info */}
            <div className="project-info">
              <h1 className="title">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.</p>
              <a href="/#" className="btn">Go to Project</a>
            </div>
          </div>
          <div className="img-project">
            <img
              src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="here is a pic of any project"
            />
            {/* div info */}
            <div className="project-info">
              <h1 className="title">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.</p>
              <a href="/#" className="btn">Go to Project</a>
            </div>
          </div>
          <div className="img-project">
            <img
              src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="here is a pic of any project"
            />
            {/* div info */}
            <div className="project-info">
              <h1 className="title">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.</p>
              <a href="/#" className="btn">Go to Project</a>
            </div>
          </div>
          <div className="img-project">
            <img
              src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="here is a pic of any project"
            />
            {/* div info */}
            <div className="project-info">
              <h1 className="title">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.</p>
              <a href="/#" className="btn">Go to Project</a>
            </div>
          </div>
          <div className="img-project">
            <img
              src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="here is a pic of any project"
            />
            {/* div info */}
            <div className="project-info">
              <h1 className="title">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.</p>
              <a href="/#" className="btn">Go to Project</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Portfolio