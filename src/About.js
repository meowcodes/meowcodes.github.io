import React, { Component } from 'react';
import cat from './cat.jpg';
import snorkeling from './snorkeling.jpg';

class About extends Component {
  render() {
    return (
      <div className="About">
          <span className="heading">*About me</span>
          <div className="About-box">
            <div className="text-box">
              <span className="text">Hi, my name is Lena. I’m a designer-researcher turned developer from San Francisco Bay Area. Currently, I’m studying full-stack development at Rithm School.</span>
              <span className="text">I graduated <b>UC Berkeley</b> with an architecture degree and studied developmental psychology at <b>San Francisco State University</b>. I love children (I'm a RIE-trained babysitter), playing volleyball, and diving in the tropics.</span>
            </div>
            <div className="img-box">
              <img className="img-cat" src={cat} alt="cat" />
              <img className="img-snorkeling" src={snorkeling} alt="snorkeling" />
            </div>
          </div>
        </div>
    );
  }
}

export default About;