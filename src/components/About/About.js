import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="my-5">
      <h2 className="text-center">About Me</h2>
      <div className="row p-5  w-75 mx-auto">
        <div className="col-md-7 d-flex align-items-center about-me">
            <p>Hey! I'm Sadia.I am a computer science student. My mission this year is to be a web developer. I am constantly working hard for this and hopefully I will be able to reach my destination.</p>
        </div>
        <div className="col-md-5 ">
          <img
          className="w-75" 
            src="https://i.ibb.co/GdzzZjN/one.jpg"
            
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
