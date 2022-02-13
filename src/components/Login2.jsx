import React from 'react';
import "./login.css";

const Login = () => {
    const signIn = () => {

    }
  return (
    <div className = "login">
        <div className = "loginLogo">
            <img src = "./Facebook_Logo.png" 
                alt = ""
                
            />
            <input type = "text" />
            <input type = "text" />
             <button className = "login__btn" type = "submit" onClick = {signIn}>Login</button>
        </div>
       
    </div>
  )
}

export default Login