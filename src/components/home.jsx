import React from "react";
import Header from "./header";
import Fotter from "./footer";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div
          style={{ textAlign: "center", marginLeft: "5em" }}
        >
          <h1 style={{ fontSize: "3em" }}>
            Hi There! <br />I am Tharindu Deshan
          </h1>
          <h2>I am a undergraduate student</h2>
          <p  style ={{ width:"100%" ,fontSize :"1.5em", marginTop:"7em",textAlign:"left",letterSpacing:"2px",lineHeight:"2em"}} >
          Hey, I’m Tharindu Deshan! I’m an undergraduate student studying at{" "}
          <i>University Of Kelaniya</i> , passionate about backend development,
          cloud computing, matchine learning. I love building things, whether
          it’s a website, app, or design that makes life easier and more
          enjoyable. I’m always looking for new projects to work on, and I’m
          always learning and up for new challenges.
        </p>
        </div>
        <div>
          <img src="src/assets/laptop.png" width="750px" alt="hero" />
          
        </div>
      </div>

      
    </div>
  );
}
