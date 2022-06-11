import React from 'react'
import "./Portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";

const projectsOfData = [
  {
    link: "https://reactcapstoneproject.netlify.app/",
    img: "/static/images/react-capstone.png",
    title: "To Do App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
  {
    link: "https://reacttodocreatinbyadamsandler.netlify.app/",
    img: "/static/images/ToDoAPP-react.png",
    title: "To Do App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
  {
    link: "https://javascript-restaurant-menu.netlify.app/",
    img: "/static/images/JavaScript-Restaurant-Menü.png",
    title: "Restaurant Menü App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
  {
    link: "https://recipe-app-api-axios.netlify.app/",
    img: "/static/images/recipe-app-API.png",
    title: "To Do App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
  {
    link: "https://008calculator.netlify.app/",
    img: "/static/images/JavaScriptCalculator.png",
    title: "Calculator App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },

  {
    link: "https://oclockproject.netlify.app/",
    img: "/static/images/react-Oclock.png",
    title: "Oclock App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
  {
    link: "https://react-tourplaces.netlify.app/",
    img: "/static/images/React-Tour-Places.png",
    title: "To Do App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
];

const Portfolio = () => {
  return (
    <div className="home portfolio">
      <Navbar />
      {/* div wrapper */}
      <div className="sub-section">
        {/* div card */}
        {projectsOfData.map((data, i) => {
          console.log(data)
          const {link, img, title, description} = data;
          return (
            <div key={i} className="img-project">
              <img src={img} alt="here is a pic of any project" />
              {/* div info */}
              <div className="project-info">
                <h1 className="title">{title}</h1>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noreferrer" className="btn">
                  Go to Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio