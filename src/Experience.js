import React, { Component } from 'react';
import DevExp from './DevExp';
import ResExp from './ResExp';
import DesExp from './DesExp';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exp: "dev"
    }
  }

  updateExp(str) {
    this.setState({
      exp: str
    })
  }

  render() {
    return (
      <div className="Experience">
        <div className="select-box">
          <span className="heading">*Experience as </span>
          <span className={this.state.exp === "dev" ? "job active" : "job"} onClick={() => this.updateExp("dev")}>Developer</span>
          <span className={this.state.exp === "res" ? "job active" : "job"} onClick={() => this.updateExp("res")}>Researcher</span>
          <span className={this.state.exp === "des" ? "job active" : "job"} onClick={() => this.updateExp("des")}>Designer</span>
        </div>
        <div className="text-box">
          {this.state.exp === "dev" && <DevExp />}
          {this.state.exp === "res" && <ResExp />}
          {this.state.exp === "des" && <DesExp />}
        </div>
      </div>
    );
  }
}

export default Experience;