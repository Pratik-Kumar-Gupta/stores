import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a className="navbar-brand" href="#">
            Simple React App
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
              <Link to="/profile">
                <li className="nav-item active nav-link">
                  Profile <span className="sr-only">(current)</span>
                </li>
              </Link>
              <Link to="/stores">
                <li className="nav-item active nav-link">
                  Shopping Cart <span className="sr-only">(current)</span>
                </li>
              </Link>
            </ul>
            <form className="form-inline my-2 my-lg-0">
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
