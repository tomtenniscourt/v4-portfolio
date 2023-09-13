import React, { useState, useEffect } from "react";
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
  const [showContent, setShowContent] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  const handleEnterClick = () => {
    setShowContent(true);
  };

  useEffect(() => {
    const textAnimationDelay = 100; // Delay in milliseconds between each character
    const text = "Tom Court\nSoftware Engineer"; // Text to be animated
    let currentIndex = 0;

    const textAnimationInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        document.querySelector(".landing-h1").innerText = text.slice(
          0,
          currentIndex
        );
        currentIndex++;
      } else {
        clearInterval(textAnimationInterval);
        setTextAnimationComplete(true);
      }
    }, textAnimationDelay);

    return () => clearInterval(textAnimationInterval);
  }, []);

  return (
    <div className="container">
      {!showContent ? (
        <div className="landing-page">
          <h1 className="landing-h1"></h1>
          {textAnimationComplete && (
            <button className="enter-button" onClick={handleEnterClick}>
              Enter Website
            </button>
          )}
        </div>
      ) : (
        <div className="home-container">
          <Home />
          <h1 className="home-page-header">Hello, I'm Tom</h1>
          <img
            className="picture"
            src="https://i.imgur.com/NF2gNgt.png"
            alt="Tom Court"
          ></img>
          <div className="container-links">
            <a onClick={() => scrollTo("#skills")}>Skills and Experience</a>
            <br />
            <a onClick={() => scrollTo("#projects")}>Projects</a>
            <br />
            <a onClick={() => scrollTo("#about")}>About</a>
          </div>
          <Contact />
        </div>
      )}

      {showContent && (
        <div>
          <div className="skills-container" id="skills">
            <Skills />
          </div>

          <div className="projects-container" id="projects">
            <Projects />
          </div>

          <div className="about-container" id="about">
            <About />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
