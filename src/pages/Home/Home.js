import React, {useState, useEffect} from 'react';
import Post from '../../component/Post/Post';
import Upload from '../../component/Upload/Upload';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [])

  return (
    <div>
      <Upload />
      {
        posts.map(post => <Post post={post} key={post._id}></Post>)
      }
    </div>
  );
};

export default Home;