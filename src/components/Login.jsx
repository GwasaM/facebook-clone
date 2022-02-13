import React, {useState} from 'react';
import "./login.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import { useNavigate } from "react-router-dom";
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";

const Login = () => {
    
   /* const signIn = () =>{

        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => alert(error.message));
    };*/


    const[error, setError] = useState('');
    //const navigate = useNavigate();
    //const[email, setEmail] = useState('');
    //const[password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
    
        try{
          await signInWithPopup(auth, provider);
          //console.log(auth)
        //navigate("/home")
        } catch(err) {
            console.log(err);
          setError(err.message);
        }
        
      }
       

  return (
    <div className = "login">
        <div className = "fb__login">
            <FacebookIcon className = 'fb__icon' />
        </div>
        <button onClick = {handleSubmit} type = "submit" className = "fb__btn">Login Facebook</button>
    </div>
  )
}

export default Login