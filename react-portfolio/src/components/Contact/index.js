import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

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

export default ContactForm;
