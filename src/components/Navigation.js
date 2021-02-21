import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
                 WYNISCO BOOTCAMP-REACT
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">

            <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/resume" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/resume">
                  Exercise1
                </Link>
              </li>


              <li
                className={`nav-item  ${
                  props.location.pathname === "/responsive" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/responsive">
                  Exercise2
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/theme" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/theme">
                  Exercise3
                </Link>
              </li>
             
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Exercise4
                </Link>
              </li>

             

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);