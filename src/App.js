import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";

function scrollTo(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

function App() {
 
return (
  <div className="container">
    <div className="home-container">
      < Home />
      <h1 class="home-page-header">Tom Court: Software Engineer</h1>
      <img className="picture" src="https://i.imgur.com/NF2gNgt.png"></img>
      <div className="container-links">
        <a onClick={() => scrollTo("#skills")}>Skills and Experience</a>
        <br />
        <a onClick={() => scrollTo("#projects")}>Projects</a>
        <br />
        <a onClick={() => scrollTo("#about")}>About</a>
        <br />
        <a onClick={() => scrollTo("#contact")}>Contact</a>
      </div>
    </div>

    <div className="skills-container" id="skills">
      < Skills />
    </div>

    <div className="projects-container" id="projects">
      < Projects />
      
    </div>
    <div className="about-container" id="about">
      < About />
    </div>
    
    <div className="contact-container" id="contact">
      < Contact />
    </div>
    
  </div>
);
}

export default App;
