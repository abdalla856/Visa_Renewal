import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { FormLabel, InputLabel, TextField, Button } from "@material-ui/core";
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Form.css";
import { useDispatch } from "react-redux";
import { Reupload } from "../../../../../actions/apps";
import { useContext } from "react";
import { authCotext } from "../../../../shared/context/auth-context";
import { useSelector } from "react-redux";
const Ruploadform = (params) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useContext(authCotext);
  const data = auth.app;

  const handlePost = (e) => {
    e.preventDefault();

    var formData = new FormData();

    if (!data.passport.accept) var passport = document.querySelector("#passport");
    if(data.type !== "i-kad"){
    var imagefile = document.querySelector("#photo");
    var offer = document.querySelector("#offer");
    var ver = document.querySelector("#ver");
    }
    if (!data.ExamSlip.accept) var exam = document.querySelector("#exam");
    if (!data.RegSlip.accept) var reg = document.querySelector("#reg");
    if (!data.matric.accept)var matric = document.querySelector("#matric");
    if (!data.ecomPayment.accept)var e_commerce = document.querySelector("#e-commerce");
    
    if (!data.bankPayment.accept)var bank = document.querySelector("#bank");
    try {
      if (!data.passport.accept) formData.append("passport", passport.files[0]);
      if (!data.ExamSlip.accept) formData.append("ExamSlip", exam.files[0]);
      if (!data.matric.accept) formData.append("matric", matric.files[0]);
      if(data.type !== "i-kad"){
        if (!data.photo.accept) formData.append("photo", imagefile.files[0]);
        if (!data.Verfication.accept)formData.append("Verfication", ver.files[0]);
        if (!data.offerLetter.accept)formData.append("offerLetter", offer.files[0]);
        if (!data.RegSlip.accept) formData.append("RegSlip", reg.files[0]);
      }
      if (!data.ecomPayment.accept)formData.append("ecomPayment", e_commerce.files[0]);
      if (!data.bankPayment.accept) formData.append("bankPayment", bank.files[0]);
      // if (!data.ecomPayment.accept) formData.append("ecomPayment", e_commerce.files[0]);
      // if (!data.bankPayment.accept) formData.append("bankPayment", bank.files[0]);
      if (!data.bankPayment.accept && !data.ecomPayment.accept) formData.append("payment", true);
      
      formData.append("re_upload_uploads", true);
      console.log(data)
      dispatch(Reupload(auth.token, auth.app.id, formData));
      alert("uploaded Succesfully");
      history.push("/user");
    } catch (err) {
      alert(err.message);
      console.log(err.message)
    }
  };
  console.log(data)
  let PassportAcc,
  Raccept,
  ExamAcc,
  matriocAcc,
  bankAccept,
  emcomAccept,
  offerAccept,
  photoAccept,
  verAceept = true;
  PassportAcc = data.passport.accept;
  Raccept = data.RegSlip.accept;
  ExamAcc = data.ExamSlip.accept;
  matriocAcc = data.matric.accept;
  bankAccept = data.bankPayment.accept;
  emcomAccept = data.ecomPayment.accept;
  if(data.type !== "i-kad"){
  photoAccept = data.photo.accept;
  verAceept = data.Verfication.accept;
  offerAccept = data.offerLetter.accept;}

  return (
    <form className="form__to__apply" onSubmit={handlePost}>
      <h1>
        <FormLabel className="upload_label" component="legend">
          Re-upload
        </FormLabel>
      </h1>
      <div className="container_visa">
        <div className="inputs">
          {!(PassportAcc) && (
            <div>
              {" "}
              <InputLabel htmlFor={"passportCopy"}>
                passport all pages
              </InputLabel>
              <TextField
                required
                name="passport"
                inputProps={{ accept: "application/pdf" }}
                id="passport"
                type="file"
              />
            </div>
          )}
          {!offerAccept&&data.type !== "i-kad"&& (
            <div>
              <InputLabel htmlFor={"OfferLetter"}>UTM Offer letter</InputLabel>
              <TextField
                required
                name={"OfferLetter"}
                inputProps={{ accept: "application/pdf" }}
                type="file"
                id="offer"
              />
            </div>
          )}
          {!matriocAcc && (
            <div>
              <InputLabel htmlFor={"Matric"}>Matric Copy</InputLabel>
              <TextField
                name={"Matric"}
                inputProps={{ accept: "application/pdf" }}
                type="file"
                id="matric"
                required
              />
            </div>
          )}
          {!Raccept && (
            <div>
              <InputLabel htmlFor={"RegSlip"}>
                Current Regestraion slip
              </InputLabel>
              <TextField
                name={"RegSlip"}
                inputProps={{ accept: "application/pdf" }}
                type="file"
                id="reg"
                required
              />
            </div>
          )}
        </div>
        <div className="inputs_2">
          {!photoAccept &&data.type !== "i-kad"&& (
            <div>
              <InputLabel htmlFor="passportPhoto">passport Photo</InputLabel>
              <TextField
                name="photo"
                inputProps={{
                  accept: "image/*",
                }}
                id="photo"
                type="file"
                required
              />
            </div>
          )}
          {!verAceept && data.type !== "i-kad"(
            <div>
              <InputLabel htmlFor={"VerfLetter"}>
                Verification letter
              </InputLabel>
              <TextField
                name={"VerfLetter"}
                inputProps={{ accept: "application/pdf" }}
                type="file"
                id="ver"
                required
              />
            </div>
          )}
          {!ExamAcc && (
            <div>
              <InputLabel htmlFor={"exam"}>
                Previous Exam
              </InputLabel>
              <TextField
                name={"exam"}
                inputProps={{ accept: "application/pdf" }}
                type="file"
                id="exam"
                required
              />
            </div>
          )}
          {!emcomAccept && (
            <div>
              <InputLabel htmlFor={"bankPayment"}>
                Ecommerce document
              </InputLabel>
              <TextField
                name={"bankPayment"}
                inputProps={{ accept: "application/pdf" }}
                type="file"
                id="e-commerce"
                required
              />
            </div>
          )}
          {!bankAccept && (
            <div>
              <InputLabel htmlFor={"ExamSlip"}>
                bank document
              </InputLabel>
              <TextField
                name={"bankPayment"}
                inputProps={{ accept: "application/pdf" }}
                type="file"
                id="bank"
                required
              />
            </div>
          )}

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

export default Ruploadform;
