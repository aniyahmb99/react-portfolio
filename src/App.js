import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project/Project";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import "./index";
import "./App.css";

function App() {
  return (
    <main>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Project />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}

export default App;
