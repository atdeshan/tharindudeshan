import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
export default function Fotter() {
    const date  = new Date().getFullYear();
  return (
    
    <footer className="footer">
      <p>&copy; {date} All rights reserved.</p>
      <div className="social-icons">
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
