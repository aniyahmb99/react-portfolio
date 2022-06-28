import React from "react";
import "../ContactForm/index.css";
import "../../App";

export default function ContactForm() {
  return (
    <div className="header sectionBorder" id="contact">
      <h2 className="title contact-title box-shadow">Contact me</h2>
      <header>Get in touch!</header>
      <form id="form" className="topBefore">
        <input id="name" type="text" placeholder="NAME" />
        <input id="email" type="text" placeholder="E-MAIL" />
        <textarea
          id="message"
          type="text"
          placeholder="MESSAGE"
          defaultValue={""}
        />
        <input id="submit" type="submit" defaultValue="GO!" />
      </form>
    </div>
  );
}
