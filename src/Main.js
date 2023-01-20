import React, { Component } from 'react';
import Landing from './Landing';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import resume from './resume.pdf'
import './Main.css';

class Main extends Component {


  render() {
    return (
      <div className="Main">
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <a href={resume}><div className="resume-box">
          <div className="resume">
            <span>RESUME</span>
          </div>
        </div></a>
      </div>
    );
  }
}

export default Main;
