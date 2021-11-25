import { Avatar } from "@mui/material";
import useFirebase from "../../hooks/useFirebase"
import React from "react";
import "./Post.css";

const Post = ({post}) => {
  // const {user} = useFirebase();
  const {userName, caption, img} = post;

  const handleComment = () => {

  }

  return (
    <div className="post">
      <div className="post-header">
        <Avatar  src="" className="me-3" alt="" />
        <h3>{userName}</h3>
      </div>

      <img
        className="post-image"
        src={img}
        alt=""
      />

      <h4 className="post-text">
        {userName} 
        <span className="fw-normal ms-2">{caption}</span>
      </h4>
      <div>
        <form onSubmit={handleComment}>
          <input type="text" placeholder="Write A Comment"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
