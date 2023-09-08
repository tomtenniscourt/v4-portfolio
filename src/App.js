import React, { useState } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

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

function App() {
 
return (
  <div className="container">
    <div className="home-container">
      <h1>Tom Court: Software Engineer</h1>
    </div>
    <div className="skills-container">
      <h1>Skills and Experience</h1>
      <p className="about-p">
        I have just finished a three month intensive Software Engineering course
        that taught the fundamentals of HTML5, CSS, and JavaScript, in order to
        prepare myself for a career in Software Engineering and Development. A
        collection of some applications I have built can be seen below in the
        projects section.
        <br />
        <br />
        I am actively seeking job opportunities where I can make meaningful
        contributions, continuously learn, and grow as a professional. With a
        solid foundation as a trained full stack engineer, I find the most
        fulfillment and joy working on the front end of projects.
        <br />
        <br />
        If you have or hear of any exciting opportunities that aligns with my
        skills and experience, I would be thrilled to hear from you! Please feel
        free to connect with me on{" "}
        <a href="https://www.linkedin.com/in/tom-court/">LinkedIn</a>, or
        contact me using the links below.
      </p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </div>
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-one">
        <h2 className="item-h2">Tic Tac Toe</h2>
        <p className="item-p">
          A game of tic tac toe using simple JavaScript logic, that can be
          played by two users.
        </p>
        <a
          className="button-go-tictactoe"
          href="https://tomtenniscourt.github.io/tic_tac_toe_200623/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to App
        </a>
      </div>
      <div className="project-two">
        <h2 className="item-h2">Dad Jokes</h2>
        <p className="item-p">
          Using a 3rd party API, a random 'Dad Joke' is generated on the screen
          for the user.
        </p>
        <a
          className="button-go-joke"
          href="https://dad-joke-generator-phi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to App
        </a>
      </div>

      <div className="project-three">
        <h2 className="item-h2">Weather App</h2>
        <p className="item-p">
          An application that uses an API to fetch weather information for any
          given U.S. zip code
        </p>
        <a
          className="button-go-weather"
          href="https://my-project-2-47ihbr2ba-tomtenniscourt.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to App
        </a>
      </div>

      <div className="project-four">
        <h2 className="item-h2">Paint</h2>
        <p className="item-p">
          A JavaScript application that enables users to paint on a blank canvas
          <br />
        </p>
        <a
          className="button-go-paint"
          href="https://toms-paint-react-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to App
        </a>
      </div>
      <div className="project-five">
        <h2 className="item-h2">Pokedex</h2>
        <p className="item-p">
          A simple application that uses the PokeAPI to fetch data on a specific
          Pokemon
          <br />
        </p>
        <a
          className="button-go-pokedex"
          href="https://tom-pokedex-app-2023.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to App
        </a>
      </div>
    </div>
    <div className="about-container">
      <h1>About Me</h1>
      <p>Hello There</p>
    </div>
    <div className="contact-container">
      <h1>Contact</h1>
      <p>
        Tom Court
        <br />
        London
        <br />
        EC1V 1AQ
      </p>
      <div className="social-media">
        <li>Instagram</li>
        <li>Github</li>
        <li>Twitter</li>
        <li>Email</li>
      </div>
    </div>
  </div>
);
}

export default App;
