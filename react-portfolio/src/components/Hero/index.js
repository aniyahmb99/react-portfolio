import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Resume from "../../components/Resume";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-text">
          <div className="name-first">
            <span className="heading-primary-animation" id="name-title">
              Aniyah Butler
            </span>
            <span className="heading-secondary-animation" id="name-title">
              Full-Stack Web Developer
            </span>
          </div>
          <div className="social-div">
            <div className="hero-social">
              <ul className="ul-social">
                <li className="li-social-links">
                  <a
                    className="social hover2"
                    href="https://github.com/aniyahmb99"
                    target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li className="li-social-links">
                  <a
                    className="social hover2"
                    href="https://www.linkedin.com/in/aniyah-butler-033596223"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div id="arrow">
              <span>
                <a className="hover2" href="#about">
                  <i className="fa fa-chevron-down" aria-hidden="true" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      //   <HashRouter>
      //     <header>
      //       <Navigation />
      //     </header>

      //     <div className="content">
      //       <Route exact path="/" render={() => <Redirect to="/about" />} />
      //       <Route path="/about" component={About} />
      //       <Route path="/portfolio" component={Portfolio} />
      //       <Route path="/contact" component={Contact}/>
      //       <Route path="/resume" component={Resume}/>
      //     </div>
      //   </HashRouter>
    );
  }
}

export default Hero;
