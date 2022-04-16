import React, { useEffect } from "react";
import $ from "jquery";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { authCotext } from "../../../shared/context/auth-context";
const NavBar = () => {
  const auth = useContext(authCotext);
  let payment,
    newA , finished= false;

  if (auth.app) {
    payment = auth.app.payment;
    newA = auth.app.new;
    finished = auth.app.finished;
  }

  return (
    <nav>
      <ul className="navbar">
        <div className="left_container">
          <NavLink to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/UTM-LOGO.png" />
          </NavLink>
        </div>
        <div className="right_container">
          <li>
            <NavLink to="/user">Home</NavLink>
          </li>
          <li>
            {!(newA  || payment) && (
              <NavLink to="/visaApplication">Visa Application</NavLink>
            )}
          </li>
          {!(newA|| payment) && (
            <li>
              <NavLink to="/ikadApplication">ikad Application</NavLink>
            </li>
          )}
{  (finished || newA || payment) &&      <li>
            <NavLink to="/progress">Progess</NavLink>
          </li>}
          <li>
            <button className="logout" onClick={auth.logout}>
              Logout
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
