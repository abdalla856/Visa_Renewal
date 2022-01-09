import React from "react";
import $ from "jquery";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <div className="left_container">
          <NavLink to="/">
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
          </NavLink>
        </div>
        <div className="right_container">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Visa Application</NavLink>
          </li>
          <li>
            <NavLink to="/">ikad Application</NavLink>
          </li>
          <li>
            <NavLink to="/">Logout</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
