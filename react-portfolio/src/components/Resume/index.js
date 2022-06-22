import React from "react";

function Resume() {
  return (
    <div className="header sectionBorder">
      <h2 className="title box-shadow">Resume</h2>
      <div className="resume-card" id="resume">
        <a href="./assets/QA Resume.pdf">
          <img className="resumeImg" src="./assets/images/resume.jpg" />
        </a>
      </div>
    </div>
  );
}

export default Resume;
