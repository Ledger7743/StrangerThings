import {React, useState} from "react";
import { registerUser } from "../api/auth";

//make a request to stranger things API
//had to pass  setToken to Register or else it will not pull the new state of token 
//and therefore you can not use it to 
const Register = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return <div>
        <form onSubmit={async (e) =>{
           try {
            e.preventDefault();
            //changed the response to token as it was changed form the auth.js 
            const token = await registerUser(username, password);
            // setting token into global storage so it can be pulled throughout the app
           setToken(token);
           localStorage.setItem("token", token);
           //console.log("this is token in register", token)
           } catch (error) {
            console.error(error)
           }
        }}>
            <input value={username} minLength={5} type='text' placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
            <input value={password} minLength={5} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">submit</button>
        </form>
    </div>
}


export default Register;