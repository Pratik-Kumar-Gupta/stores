import React, { Component } from "react";

class HomeComp extends Component {
  state = {};
  styles = {
    height: "200px",
    background: "#aaa",
  };
  render() {
    return (
      <React.Fragment>
        <h2>Pratik Gupta</h2>
        <h5>Photo of me:</h5>
        <div style={this.styles}>Profile Pic</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3>Some Links</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <hr className="d-sm-none" />
      </React.Fragment>
    );
  }
}

export default HomeComp;
