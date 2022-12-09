 import React from "react";



// const LogOut = () => {
    // psuedocode: if isLoggedIn is true (if there is a user logged in) then remove their token from the local storage
//     // otherwise alert No one to log out
//     // {token} ? localStorage.setItem(" ") 
//     return <button id="logout-button" onClick={() => 
        // isLoggedIn ? localStorage.removeItem("token", token) : alert('')
    
//     }
// }
{/* psuedo-code: if isLoggedIn is true then make the button a logout button and 
when clicked delete our token from storage and re-render as a login <button></button> */}
{/* else if isLoggedIn is false make the button a login button that redirects to login page */}
const LogButton = ({content, action}) => {
   
    return(
    <button onClick={action}> {content} </button>
 )}


export default LogButton