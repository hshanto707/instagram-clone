import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Post from './component/Post/Post';

function App() {
  return (
    <div className="app">
      <Header />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
