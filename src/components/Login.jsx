import {React, useState} from "react";
import { loginUser } from "../api/auth";
import LogButton from "./LogButton";
// import { storeCurrentUser } from "../auth";
import "./Login.css";


const Login = ({setToken, setIsLoggedIn, isLoggedIn}) => {
    console.log("looog", isLoggedIn )
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

const logInUser = async (e) =>{
    try {
     e.preventDefault();
     console.log(username, password)
     const token = await loginUser(username, password);
     setToken(token);
     localStorage.setItem("token", token)
     !token ? setIsLoggedIn(false) : setIsLoggedIn(true)
     //console.log("show me islogged in", isLoggedIn)
     

    } catch (error) {
     console.error(error)
    }
 }

 const logOutUser =async (e) =>{
    try{
        e.preventDefault();
        isLoggedIn ? localStorage.removeItem("token") : console.log('cant log ya out')

    } catch (error) {
            console.error(error)
           }
        }
    


    return <div>
         <form >
            <h2>I am Login Below</h2>
            <input value={username} minLength={5} type='text' placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
            <input value={password} minLength={5} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
        </form>
        <LogButton 
            isLoggedIn={isLoggedIn}
            content={ isLoggedIn ? 'Log Out' : 'Log In'}
            action={!isLoggedIn ? logInUser : logOutUser}
            />
    </div>
}

export default Login;