import { Route,Routes } from "react-router-dom";
import  Post from './Component/Post';
import  Posts from './Component/Posts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Posts />} />
        <Route path='/:posts' element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;