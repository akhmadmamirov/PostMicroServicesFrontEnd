import './input.css'
import NavBar from "./components/NavBar";
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <NavBar />
      <PostCreate />
      <hr />
      <div className="text-2xl m-7">Posts</div>
      <PostList />
    </div>
  );
}

export default App;
