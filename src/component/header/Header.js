import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { GiAnimalSkull } from "react-icons/gi";

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <span>
          <Link to="/">
            <FaReact style={{ height: "50px", width: "50px" }} />
            <GiAnimalSkull style={{ height: "50px", width: "50px" }} />
          </Link>
        </span>

        <ul className="nav ">
          <li>
            <NavLink activeClassName="active" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
