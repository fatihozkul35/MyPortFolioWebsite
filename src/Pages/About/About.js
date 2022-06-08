import React from 'react'
import "./About.css";
import { Link } from 'react-router-dom';
import img from "../../assets/img/exampleFoto.jpeg";
import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  return (
    <div className="home about">
      <Navbar/>
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