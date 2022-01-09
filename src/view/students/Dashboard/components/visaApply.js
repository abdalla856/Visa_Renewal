import React from "react";
import { Link } from "react-router-dom";
import "./visaApply.css";
const VisaApply = props => {
  return (
    <div classNameName="page_visa_apply">
      <div className="container_visa_apply">
        <div className="left_visa_apply">
          <div className="visa_apply">Required Documents</div>
          <div className="eula_visa_apply">
              <p> you need to submit one copy of the following :</p>
            <ul className="visa__doc">
              <li> all passport page</li>
              <li>A passport photo</li>
              <li> Offer letter</li>
              <li> Offer letter</li>
              <li> Regestiration</li>
              <li> Matric</li>
              <li> Attendance Report</li>
              <li> Verification letter</li>
            </ul>
          </div>
        </div>
        <div className="right_visa_apply">
          <form>
            <h5 className="visa__text">{props.kind} Application</h5>
            <Link to={"/user"}>
              <button className="submit">Apply now</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default VisaApply;
