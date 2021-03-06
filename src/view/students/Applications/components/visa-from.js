import React from "react";
import { useHistory } from "react-router";
// import { useForm } from "react-cool-form";
// import FileBase from "react-file-base64";
import {
  // FormControl,
  // FormControlLabel,
  FormLabel,
  InputLabel,
  TextField,
  // Select,
  // Checkbox,
  Button,
  // Input,
} from "@material-ui/core";
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Form.css";

import { useDispatch } from "react-redux";
import { createVisa } from "../../../../actions/apps";
import { useContext } from "react";
import { authCotext } from "../../../shared/context/auth-context";

const Visaform = (params) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useContext(authCotext);
  const handlePost = (e) => {
    e.preventDefault();

    var formData = new FormData();

    var imagefile = document.querySelector("#photo");
    var passport = document.querySelector("#passport");
    var offer = document.querySelector("#offer");
    var exam = document.querySelector("#exam");
    var reg = document.querySelector("#reg");
    var matric = document.querySelector("#matric");
    var ver = document.querySelector("#ver");
    try {
      formData.append("creator", auth.userId);
      formData.append("photo", imagefile.files[0]);
      formData.append("passport", passport.files[0]);
      formData.append("offerLetter", offer.files[0]);
      formData.append("ExamSlip", exam.files[0]);
      formData.append("matric", matric.files[0]);
      formData.append("Verfication", ver.files[0]);
      formData.append("RegSlip", reg.files[0]);
     
      console.log(auth);

       dispatch(createVisa(formData, auth.token));
      } catch (err) {
        alert(err.message);
      }

      history.push("/user");
    alert("Created Succesfully");
  };

  return (
    <form className="form__to__apply" onSubmit={handlePost}>
      <h1>
        <FormLabel className="upload_label" component="legend">
          Visa Application
        </FormLabel>
      </h1>
      <div className="container_visa">
        <div className="inputs">
          <InputLabel htmlFor={"passportCopy"}>passport all pages</InputLabel>

          <TextField
            required
            name="passport"
            inputProps={{ accept: "application/pdf" }}
            id="passport"
            type="file"
          />
          <h6 className ="note_text">*please upload file in PDF format</h6>
          <InputLabel htmlFor="passportPhoto">passport Photo</InputLabel>
          <TextField
            name="photo"
            inputProps={{
              accept: 
              "image/*" 
                
              
            }}
            id="photo"
            type="file"
            required
          />
          <h6 className ="note_text">*please upload file in PNG format</h6>

          <InputLabel htmlFor={"OfferLetter"}>UTM Offer letter</InputLabel>
          
          <TextField required name={"OfferLetter"} 
            inputProps={{ accept: "application/pdf" }}
            type="file" id="offer" />
          <h6 className ="note_text">*please upload file in PDF format</h6>

          <InputLabel htmlFor={"ExamSlip"}>
            Previous examination slip
          </InputLabel>
          <TextField name={"ExamSlip"} 
            inputProps={{ accept: "application/pdf" }}
          
          type="file" id="exam" required />
        </div>
        <h6 className ="note_text">*please upload file in PDF format</h6>

        <div className="inputs_2">
          <InputLabel htmlFor={"RegSlip"}>Current Regestraion slip</InputLabel>
          <TextField name={"RegSlip"} 
            inputProps={{ accept: "application/pdf" }}
          
          type="file" id="reg" required />
          <h6 className ="note_text">*please upload file in PDF format</h6>

          <InputLabel htmlFor={"Matric"}>Matric Copy</InputLabel>
          <TextField name={"Matric"} 
            inputProps={{ accept: "application/pdf" }}
          
          type="file" id="matric" required />
          <h6 className ="note_text">*please upload file in PDF format</h6>

          <InputLabel htmlFor={"VerfLetter"}>Verification letter</InputLabel>
          <TextField name={"VerfLetter"} 
            inputProps={{ accept: "application/pdf" }}
          
          type="file" id="ver" required />
          <h6 className ="note_text">*please upload file in PDF format</h6>

        </div>
      </div>

      <div className="button">
        <Button type="submit" variant="contained" color="primary">
          Apply
        </Button>
      </div>
    </form>
  );
};

export default Visaform;
