import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Project from './components/Project';
import Resume from './components/Resume';
import 



class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
}

export default App;
