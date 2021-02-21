import React from "react";
import pic1 from './pic1.jpg';
function About() {
  return (
    <div className="about">
      <div className="container">
            <img src={pic1} alt="" width="200" height="200"
            />
            <h1 className="font-weight-light">About</h1>
            <p>
              I am Swathi Nallela, MS in Computer Science, UI/UX Designer/ Front End Developer
            </p>
      </div>
    </div>
  );
}

export default About;