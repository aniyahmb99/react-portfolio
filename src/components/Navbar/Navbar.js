import React from "react";
import "./index.css";
import "../../App";

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="hover" href="#about">
        About
      </a>
      <a className="hover" href="#work">
        Work
      </a>
      <a className="hover" href="#resume">
        Resume
      </a>
      <a className="hover border-right" href="#contact">
        Contact
      </a>
    </div>
  );
}
