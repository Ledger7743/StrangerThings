import "./App.css";
 import {React, useState, useEffect} from "react";
 import  Posts  from "./components/Posts";
 import {getAllPosts} from "./api/posts"
 import Register from "./components/Register";
 import { fetchMe, loginUser } from "./api/auth";
 import Login from "./components/Login";
 import Header from "./components/Header";
 import PostForm from "./components/PostForm";
//  import LogOutButton from "."
//  import LogOut from "./components/LogOut";
 



function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] =useState(false);
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

useEffect(() =>{
  const getMe = async () => {
    const data = await fetchMe(token);
    setUser(data);
    
    console.log("this is user", data)
  };
  if (token) { 
    getMe(); 
  }
  
    }, [token]);



 console.log("in app isloggedin", isLoggedIn)


  return (
    <div className="App">AppStuff
    <Header isLoggedIn={isLoggedIn} />
  <Posts allPosts={allPosts} setAllPosts={setAllPosts}/>
  <PostForm setAllPosts={setAllPosts} getAllPosts={getAllPosts}/>
  <h1>{user?.username} </h1>
  <Register setToken={setToken} />
  <Login setToken={setToken}
  setUser={setUser}
  setIsLoggedIn={setIsLoggedIn}
  isLoggedIn={isLoggedIn}/>
  </div>)
 
  
};



export default App;
