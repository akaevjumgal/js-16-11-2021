
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from '../src/Components/Posts';
import Post from '../src/Components/Post'



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
