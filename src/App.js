import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Posts from "./pages/JSON-posts";



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='posts' element={<Posts/>} />
      </Routes>
    </>
  );
}

export default App;
