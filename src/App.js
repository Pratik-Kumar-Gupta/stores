import React, { Component } from "react";
import Navbar from "./components/navbar";
import HomeComp from "./components/homeComp";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid" style={{ marginTop: "30px" }}>
          <div className="col-sm-3">
            <HomeComp />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
