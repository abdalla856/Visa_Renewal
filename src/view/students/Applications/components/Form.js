import React from "react";
import { useForm } from "react-cool-form";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  TextField,
  Select,
  Checkbox,
  Button,
  Input,
} from "@material-ui/core";
import "./Form.css";
const Form = (params) => {
  const { form, use } = useForm({
    defaultValues: { username: "", framework: "", fruit: [] },
    onSubmit: (values) => console.log("onSubmit: ", values),
  });
  const errors = use("errors");

  return (
    <form className="form__to__apply" ref={form} noValidate>
      <h1><FormLabel className="upload_label" component="legend">{params.name}</FormLabel></h1>
      <div className="container_visa">
        <div className="inputs">
          {params.inputs.map((e, index) => {
            if (index < 4)
              return (
                <React.Fragment>
                  <InputLabel htmlFor={e.htmlFor}>{e.label}</InputLabel>
                  <TextField name={e.name} type="file" />
                </React.Fragment>
              );
          })}

          {/* <InputLabel htmlFor="picture">Passport Picture</InputLabel>
      <TextField name="upload-photo" type="file"/> */}
        </div>
        <div className="inputs_2">
          {params.inputs.map((e, index) => {
            if (index > 4)
              return (
                <React.Fragment>
                  <InputLabel htmlFor={e.htmlFor}>{e.label}</InputLabel>
                  <TextField name={e.name} type="file" />
                </React.Fragment>
              );
          })}

          {/* <InputLabel htmlFor="picture">Passport Picture</InputLabel>
      <TextField name="upload-photo" type="file"/> */}
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
