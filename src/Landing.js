import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <span className="heading">*Hello, welcome!</span>
        <span className="name">meowcodes // Lena Ryoo</span>
        <div className="title-box">
          <span className="titles">full-stack web developer</span>
          <span className="titles">designer</span>
          <span className="titles">researcher</span>
          <span className="titles">mental health advocate</span>
        </div>
        <button className="btn">
          <a href="mailto:lenaryoo@gmail.com">
            say hello!
          </a>
        </button>
      </div>
    );
  }
}

export default Landing;