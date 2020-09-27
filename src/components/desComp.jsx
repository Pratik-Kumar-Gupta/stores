import React, { Component } from "react";

class DesComp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1>Simple React App</h1>
          <p>This App demonstrates a simple cart functionality</p>
          <li>
            Clicking on Add item will increment the qty in qty span as well as
            navbar
          </li>
          <li>Clicking of Delete item will delete the items from the page</li>
        </div>
      </React.Fragment>
    );
  }
}

export default DesComp;
