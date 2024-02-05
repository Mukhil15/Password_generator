import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

import {auth,provider} from '../firebase'
import {signInWithPopup} from 'firebase/auth'
import Main from "./Main"
import './formInput.css'
const Signup = () =>{
   const [value,setValue]= useState('');
   const handleClick =() =>{
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)

    })
   } 
useEffect(()=>{
    setValue(localStorage.getItem('email')) 
})
    return (
        
        <div>
            
        
        {value?<Main />:
                <>
                <div className="boxx">
                <div className="form">
             <center><h1 style={{fontSize:"50px",padding:"20px"}}>Login</h1><br></br>
        <div className="formInput">
          <input type="email" placeholder="email" className="inbox" />
        </div>
        <div className="formInput">
          <input type="password" placeholder="password" className="inbox"/>
        </div>
        <button className="bbutton" style={{ marginBottom: "8px" }}>Login</button>

        <p className="pp">or</p>
        <Link to="/register"><button className="bbutton">Register</button></Link>
        </center> </div>
           <><center><button className="sbutton" onClick={handleClick}>SignIn with Google</button></center></>
           </div>
           </> 
            }</div>
        
    );
};
export default Signup;