import "./App.css";
 import {React, useState, useEffect} from "react";
 import  Posts  from "./components/Posts";
 import {getAllPosts} from "./api/posts"
 import Register from "./components/Register";
 import { fetchMe } from "./api/auth";



function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState ({});
 //created state to grab token
//retrieving API data from getAllPosts and setting state 
  useEffect(() => {
    getAllPosts()
    .then((posts) => {
      setAllPosts(posts);
    })
    .catch((error) => {
    });
  }, []);
  
  //console.log(allPosts)
  //if I want data to render for the veery first time I want a useEffect
  //then when you get that data you are going to set it to State
  //books on a shelf and someone takes a book and you write that books name on a list
  // takes the list which is the dependency array and verify is again your list of missing books
  //it could also be anything you want but it must be related to the dependency array

//   useEffect(() =>{
// const getMe = async () => {
//   const data = await fetchMe(token)
//   console.log("This is where the token is", data);
// };
// getMe()
//   }, []);
//   console.log("this is app", token)



useEffect(() =>{
  const getMe = async () => {
    const data = await fetchMe(token);
    // get data by using fetchMe async function
    setUser(data)
    console.log("This is user is", data);
  };
  if(token) {
    getMe();
  }
  getMe()
    }, 
    [token]);
    console.log("this is app", token)
  return (
    <div className="App">Stranger's Things
  
  <Posts allPosts={allPosts} />
  <h1>{user?.username}</h1>
  //if there is a user, throw their username in there
  //change state - didn't need to make a new component
  //example of a ternany operator (?)
  // "if this is true, do this"
  <Register setToken={setToken} />
  </div>)
};



export default App;
