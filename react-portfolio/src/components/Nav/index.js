import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navbar">
      <a className="hover" href="#about">
        About
      </a>
      <a className="hover" href="#work">
        {"{"}" "{"}"}
        Work
      </a>
      <a className="hover" href="#resume">
        {"{"}" "{"}"}
        Resume
      </a>
      <a className="hover border-right" href="#contact">
        {"{"}" "{"}"}
        Contact{"{"}" "{"}"}
      </a>
    </div>
  );
}

export default Nav;
