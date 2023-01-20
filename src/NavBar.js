import React, { Component } from 'react';
import cat from './cat.svg'
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar-inner">
          <img className="NavBar-icon" src={ cat } alt="meow" />
          <span>about</span>
          <span>experience</span>
          <span>projects</span>
          <span>contact</span>
          <span>resume</span>
        </div>
      </div>
    );
  }
}

export default NavBar;
