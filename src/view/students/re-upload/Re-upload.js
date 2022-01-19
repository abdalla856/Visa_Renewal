import React from "react";
import NavBar from "../../shared/components/Navigation/NavBar";
import Form from "./components/components/Form";
const Reupload = () => {
    const Reupload_DATA = [
        {
          htmlFor: "photo",
          label: "new photo",
          name: "photo",
        },
 
      ];
    
    
 
 return <React.Fragment>
      <NavBar/>
      <Form inputs={Reupload_DATA} name ={"Re-Upload"} />

  </React.Fragment>;
};
export default Reupload;
