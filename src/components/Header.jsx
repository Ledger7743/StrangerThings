import React from "react";
import "./Header.css";
import LogButton from "./LogButton"
// import { NavLink } from "react-router-dom";

const Header = ({isLoggedIn}) => {
//   let activeClassName ="current"
console.log("is header logged in", isLoggedIn)
    return(
    <div id="header">  
        <header>
        <h1>Strangers Things</h1>
        <div id="links">
            <div>Home</div>
            <div>Posts</div>
            <div>Profile</div>
        </div>
         <div>
{/* psuedo-code: if isLoggedIn is true then make the button a logout button and 
when clicked delete our token from storage and re-render as a login <button></button> */}
{/* else if isLoggedIn is false make the button a loging button that redirects to login page */}
            <LogButton 
            isLoggedIn={isLoggedIn}
            content={ isLoggedIn ? 'Log Out' : 'Log In' }
            />
        </div>
    </header>
</div>)
      
}




                // <NavLink
                //     to="/Home"
                //     className={({isActive}) => {
                //         return isActive ? activeClassName : undefined;
                //     }}
                //     >
                //       Home
                //     </NavLink>
          
 export default Header;