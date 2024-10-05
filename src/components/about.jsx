import React from "react";
import Header from "./header";
import Fotter from "./footer";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="about">
      <div>
        <h1 style={{ fontSize: "3em",textAlign:"center" }}>About me</h1>
        <p style={{fontSize :"1.5em", marginTop:"7em",textAlign:"center",letterSpacing:"2px",lineHeight:"2em"}}>
          Hello! I’m Deshan, a passionate undergraduate student currently
          pursuing my degree in Bachelor of Information and Communication
          Technology (BICT) Honours Degree at University Of Kelaniya. With a
          keen interest in software technology , I am dedicated to expanding my
          skills and knowledge in the ever-evolving tech landscape. Growing up,
          I have always been fascinated by the power of technology.
        </p>
      </div>
      <h1 style={{ marginTop: "1em",textAlign:"center",fontSize:"3em" }}>Skills</h1>
      <div className="skills">
        <div className="skill-icons">
          <FaPython />
          <FaJava />
          <FaHtml5 />
          <FaCss3 />
        </div>
        <div className="skill-icons">
          <FaJs />
          <FaReact />
          <FaGithub />
          <FaDatabase />
        </div>
      </div>
    </div>
  );
}
