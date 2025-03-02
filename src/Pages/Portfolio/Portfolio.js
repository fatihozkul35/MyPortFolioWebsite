import React from 'react'
import "./Portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";

const projectsOfData = [
  {
    link: "https://reactcapstoneproject.netlify.app/",
    img: "/static/images/react-capstone.png",
    title: "Blog App",
    description: `In this project i used redux for state management, react router dom for pages, material UI for styling, sometimes styled component and as backend firebase(authentication and real time datebase functions etc...)`,
  },
  {
    link: "https://reacttodocreatinbyadamsandler.netlify.app/",
    img: "/static/images/ToDoAPP-react.png",
    title: "To Do App",
    description: ``,
  },
  {
    link: "https://javascripthoverboard.netlify.app/",
    img: "/static/images/JavaScriptHover.png",
    title: "Hoverboard App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
  {
    link: "https://javascript-restaurant-menu.netlify.app/",
    img: "/static/images/JavaScript-Restaurant-Menü.png",
    title: "Restaurant Menü",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
  {
    link: "https://recipe-app-api-axios.netlify.app/",
    img: "/static/images/recipe-app-API.png",
    title: "Recipe Api",
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
    title: "Tour Places",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic.`,
  },
];

const Portfolio = () => {
  return (
    <div className="home portfolio">
      <Navbar />
        <div>
          <div className="note">
            <p>
              These projects were created during my early learning journey. While they represent the foundation of my development career, my current skill set is far beyond what these examples demonstrate. They remain here to showcase my growth over the years.
            </p>
          </div>
          <div className="sub-section">
          {projectsOfData.map((data, i) => {
            const { link, img, title } = data;
            return (
              <div key={i} className="img-project">
                <img src={img} alt="here is a pic of any project" />
                {/* div info */}
                <div className="project-info">
                  <h1 className="title">{title}</h1>
                  <a href={link} target="_blank" rel="noreferrer" className="btn">
                    Go to Project
                  </a>
                </div>
              </div>
            );
          })}
          </div>
        </div>
    </div>
  );
};

export default Portfolio