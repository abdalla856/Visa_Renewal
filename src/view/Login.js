import React ,{ useContext , useState , useEffect } from "react";
import './Login.css'
import { anime } from 'react-anime';
// import Card from '../view/shared/components/UIElements/Card'
import Input from '../view/shared/components/FormElements/Input'
// import leftBox from "./Login/left side/components/leftBox";
import {
    useForm
} from './shared/hooks/FormHooks'
import { authCotext } from "./shared/context/auth-context";

import { VALIDATOR_MIN, VALIDATOR_REQUIRE } from "./shared/util/validator";
// import Button from './shared/components/FormElements/Button'
// import {Container ,Row} from 'react-bootstrap'

const Login = () => {
const [userInfo , setUserInfo] = useState({matricNo:'', password:""});
const [checkLoggedIn , setcheckLoggedIn] =useState(true);
const auth = useContext(authCotext)

  useEffect(()=>{if(auth.login(userInfo.matricNo , userInfo.password) ){
    auth.isLoggedIn=true;}
    console.log(auth.isLoggedIn)
  },
  [userInfo]
  )



 

    let current = null 

const passAnimation =()=>{
    
   if (current) current.pause();
        current = anime({
          targets: 'path',
          strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
          }
        })
}

 const   emailAnimation =() =>{
       if (current) current.pause();
            current = anime({
              targets: 'path',
              strokeDashoffset: {
                value: 0,
                duration: 700,
                easing: 'easeOutQuart'
              },
              strokeDasharray: {
                value: '240 1386'
                ,
                // 1386
                duration: 700,
                easing: 'easeOutQuart'
              }
            });
          
    }
    const submitAnimation =()=>{ if (current) current.pause();
        current = anime({
          targets: 'path',
          strokeDashoffset: {
            value: -730,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: '530 1386',
            duration: 700,
            easing: 'easeOutQuart'
          }
        });}
        const authSubmitHandler = event => {
          event.preventDefault()

        }
        const checkIsLoggedIn=()=>{
          if(!auth.isLoggedIn){
            setcheckLoggedIn(false)
          }else 
          setcheckLoggedIn(true)

        }
return (
<div classNameName="page">
  <div className="container">
    <div className="left">
      <div className="login">Login</div>
      <div className="eula">By logging in you will have acess to 
      international students serivce organization for visa renewal application.  </div>
    </div>
    <div className="right">
    <svg viewBox="0 0 320 300">
        <defs>
          <linearGradient
                          inkscapeCollect="always"
                          id="linearGradient"
                          x1="13"
                          y1="193.49992"
                          x2="307"
                          y2="193.49992"
                          gradientUnits="userSpaceOnUse">
            <stop
                  stopColor="#ff00ff"
                  offset="0%"
                  id="stop876" />
            <stop
                  stopColor="#ff0000"
                  offset="1"
                  id="stop878" />
          </linearGradient>
        </defs>
        
        {checkLoggedIn ?
      <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />

      :
      <path d="m 40,139.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />

      }  </svg>
      <form  onSubmit={authSubmitHandler}>
      {!checkLoggedIn ? <div id="error">Incorrect, Try again</div> : null}
        <label for="email">Matric Number</label>
        <input type="text" id="email"  onFocus={emailAnimation}
        onChange={e=>{setUserInfo({...userInfo , matricNo:e.target.value})}}
        ></input>
        <label for="password">Password</label>
        <input type="password" id="password" onFocus={passAnimation}
        onChange={e=>{setUserInfo({...userInfo , password:e.target.value})}}
        ></input>
        <input type="submit" id="submit" value="Login" onFocus={submitAnimation}
        onClick={checkIsLoggedIn}
         ></input>
      </form>
    </div>
  </div>
</div>

);
}
  

export default Login;