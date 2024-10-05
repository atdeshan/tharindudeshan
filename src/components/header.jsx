import React from "react";
import { Link}  from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
        <h3 style={{marginLeft: "1em"}}> THARINDU DESHAN</h3>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      
    </div>
  );
}
