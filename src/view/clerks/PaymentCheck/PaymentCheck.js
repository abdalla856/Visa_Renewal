import React, { useEffect } from "react";
import Paymentpdfview from "./components/pdf_view";
import Navbar from "../Dashboard/components/Navbar/Navbar";
// import I_kadPdfView from "./components/i_kad_pdf";

import { useParams } from "react-router-dom";

const PaymentCheck = () => {
// const {type} = useParams()

  return (
    <>
    <Navbar />
    <Paymentpdfview/> 
    </>
  )
};

export default PaymentCheck;
