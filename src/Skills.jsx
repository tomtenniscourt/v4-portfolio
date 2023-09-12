import React, { useState } from "react";
import "./App.css";

const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "React.js",
  "Ruby",
  "Ruby on Rails",
  "Bootstrap",
  "Framer-Motion",
  "MongoDB",
  "PostgreSQL",
];

function Skills(props) {
  return (
    <div>
      <div className="my-experience">
        <h1>Experience</h1>
        <p className="about-p">
          I have just finished a three month intensive Software Engineering
          course that taught the fundamentals of HTML5, CSS, and JavaScript, in
          order to prepare myself for a career in Software Engineering and
          Development. A collection of some applications I have built can be
          seen below in the projects section.
          <br />
          <br />
          I am actively seeking job opportunities where I can make meaningful
          contributions, continuously learn, and grow as a professional. With a
          solid foundation as a trained full stack engineer, I find the most
          fulfillment and joy working on the front end of projects.
          <br />
          <br />
          If you have or hear of any exciting opportunities that aligns with my
          skills and experience, I would be thrilled to hear from you! Please
          feel free to connect with me on{" "}
          <a href="https://www.linkedin.com/in/tom-court/">LinkedIn</a>, or
          contact me using the links below.
          <br />
        </p>
      </div>
      <div className="my-skills">
        <h1>My Skills</h1>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              {skill}
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
export default Skills;
