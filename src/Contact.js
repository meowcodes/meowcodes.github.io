import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <span className="heading">*Let's connect</span>
        <div className="Contact-box">
          <a href="https://github.com/meowcodes"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/lenaryoo/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://codepen.io/meowcodes/"><i className="fab fa-codepen"></i></a>
          <a href="mailto:lenaryoo@gmail.com"><i className="fas fa-at"></i></a>
        </div>
      </div>
    );
  }
}

export default Contact;