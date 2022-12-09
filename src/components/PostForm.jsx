import {React, useState} from "react";
import "./PostForm.css";


const PostForm = () => {
    const[newTitle, setTitle] = useState("");
    const[newDescription, setDescription] = useState("");
    const[newPrice, setPrice] = useState("");
    const[newLocation, setLocation] = useState("");
    return <div id="post-form"> THIS IS POST FORM
        <form onSubmit={async (e) =>{
            try {
             e.preventDefault();
           
            } catch (error) {
             console.error(error)
            }
         }}>
             <input value={newTitle}  type='text' placeholder="Title" onChange={(e)=>setTitle(e.target.value)}></input>
             <input value={newDescription}  type='text' placeholder='Description' onChange={(e)=>setDescription(e.target.value)}></input>
             <input value={newPrice}  type='text' placeholder="Price" onChange={(e)=>setPrice(e.target.value)}></input>
             <input value={newLocation}  type='text' placeholder='Location' onChange={(e)=>setLocation(e.target.value)}></input>
             <button type="submit">submit</button>
         </form>
    </div>
 }

 export default PostForm;