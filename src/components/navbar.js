import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const mystyle = {
      // marginBottom: "10px",
    };
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={mystyle}>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link href="%PUBLIC_URL%/SEERlogo.png" to="/article/role=searcher" className="nav-link">
                Digital Twin
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="" className="nav-link">
                Deployment
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
