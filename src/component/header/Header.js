import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import "./header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid fix">
          <span className="navbar-brand">
            <Link to="/">
              <FcHome style={{ height: "40px", width: "40px" }} />
            </Link>
          </span>

          <ul className="nav ">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/posts"
              >
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
