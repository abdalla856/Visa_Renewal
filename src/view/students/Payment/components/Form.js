import React from "react";
// import { useForm } from "react-cool-form";
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
import { useDispatch } from "react-redux";
import { uploadPayment } from "../../../../actions/apps";
import { useContext } from "react";
import { authCotext } from "../../../shared/context/auth-context";
import { useHistory } from "react-router";

import "./Form.css";
const Form = (params) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useContext(authCotext);
  console.log(auth.app);

  const handlePayment = (e) => {
    e.preventDefault();
    var formData = new FormData();

    var e_commerce = document.querySelector("#e-commerce");
    var bank = document.querySelector("#bank");

    try {
      formData.append("ecomPayment", e_commerce.files[0]);
      formData.append("bankPayment", bank.files[0]);
      formData.append("payment_upload", true);
      formData.append("payment", true);
      // formData.append("payment", true);
      dispatch(uploadPayment(auth.token, auth.app.id, formData));
      history.push("/user");
    } catch (err) {
      alert(err.message);
    }
    alert("Created Succesfully");
  };

  return (
    <form className="form__to__apply" onSubmit={handlePayment}>
      <h1>
        <FormLabel className="upload_label" component="legend">
          {params.name}
        </FormLabel>
      </h1>
      <div className="container_visa">
        <div className="inputs">
        {/* Ecom */}
          <div>
            <InputLabel htmlFor={"e-commerce"}>
              Pay {auth.app.ecomPayment.amount}rm by using e-commerce
            </InputLabel>

            <TextField
              required
              name="e-commerce"
              inputProps={{ accept: "application/pdf" }}
              id="e-commerce"
              type="file"
              requried
            />
          <h6 className ="note_text">*please upload file in PDF format</h6>

          </div>
          {/* Bank */}
          <div>
            <InputLabel htmlFor="bank">
              Pay {auth.app.bankPayment.amount}rm using this bank number
              XXXXXXXX .Maybank
            </InputLabel>
            <TextField
              name="bank"
              inputProps={{
                accept: "file",
              }}
              id="bank"
              type="file"
              required
            />
          <h6 className ="note_text">*please upload file in PDF format</h6>

          </div>
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

export default Form;
