import React from 'react'
import "./About.css";
import { Link } from 'react-router-dom';
import img from "../../assets/img/exampleFoto.jpeg";


const About = () => {
  return (
    <div className="home about">
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
      <div className="about-container">
        <div className="container-top">
          <div className="container-top-img">
            <img className="about-image" src={img} alt="pictureOffatihozkul" />
          </div>
          <div className="about-me">
            <div className="title">
              <p>Name: </p>
              <p>Birthdate: </p>
              <p>Email: </p>
              <p>District: </p>
              <p>Hobby: </p> <br />
            </div>
            <div className="title-value">
              <p className="value">FATIH ÖZKUL </p>
              <p className="value">03 FEBRUARY 1993</p>
              <p className="value">fatihozkul3541@gmail.com</p>
              <p className="value">Möhnesee </p>
              <p className="value">WEB DEVELOPMENT & TRAVELLING</p>
            </div>
          </div>
        </div>
        <div className="container-bottom">
          <div className="details">
            <h2 className="about-title">
              About <span className="name">FATIH </span>
            </h2>
            <p>
              <span>Dreamer</span> | <span>Learner</span> |
              <span>Adventurer</span>
            </p>
            <hr />
            <p>
              Hello! welcome to my Website. I'm a Frontend Web Developer. I've
              skills in HTML5, CSS3, SASS/SCSS, Bootstrap5, Javascript,
              React.js, Redux, Next.js, TypeScript,Material UI, Styled
              Components, Git&GitHub, Firebase, Python, Django, Restframework,
              RestAPI and i keep learning...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About