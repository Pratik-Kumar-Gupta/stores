import React, { Component } from "react";

class Navbar extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a className="navbar-brand" href="#">
            Pratik Gupta
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              /> */}
              <button
                className="btn btn-outline-success my-2 my-sm-0 m-2"
                type="submit"
              >
                Cart Items Count
              </button>
              <span className="badge badge-warning">
                {this.props.totalcounters}
              </span>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
