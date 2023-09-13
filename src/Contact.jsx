import React, { useState } from "react";
import "./App.css";

const emailSubject = "Inquiry from Website";


function Contact(props) {
  return (
    <div>
      
      <div className="social-media">
        <a
          href="https://www.instagram.com/tomtenniscourt/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sm"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
            alt="Link to Instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tom-court/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sm"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
            alt="Link to LinkedIn"
          />
        </a>
        <a
          href="https://github.com/tomtenniscourt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sm"
            src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            alt="Link to GitHub"
          />
        </a>
        <a
          href={`mailto:tomcourt94@icloud.com?subject=${encodeURIComponent(
            emailSubject
          )}`}
        >
          <img
            className="email"
            src="https://static.vecteezy.com/system/resources/previews/012/388/536/original/email-icon-retro-illustration-free-vector.jpg"
            alt="Email Tom"
          />
        </a>
      </div>{" "}
    </div>
  );
}
export default Contact;
