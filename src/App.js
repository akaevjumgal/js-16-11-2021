import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ReactRouter from './Pages/ReactRouter/Albums/ReactRouter';
import AlbumDetail from './Pages/ReactRouter/AlbumDetail/AlbumDetail';
import Home from './Pages/Home/Home';
import RenderProps from './Pages/RenderProps/RenderProps';

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='albums' element={<ReactRouter />} />
      <Route path='albums/:albumId' element={<AlbumDetail />} />
      <Route path='renderProps' element={<RenderProps />} />
    </Routes>
    </>
  );
}

export default App;
