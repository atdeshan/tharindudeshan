import React from "react";
import "./Project.css"; // Import the CSS file for styling

export default function Project() {
  return (
    <div className="project-container">
  <h1 className="project-title">Projects</h1>

  {/* Highlighted Projects */}
  <div className="highlighted-projects">
    {/* Video 1 */}
    <div className="video-item highlight">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/D5w9zZv2r5U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="video-description">
        A responsive React-based web application for task management. It allows users to add, mark as complete, and delete tasks. The app integrates with a Django REST API backend to handle CRUD operations. Key features include:
        <li>Adding tasks with specific dates.</li>
        <li>Toggling task completion status.</li>
        <li>Bulk deletion of all tasks with a "Flush" option.</li>
        This project demonstrates my skills in building full-stack applications with a focus on frontend interactivity and seamless backend integration.
      </p>
    </div>

    {/* Video 2 */}
    <div className="video-item highlight">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/bobI5nFCTMM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="video-description">
        To-Do App (SwiftUI, Firebase Authentication, MVVM Architecture)
        This to-do app, built using SwiftUI, enables users to organize and manage tasks with ease. The app includes Firebase integration for secure authentication, along with features such as task creation, detailed task views, and user account management. Designed with the MVVM architecture, it emphasizes clean code and an intuitive user interface, making task management simple and efficient.
      </p>
    </div>
  </div>

  {/* Remaining Projects */}
  <div className="video-grid">
    {/* Video 3 */}
    <div className="video-item">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/gfsiQx-wWM4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Video 4 */}
    <div className="video-item">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/0cAxQYILI0E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Video 5 */}
    <div className="video-item">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/irvINBngFT0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</div>

  );
}
