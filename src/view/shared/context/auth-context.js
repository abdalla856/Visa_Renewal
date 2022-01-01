import { createContext } from "react";


export const  authCotext = createContext({isLoggedIn :false,
      login:(matricNum , password)=>{
        if(matricNum.toString()==="A18CS4009" && password.toString()==="123456"){
            console.log("logged_in")
            return true
        }else{
            console.log(matricNum)
            console.log(password)
            return false
        }
     } ,logout :()=>{} })