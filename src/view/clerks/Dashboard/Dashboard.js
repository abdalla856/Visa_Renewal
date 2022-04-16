import React, {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import CardSection from './components/Card/CardSection'
import {useDispatch} from "react-redux"
import { getAllStudents,getAllApps } from '../../../actions/clerk';
import { useContext } from "react";
import { authCotext } from "../../shared/context/auth-context";
import {useSelector} from 'react-redux'
const Clerk_dashboard = () =>{
    // window.location.reload(false);



    const  auth = useContext(authCotext)
    const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getAllApps(auth.token))
       dispatch(getAllStudents())
        
     },[getAllStudents,getAllApps])
   const   app = useSelector((state) => state.apps)
     const  data = useSelector((state) =>state.user) 
    console.log(data)
    console.log(auth.userId)
    console.log(app)
    useEffect(()=>{
      auth.users = data
     auth.app = app
    },[data , app])
     console.log(auth)
    return (
        <>
        <Navbar/>
        <CardSection/></>
        
        
    )






}

export default Clerk_dashboard