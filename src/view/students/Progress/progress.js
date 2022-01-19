import React from "react";

import NavBar from "../../shared/components/Navigation/NavBar";
import Exclamat from "./components/Exclamat";
import { Link } from "react-router-dom";
import { Approved } from "./components/approved";
import Error from "./components/Error";
import "./progress.css";
const Progress = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="submitted__cotainer">
        {/* <Approved/> */}
        {/* <Exclamat /> */}
        <Error/>
      </div>
    </React.Fragment>
  );
};
export default Progress;
