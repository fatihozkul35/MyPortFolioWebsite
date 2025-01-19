import React from 'react'
import "./About.css";
import img from "../../assets/img/exampleFoto.jpeg";
import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  const dataOfSkills = ["HTML5", "CSS3", "SASS/SCSS", "Bootstrap5", "Javascript", 
              "React.js", "Redux"," Next.js", "TypeScript","Material UI", "Styled Components", "Git&GitHub&GitLap", "Firebase", "Python", "Django", "Restframework",
              "RestAPI"] 
  return (
    <div className="home about">
      <Navbar />
      <div className="about-container">
        <div className="container-top">
          <div className="container-top-img">
            <img className="about-image" src={img} alt="pictureOffatihozkul" />
          </div>
          <div className="about-me">
            <div className="title-value">
              <p className="value">FATIH ÖZKUL </p>
              <p className="value">FEBRUARY 1993</p>
              <p className="value">Körbecke </p>
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
              Hello! Welcome to my Website. I'm a Frontend Web Developer. I've
              skills in{" "}
              {dataOfSkills.map((skill) => (
                <span className="skills">{skill}, </span>
              ))}
              and i keep learning...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About