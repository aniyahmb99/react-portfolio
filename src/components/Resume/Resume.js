import React from "react";
import "../../App";
import { resume } from "../Resume/Resume.pdf";

export default function Resume(props) {
  return (
    <div className="header sectionBorder">
      <div className="resume-card" id="resume">
        <a href={props.resume}>
          <img src={props.resume}></img>=
        </a>
      </div>
    </div>
  );
}

// import resume or use as prop?
