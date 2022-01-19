import React from "react";
import NavBar from "../../shared/components/Navigation/NavBar";
import Form from "./components/Form";
const IkadApplicatoin = () => {
  const Ikad_DATA = [

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
  return(
      <React.Fragment>
          <NavBar/>
          <Form inputs ={Ikad_DATA} name ="i-Kad Application"/>
      </React.Fragment>
  );
};

export default IkadApplicatoin;
