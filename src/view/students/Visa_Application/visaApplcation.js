import React, { useState } from "react";
import Form from "./components/Form";
import NavBar from "../../shared/components/Navigation/NavBar";
const VisaApplication = () => {
  // const [name, setName] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);
  const VISA_DATA = [
    {
      htmlFor: "passportCopy",
      label: "passport all pages",
      name: "passportPages",
    },
    {
      htmlFor: "passportPhoto",
      label: "passport Photo",
      name: "passportPhoto",
    },
    {
      htmlFor: "OfferLetter",
      label: "UTM Offer letter",
      name: "OfferLetter",
    },
    {
      htmlFor: "ExamSlip",
      label: "Previous examination slip",
      name: "ExamSlip",
    },
    {
      htmlFor: "RegSlip",
      label: "Current Regestraion slip",
      name: "RegSlip",
    },
    {
      htmlFor: "Matric",
      label: "Matric",
      name: "Matric",
    },
    {
      htmlFor: "VerfLetter",
      label: "Verification letter",
      name: "VerfLetter",
    },
  ];

  return (
    <React.Fragment>
      <NavBar />
      <Form inputs={VISA_DATA} name ={"Visa Application"} />
    </React.Fragment>
  );
};
export default VisaApplication;
