import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand">
          <Link to="/">
            <FaReact style={{ width: "40px", height: "40px" }} />
          </Link>
        </span>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
