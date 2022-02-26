import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ReactRouter from './Pages/ReactRouter/Albums/ReactRouter';
import AlbumDetail from './Pages/ReactRouter/AlbumDetail/AlbumDetail';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='albums' element={<ReactRouter />} />
      <Route path='albums/:albumId' element={<AlbumDetail />} />

    </Routes>
    </>
  );
}

export default App;
