import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src="https://i.imgur.com/x4biPQW.png" className="me-3" alt="hshanto707" />
        <h3>hshanto707</h3>
      </div>

      <img
        className="post-image"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt=""
      />

      <h4 className="post-text">
        hshanto707 
        <span className="fw-normal ms-2">
          I love JavaScript💙
        </span>
      </h4>
    </div>
  );
};

export default Post;
