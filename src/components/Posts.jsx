import React from "react";
import "./Posts.css";
import { createNewPost} from "../api/posts";
import PostButtons from "./PostButton";
// import postButtons from "./postButtons";



const Posts = ({ allPosts, setAllPosts}) => {

  const postToCreate ={};
  

    return (
        <div className="user-posts">
          <h2>All Posts</h2>

          {/* <button
            onClick ={async () => {
              const newPost = await createNewPost();
              setAllPosts([newPost, ...allPosts]);
            }}
            >
            Creat New Post
          </button> */}

          <PostButtons
          action={async () => {
            const newPost = await createNewPost(postToCreate);
            setAllPosts([newPost,...allPosts]);
          }}
          content={'Create New Post'}
          />
          

          {/* <button 
            action={async () => {
            const updatedPost = await updatePartialPost(postId2, fieldsToUpdate);
            const listToReturn = await allPosts.filter(
            (post) => post.id !== updatedPost.id
            );
            setAllPosts([updatedPost, ...listToReturn]);
        }}
        content={'Update PATCH Post'}
        />

          <button 
            action={async () => {
            const postDeleted = await deletePost(postId3);
            setAllPosts([
            ...allPosts.filter((post) => post.id !== postDeleted.id),
            ]);
         }}
        content={'DELETE Post'}
          /> */}


          {allPosts.length ? (
          allPosts.map(({ _id, title, description, price, author, location}) => (
              <div key={_id} className="post">
              <h3>{title} </h3>
              <p id="description">{description}</p>
              <p id="price">Price: {price}</p>
              <p id="seller">Seller: {author.username}</p>
              <p id="location">Location: {location} </p>
              <button id="view-button">View</button>
            </div>
            ))
          ) : (
            <h2> No Posts Here</h2>
          )}
        </div>
      );
    };

    export default Posts;








    // <div className="user-posts">All Posts
    //       {allPosts.length && allPosts.map(({ _id, title, description, price, author, location}) => 
    //         {
    //           return (
    //           <div key={_id} className="post">
    //           <h3>{title} </h3>
    //           <p id="description">{description}</p>
    //           <p id="price">Price: {price}</p>
    //           <p id="seller">Seller: {author.username}</p>
    //           <p id="location">Location: {location} </p>
    //           <button id="view-button">View</button>
    //         </div>)
    //         }
          
    //       )}
    //     </div>