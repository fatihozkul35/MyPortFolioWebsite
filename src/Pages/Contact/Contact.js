import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import quote from "../../assets/img/quote.png";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="home contact">
      <Navbar />
      <div className="section">
        <div className="section-quotes">
          <img src={quote} alt="" />
          <h2 className="quote">'''''''NO PAIN NO GAIN'''''''</h2>
        </div>
        <div className="section-contact">
            <a href="mailto:fatihozkul3541@gmail.com" className="contact-link">
              <div className="contacts email">
                  <i className="fa fa-at fa-4x"></i>
                  <p>fatihozkul3541@gmail.com</p>
              </div>
            </a>
          <a
            href="https://www.google.com/maps?q=59519+Körbecke,+Germany"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <div className="contacts location">
              <i className="fa fa-map fa-4x"></i>
              <p>59519 Körbecke, Germany</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact