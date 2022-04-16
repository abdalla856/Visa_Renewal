import React from "react";
import { Link } from "react-router-dom";
import "./visaApply.css";
import { useContext } from "react";
import { authCotext } from "../../../shared/context/auth-context";

const VisaApply = props => {
  const auth = useContext(authCotext);

let type = "";
  let payment,newA , finished= false;

if (auth.app !==undefined) {
  type = auth.app.type
  payment = auth.app.payment;
  newA = auth.app.new;
  finished = auth.app.finished;
}
if(props.kind==="Visa")
{  return (
    <div classNameName="page_visa_apply">
      <div className="container_visa_apply">
        <div className="left_visa_apply">
          <div className="visa_apply">Required Documents</div>
          <div className="eula_visa_apply" >
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
          <form className="dashboard_form">
            <h5 className="visa__text">{props.kind} Application</h5>
            <div className="submit_con">
            <Link to={( !finished)?"/progress":props.link } >
              <button className="submit">
                {
                ( !finished)?
                "Progress":"Apply Now" 
                }
                </button>
            </Link>
           </div>

          </form>
        </div>
      </div>
    </div>
  )}else{
    return (
      <div classNameName="page_visa_apply">
        <div className="container_visa_apply">
          <div className="left_visa_apply">
            <div className="visa_apply">Required Documents</div>
            <div className="eula_visa_apply" >
                <p> you need to submit one copy of the following :</p>
              <ul className="visa__doc">
                <li> all passport page</li>
                <li>A passport photo</li>
                <li> Regestiration</li>
                <li> Matric</li>

              </ul>
            </div>
          </div>
          <div className="right_visa_apply">
            <form className="dashboard_form">
              <h5 className="visa__text">{props.kind} Application</h5>
              <div className="submit_con">
              <Link to={( finished)?"/progress":props.link } >
                <button className="submit">
                {
                ( !finished)?
                "Progress":"Apply Now" 
                }
                </button>
              </Link>
             </div>
  
            </form>
          </div>
        </div>
      </div>
    )
  }
};
export default VisaApply;
