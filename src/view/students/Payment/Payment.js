import React from "react";
import NavBar from "../../shared/components/Navigation/NavBar";
import Form from "./components/Form";
const Payment = () => {
    const Payment_DATA = [
        {
          htmlFor: "e-commerce",
          label: "Pay 300rm by using e-commerce",
          name: "e-commerce",
        },
        {
          htmlFor: "bank",
          label: "Pay 550rm using this bank number XXXXXXXX .Maybank",
          name: "bank",
        },
      ];
    
    
 
 return <React.Fragment>
      <NavBar/>
      <Form inputs={Payment_DATA} name ={"Payment"} />

  </React.Fragment>;
};
export default Payment;
