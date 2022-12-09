import React from "react";
import "./Posts.css";



const Posts = ({ allPosts}) => {
  // const allPosts = props
  //console.log(allPosts)
    return (
        <div className="user-posts">
          {allPosts.length && allPosts.map(({ _id, title, description, price, author, location}) => 
            {
              return (
              <div key={_id} className="post">
              <h3>{title} Posts </h3>
              <p id="description">{description}</p>
              <p id="price">Price: {price}</p>
              <p id="seller">Seller: {author.username}</p>
              <p id="location">Location: {location} </p>
              <button id="view-button">View</button>
            </div>)
            }
          
          )}
        </div>
      );
    };

    export default Posts;