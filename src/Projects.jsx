import React, { useState } from "react";
import "./App.css";

function Projects(props) {
  return (
    <div>
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
      </div>{" "}
    </div>
  );
}
export default Projects;
