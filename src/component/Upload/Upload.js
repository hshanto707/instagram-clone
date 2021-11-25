import React, { useState, useEffect } from "react";
import "./Upload.css";

const Upload = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append("caption", caption);
    postData.append("img", imageURL);

    const imgData = new FormData();
    imgData.append("file", image);
    imgData.append("upload_preset", "instagram-clone");
    imgData.append("cloud_name", "hhs");

    fetch("https://api.cloudinary.com/v1_1/hhs/image/upload", {
      method: "POST",
      body: imgData,
    })
      .then((res) => res.json())
      .then((data) => setImageURL(data.secure_url))
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        caption: caption,
        img: imageURL,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="text" onchange={atm}></input>
      <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload;
