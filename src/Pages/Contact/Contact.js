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
          <div className="contacts whatsapp">
            <i className="fa fa-whatsapp fa-5x"></i>
            <p>+49 176 320 641 32</p>
          </div>
          <div className="contacts email">
            <i className="fa fa-at fa-4x"></i>
            <p>fatihozkul3541@gmail.com</p>
          </div>
          <div className="contacts location">
            <i className="fa fa-map fa-4x"></i>
            <p>59519 Möhnesee, Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact