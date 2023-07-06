import './input.css'
import NavBar from "./components/NavBar";
import Postcreate from './components/Postcreate';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <NavBar />
      <Postcreate />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
