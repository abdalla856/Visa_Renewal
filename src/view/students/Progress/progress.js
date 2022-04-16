import React from "react";

import NavBar from "../../shared/components/Navigation/NavBar";
import Exclamat from "./components/Exclamat";
import { Link } from "react-router-dom";
import { Approved } from "./components/approved";
import Error from "./components/Error";
import INProgress from "./components/inprogress";
import "./progress.css";
import { useContext } from "react";
import { authCotext } from "../../shared/context/auth-context";
const Progress = () => {
  const auth = useContext(authCotext);
  console.log(auth);
  // console.log(auth.app.passport);

    if (auth.app.finished === true) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="submitted__cotainer">
            <Approved />
          </div>
        </React.Fragment>
      );
    } else if (auth.app.payment === true && auth.app.payment_upload === false) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="submitted__cotainer">
        
            <Exclamat />
          </div>
        </React.Fragment>
      );
    } else if (
      auth.app.re_upload === true &&
      auth.app.re_upload_uploads === false
    ) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="submitted__cotainer">
            <Error />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div className="submitted__cotainer">
            <INProgress />
          </div>
        </React.Fragment>
      );
    }
  
};
export default Progress;
